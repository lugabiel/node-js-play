const fs = require('fs');

//const files = fs.readdirSync('./');//syncronous

fs.readdir('./',function(err,files){
  if (err) console.log('got error:',err);
  else console.log(files);
});