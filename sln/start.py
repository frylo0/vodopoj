import os

print("""Итак приступим.
Сейчас ты настроишь прогу чтобы она правильно работала с твоей БД.
""")

I = '/' if( os.name == 'posix' )else '\\'
script_dir = os.path.dirname(__file__)
def dbd(arg):
   os.system(f'py .{script_dir}{I}env{I}dbd.py {arg}');
   
dbd('relogin')

print("""
Отлично! Теперь ты можешь использовать команды:

py db-pull.py
   Делается в любой момент: git pull + настройка БД
py db-push.py
   Делается после твоего обычного коммита: создаёт дамп БД + git add SQLDUMP && git commit -m 'sqldump' && git push
   Теперь по русски: дамп БД + новый коммит + git push

Они будут синхронизировать БД из репо с твоей локальной ;)""")