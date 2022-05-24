const fs = require('fs');
const path = require('path');



fs.readdir(path.join(__dirname,'styles'),{withFileTypes:true}, (err, files)=>{
  if(err) (console.log(err));
  const filteredFiles = files.filter(file=> file.isFile())
    .filter(file=>path.extname(file.name) === '.css');
		fs.access(path.join(__dirname,'project-dist', 'bundle.css'), (err)=>{
      if(err){
				filteredFiles.forEach(item=>{

					let readStream = fs.createReadStream(path.join(__dirname, 'styles',`${item.name}`));
					let writeSteram = fs. createWriteStream(path.join(__dirname,'project-dist', 'bundle.css'), {flags:'a'});
			
					readStream
						.on('error',(err)=>{
							if(err){
								writeSteram.destroy();
								writeSteram.end(console.log('Something wrong....'));
							}
						})
						.pipe(writeSteram)
						.on('error',(err)=>{
							if(err){
								writeSteram.destroy();
								writeSteram.end(console.log('Something wrong....'));
							}
						});
				});


			}else{

				fs.rm(path.join(__dirname,'project-dist', 'bundle.css'),/* {recursive: true},*/ (err)=>{
					if(err){console.log(err);}
				
		
					filteredFiles.forEach(item=>{

						let readStream = fs.createReadStream(path.join(__dirname, 'styles',`${item.name}`));
						let writeSteram = fs. createWriteStream(path.join(__dirname,'project-dist', 'bundle.css'), {flags:'a'});
				
						readStream
							.on('error',(err)=>{
								if(err){
									writeSteram.destroy();
									writeSteram.end(console.log('Something wrong....'));
								}
							})
							.pipe(writeSteram)
							.on('error',(err)=>{
								if(err){
									writeSteram.destroy();
									writeSteram.end(console.log('Something wrong....'));
								}
							});
					});
				});	
			}
		}); 
});



