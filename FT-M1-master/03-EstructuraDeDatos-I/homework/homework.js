'use strict'
// Las funciones nFactoria y nFibonacci deben resolverlas
// usando recursión. Una vez realizadas de esa forma pueden probar hacerlas
// de forma iterativa pero esto último no es obligatorio.

function nFactorial(n) {
  // devolvé el factorial de n (n!)
  // ej:
  // el factorial de 3 es 6 (3 * 2 * 1)
  //
  // en cada iteracion  x! = x * (x-1)
  if (n === 1 || n == 0){
    return 1
  }
  else {
    return n * nFactorial(n-1);
  }
  }


function nFibonacci(n) {
  // Secuencia de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…
  // Retorna el enésimo numero de la serie
  // nFibonacci(0) // 0  // el elemento 0 es cero
  // nFibonacci(1) // 1 // el elemento 1 es 1
  // nFibonacci(6) // 1 // el elemento 6 es 8
  // sucesion de fibonacci n = n-1 + n-2 
  // n = 4 ==> 4-1 + 4-2 ==> 5 
  if (n < 2){
    return n; 
  }
  else {
    return nFibonacci(n-1) + nFibonacci(n-2);
  }
}
console.log(nFibonacci(10));

// Para esta parte no es necesario utilizar recursión.
// Implementa la clase Queue que debe contener los siguientes métodos:
// enqueue: Agrega un valor a la queue. Respeta el orden existente.
// dequeue: Remueve un valor de la queue. Obedece a FIFO y respeta el underflow (devuelve undefined cuando la queue tiene size cero, o sea, cuando no tiene ningún elemento).
// size: Devuelve el número de elementos que contiene la queue.

/*function Queue() {
  this.arr = [];
}
Queue.prototype.enqueue = function(arg){
  this.arr.push(arg)
};
Queue.prototype.dequeue =function(){
  return this.arr.shift()
};
Queue.prototype.size = function(){
  return this.arr.length;
} */

/*function Queue() {
  this.arr = [];

this.enqueue = function(arg){
  this.arr.push(arg)
};
this.dequeue =function(){
  return this.arr.shift()
};
this.size = function(){
  return this.arr.length;
}
}
*/

class Queue{
  constructor(data){
    this.data = [];
  }
  enqueue(arg){
    this.data.push(arg)
  };
  dequeue(){
    return this.data.shift()
  };
  size(){
    return this.data.length;
}
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
