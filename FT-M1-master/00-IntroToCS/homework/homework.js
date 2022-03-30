'use strict'

function BinarioADecimal(num) {
  // pasar num a un array
  //hacer un ciclo for para hacer la conversion 
  // hacer sumatoria 
var decimal = [...num].reverse();
var suma = 0;
for (var i = 0; i < decimal.length; i++){
  suma = suma + decimal[i] * Math.pow(2, i);
}
return suma;
}


function DecimalABinario(num) {
  // tu codigo aca
  //crear un array vacio 
  // dividir numero con el modulo 
  // añadir el resto al array
  var binario = []
  var resto;
  do{
    resto = (num % 2)
    binario.push(resto);
    num = Math.floor(num / 2);

  }
  while (num > 0);
return binario.reverse().join("");
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}