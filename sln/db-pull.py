import os

print("""Выполняется пулл БД.
""")

script_dir = os.path.dirname(__file__)
I = '/' if( os.name == 'posix' )else '/'#'\\'
def dbd(arg):
   global script_dir
   os.system(f'python3 .{script_dir}{I}env{I}dbd.py {arg}')
   
os.system('git pull')
dbd('import')