const fs = require('fs');
const { exec } = require('child_process');



async function main() {
   const {print, input, argv} = new Console();
   const timeoutDuration = argv.timeout || 500;
   
   let timeout;
   fs.watch('./src', (eventType, filename) => {
      print('change');
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
         print('BUILD');
         exec('npm run build', (err, stdout, stderr) => {
            print('Build error:', err, stdout, stderr);
         });
      }, timeoutDuration);
   });
}



class Console {
   constructor() {
      const readlineApi = require('readline');
      const rl = readlineApi.createInterface(process.stdin, process.stdout);
      async function input(question) {
         return await new Promise(res => rl.question(question, res));
      }
      const print = console.log;

      const argv = process.argv.slice(2);
      argv.filter(arg => arg.startsWith('--')).forEach(arg => {
         const match = arg.match(/^--(?<key>.*?)=(?<val>.*?)$/);
         const key = match.groups.key;
         const val = match.groups.val;
         argv[key] = val;
      });
      argv.forEach((arg, i) => {
         if (arg.startsWith('--')) delete argv.splice(i, 1);
      });

      print('Console argv:', argv);

      this.input = input;
      this.print = print;
      this.argv = argv;
   }
}



main().catch(err => console.log(err) && process.exit());