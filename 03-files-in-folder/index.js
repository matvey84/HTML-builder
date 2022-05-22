const fs = require('fs');
const path = require('path');
const filePath = path.resolve(__dirname, 'secret-folder');

fs.readdir(filePath, {withFileTypes: true},(err, files)=>{
  if(err) {console.log(err);}
  else{
    files.forEach(file=>{
      if(!file.isDirectory()){
        const newPath = path.join(filePath, file.name);
        fs.stat(newPath, (err, item)=>{
          if(err) {console.log(err);}
          console.log(`${path.parse(newPath).name} - ${path.extname(newPath).slice(1)} - ${item.size*0.001}kb`);
        });
      }else{return;}
    });
  }
});	





