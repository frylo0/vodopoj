import os

print("""Выполняется пуш БД.
""")

script_dir = os.path.dirname(__file__)
I = '/' if( os.name == 'posix' )else '\\'
def dbd(arg):
   os.system(f'py .{script_dir}{I}env{I}dbd.py {arg}')
   
dbd('')
os.system(f'git add .{script_dir}{I}SQLDUMP')
os.system('git commit -m "sqldump"')
os.system('git push')