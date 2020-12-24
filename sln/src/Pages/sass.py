import os

dir = os.scandir('./')
res = []

for name in dir:
   name = name.name
   if os.path.isdir(f'./{name}'):
      res += [f'./{name}/{name}.sass:./{name}/{name}.css']
      
res_str = ' '.join(res)
os.system(f'npx sass --no-source-map --watch {res_str}')
