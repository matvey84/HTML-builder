const fs = require('fs');
const path = require('path');

const { stdin, exit } = require('process');

const writeSteram = fs.createWriteStream(path.join(__dirname, 'text.txt'),{flags:'a'});
writeSteram.on('greet', (greeting)=>{
  console.log(greeting);
});
writeSteram.emit('greet', 'Enter text!');


stdin.on('data', (data)=>{
  if(data.toString().trim() === 'exit') exit();
  writeSteram.write(data);

});

process.on('exit', ()=>{
  console.log('Bye!');
});
process.on('SIGINT', handle);
function handle() {
  exit();
}

