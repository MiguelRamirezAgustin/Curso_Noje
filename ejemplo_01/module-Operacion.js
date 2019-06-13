
const Opreaciones = {};

function sumar(x1, x2) {
      return x1 + x2;
}

function restar(x1, x2) {
      return x1 - x2;
}

function dividir(x1, x2) {
      if (x2 == 0) {
            console.log('No se puede dividir')
      } else {
            return x1 / x2;
      }
}

function multiplicar(x1, x2) {
      return x1 * x2;
}



Opreaciones.sumar = sumar;
Opreaciones.restar = restar;
Opreaciones.dividir = dividir;
Opreaciones.multiplicar = multiplicar;


module.exports= Opreaciones;