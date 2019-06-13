let datos={
      nombre:'Miguel',
      apellidos:'Ramirez',
      edad:'20',
      getNombre:function() {
            return( `${this.nombre} ${this.apellidos}  - Edad: ${this.edad}`)
      }
}
console.log('Datos ', datos.getNombre())


//cambio de variable
let {nombre: cambioVariable, apellidos, edad}=datos;

console.log(cambioVariable, apellidos, edad)
            //Miguel Ramirez 20