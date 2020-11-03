import os, json, sys, re

# DBD - Data Base Dump

class FormatString(str):
   END = '\033[0m'
   UP = '\033[1A'
   
   def __init__(self, string) -> None:
      super(str, string)
      
   def _format(self, n):
      return FormatString(f'\033[{n}m' + self + FormatString.END)
   
   @property
   def header(self): 
      return self._format(95)
   @property
   def blue(self): 
      return self._format(94)
   @property
   def cyan(self): 
      return self._format(96)
   @property
   def green(self): 
      return self._format(92)
   @property
   def warning(self): 
      return self._format(93)
   @property
   def fail(self): 
      return self._format(91)
   @property
   def bold(self): 
      return self._format(1)
   @property
   def underline(self): 
      return self._format(4)
   @property
   def normal(self):
      return self
   
class xstr(str):
   TAGS = {
      'bold': 'bold',
      'underline': 'underline',
      'purple': 'header',
      'blue': 'blue',
      'cyan': 'cyan',
      'green': 'green',
      'yellow': 'warning',
      'red': 'fail',
   }
   def __new__(cls, string, *args, **kwargs):
      res = string
      for tag, style in xstr.TAGS.items():
         res = re.sub(f'<{tag}\|'+r'(.*?)'+f'>', getattr(FormatString(r'\1'), style if( os.name == 'posix' )else 'normal'), res)
      return super(xstr, cls).__new__(cls, res)
   
   def __init__(self, string: str):
      pass

script_dir = os.path.dirname(__file__)
delim_char = '/' if( os.name == 'posix' )else '\\'
dbd_path = f'{script_dir}{delim_char}dbd.json'
argv = sys.argv[1:]

NOT_CORRECT_SERVER = 'При настройке программы был указан неверный тип сервера. Пожалуйста, повторите настройку с помощью команды: <blue|python3> <cyan|dbd.py> <yellow|relogin>'

def register(dbd_file):
   global delim_char
   
   server, user, pwrd, db = [
      input(
         xstr(s) + ( '' if( s.endswith(':') )else ' для подключения к БД: ')
      ) for s in [
         '<purple|OpenServer>(1) или <purple|LAMP>(2)', 
         '<green|Логин>', 
         '<cyan|Пароль>', 
         '<yellow|Имя базы>'
      ]
   ]
   server = 'OpenServer' if server == '1' else 'LAMP'
   if (server == 'OpenServer'):
      server_folder = input(xstr('Полный путь к папке <purple|OpenServer> (напр. C:\\\\Users\\\\User\\\\Downloads\\\\OpenServer): '))
      mysql_ver = input(xstr('Какая версия <purple|mysql> используется (строка из настроек OpenServer, напр. <cyan|MySQL-8.0-x64>): '))
   else:
      server_folder = ''
      mysql_ver = ''
   dbd_str = re.sub(r'\s', '', f"""{{
      "server": "{server}", 
      "server_folder": "{server_folder}", 
      "mysql_ver": "{mysql_ver}",
      "user":"{user}", 
      "pwrd":"{pwrd}", 
      "db":"{db}"
   }}""")
   dbd_file.write(dbd_str)
   os.chmod(dbd_path, 0o777)
   print(f'\nДанные успешно изменены: \n{dbd_str}')
   return dbd_str


def path_to_sqldump():
   global delim_char

   target_file = ''
   exec_dir = os.getcwd()
   folder = list(map(lambda f: f.name, os.scandir(exec_dir)))
   if 'back' in folder:
      target_file = delim_char.join(['.', 'back', 'SQLDUMP', f"{dbd_json['db']}.sql"])

   elif exec_dir.split(delim_char).pop() == 'back':
      target_file = delim_char.join(['.', 'SQLDUMP', f"{dbd_json['db']}.sql"])
      
   else:
      target_folder = exec_dir.split(delim_char)
      last = target_folder.pop()
      while (last != 'back'):
         if (len(target_folder) == 0):
            print('Не удалось найти папку SQLDUMP, возможно вам стоит перейти в другую папку.')
            exit()
         last = target_folder.pop()
      
      target_file = delim_char.join(target_folder + [last, 'SQLDUMP', 'vodopoj.sql'])
      
   return target_file

dbd_json = {}
def get_dbd_json(mode):
   global dbd_json
   with open(dbd_path, mode, encoding='utf8') as dbd_file:
      dbd_str = dbd_file.read()
      dbd_json = json.loads(dbd_str)
      
def get_dbd_json_anyway():
   try:
      get_dbd_json('r')
   except OSError: # no file
      get_dbd_json('w+')


if len(argv) > 0:
   
   if argv[0] == '--help':
      print(xstr(f"""Production by <purple|frity corp.>: http://frity.ru/
   Tool to create mysqldump to folder
      <blue|python3> <cyan|dbd.py> <yellow|--help>  - show help
      <blue|python3> <cyan|dbd.py> <yellow|relogin> - remove user and password and as for new
      <blue|python3> <cyan|dbd.py>         - create mysqldump and put file to SQLDUMP folder. SQLDUMP search: cd up until 'back' folder, then cd to SQLDUMP
      <blue|python3> <cyan|dbd.py> <yellow|import>  - imports data from SQLDUMP folder. SQLDUMP search: cd up until 'back' folder, then cd to SQLDUMP
   Info:
      Settings file: <underline|{dbd_path}>
   """))

   elif argv[0] == 'relogin':
      with open(dbd_path, 'w+', encoding='utf8') as dbd_file:
         register(dbd_file)
         
   elif argv[0] == 'import':
      get_dbd_json_anyway()
      sqldump = path_to_sqldump()
         
      mysql_bin = ''
      if dbd_json['server'] == 'LAMP':
         mysql_bin = f"mysql"
      elif dbd_json['server'] == 'OpenServer':
         mysql_bin = f"{dbd_json['server_folder']}\\modules\\database\\{dbd_json['mysql_ver']}\\bin\\mysql.exe"
      else:
         print(NOT_CORRECT_SERVER)
         exit()
         
      os.system(f"{mysql_bin} --user={dbd_json['user']} --password={dbd_json['pwrd']} {dbd_json['db']} < {sqldump}")
      
else:
   get_dbd_json_anyway()
   sqldump = path_to_sqldump()
      
   mysqldump_bin = ''
   if dbd_json['server'] == 'LAMP':
      mysqldump_bin = f"mysqldump"
   elif dbd_json['server'] == 'OpenServer':
      mysqldump_bin = f"{dbd_json['server_folder']}\\modules\\database\\{dbd_json['mysql_ver']}\\bin\\mysqldump.exe"
   else:
      print(NOT_CORRECT_SERVER)
      exit()
      
   os.system(f"{mysqldump_bin} --user={dbd_json['user']} --password={dbd_json['pwrd']} {dbd_json['db']} > {sqldump}")