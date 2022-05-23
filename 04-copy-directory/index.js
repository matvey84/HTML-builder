const fs = require('fs');
const path = require('path');
console.log('first');

fs.access(path.join(__dirname, 'files-copy'),(err)=>{
  if(err){

    fs.mkdir(path.join(__dirname, 'files-copy'), {recursive: true}, (err)=>{
      if(err){console.log(err);}
      console.log('The folder are created (no)');
      copy();
    });

  }else{

    fs.rm(path.join(__dirname, 'files-copy'), {recursive: true}, (err)=>{
      if(err){console.log(err);}
      console.log('The folder removed!');

      fs.mkdir(path.join(__dirname, 'files-copy'), {recursive: true}, (err)=>{
        if(err){console.log(err);}
        console.log('The folder are created(yes)');
        copy();
      });
    });	
  }
});


function copy () {
  fs.readdir(path.join(__dirname, 'files'), {withFileTypes:true}, (err, files)=>{
    if(err){console.log(err);}
    files.forEach(file => {
      if(file.isFile()){
        fs.copyFile(path.join(__dirname, 'files',`${file.name}`), path.join(__dirname, 'files-copy',`${file.name}`), (err)=>{
          if(err){console.log(err);}
        });
      }
    });
  });	
  console.log('All files are upload!');
}


