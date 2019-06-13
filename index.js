
function sumar(x1,x2){
  return x1+x2;
}

function restar(x1,x2){
      return x1-x2;
}

function dividir(x1,x2){
      if(x2==0){
            console.log('No se puede dividir')
      }else{
            return x1/x2;
      }
}

function multiplicar(x1,x2){
      return x1*x2;
}

console.log('Datos suma', sumar(2,2));
console.log('Datos suma', restar(2,2));
console.log('Datos suma', multiplicar(2,2));
console.log('Datos suma', dividir(10,2));