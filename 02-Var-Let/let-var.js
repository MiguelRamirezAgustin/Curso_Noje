//Ejemplo de var
var nombre = 'Miguel';
if(true){
      var nombre='Ramirez'
}
console.log(nombre);



//Ejemplo de variable Let
let apellidos='Ramirez';
if(true){
   let apellidos='Ramirez';
}

apellidos='Ramirez1'
apellidos='Ramirez2'
apellidos='Ramirez3'

console.log(apellidos);


for(var i=0; i<5; i++){
      console.log('valor_ ', i);
}

//contiene valor + 1 por ser inicializada con anteriridad 
console.log('valor_01 \n ', i);