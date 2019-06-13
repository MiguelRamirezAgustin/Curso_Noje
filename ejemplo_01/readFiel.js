const fs = require('fs');

fs.readFile('./file/file.txt', function(error, succes){
    if(error){
          console.log('Error al leeer archivo ',  error);
    }
    console.log('Datos exitos ', succes.toString());
})