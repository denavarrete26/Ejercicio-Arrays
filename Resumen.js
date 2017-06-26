//Ejercicio1
var assert = require("assert");
var num = 9;
var arr = [4, 4, 5, 12];

function resTotal(arr, num)
{
  var multiplicacion1 = arr.reduce(function(op1, op2)
  {
    return op1 * op2;
  });
  return multiplicacion1 * num;
}

describe("Multiplicacion", function()
{
  it("La multiplicacion de 4*4*5*12 debe dar 960", function()
  {
    assert.equal(8640, resTotal(arr, num));
  })
});
 //Ejercicio2
 function ejercicio2 (arr, numero)
 {
   if(!isNaN(numero))
   {
     return arr.filter(function(a)
     {
       var first = a.toString().substr(0,3);
       var last = a.toString().substr(-3);

       return (first == numero || last == numero);
     });
   }
   else
    {
      return arr;
    }
 }
 //Ejercicio3
 var assert = require("assert");

 function multiploNumero(arr,num)
 {
   var arreglo=[];
   arr.forEach(function(valor)
    {
       resultado= valor % num;
       if(resultado==0)
       {
         arreglo.push(valor);
       }
   });
   return arreglo;
 }

 describe("Multiplos", function()
 {
   it("Los multiplos de 7 son 7, 21, 77, 35", function()
   {
     assert.deepEqual([7, 21, 77, 35], multiploNumero([7, 21, 44, 80, 77, 35], 7));
   })
 });
 //Ejercicio4
 var assert = require("assert");

 function doubleNumber(arr)
 {
    var doubles = arr.map(function(x)
    {
      return (x * 2)+1;
    });
     return doubles;
 }

 describe("Numeros dobles", function()
 {
   it("Numeros dobles", function()
   {
     assert.deepEqual([5, 11, 15, 5, 7 ,17, 21], doubleNumber([2, 5, 7, 2, 3, 8, 10]));
   })
 });
 //Ejercicio5
 var assert = require("assert");

 function convertir(arr)
  {
     var x;
     var resultado = [];
     var far = arr.map(function(elemento)
     {
         resultado.push(elemento * 9 / 5 + 32);
     });
     return resultado;
 }

 describe("Convertir Celcius a Farenheit", function()
 {
    it("Los numeros se convierten de Celcius a Farenheit", function()
    {
        assert.deepEqual([53.6, 57.2, 59, 60.8],convertir([12, 14, 15, 16]));
    });
  });
  //Ejercicio6
  var assert = require("assert");

  function recibir(arr, num)
  {
    var multiply = arr.reduce(function(p1, p2)
    {
      return p1 * p2;
    });
    return multiply
  }

  describe("Multiplicar los numeros", function()
  {
      it("Multiplicar los numeros", function()
      {
          assert.equal(24, recibir([1, 2, 3, 4]));
      });
    });
 //Ejercicio7
 var assert = require("assert");

 function aniosNacimiento(arr)
 {
  var fechaActual = 2017;
  var mayorEdad = 18;
  var fechaNacimiento = 0;
  var resultado = [];

  arr.forEach(function(elemento)
  {
    if(elemento % 2 == 0 && elemento >= mayorEdad)
    {
      fechaNacimiento = fechaActual - elemento;
      resultado.push(fechaNacimiento);
    }
  });
   return resultado;
 }

 describe("Calcular año de nacimiento", function()
 {
    it("Las edades pares son 20, 16, 6", function()
    {
        assert.deepEqual([1997], aniosNacimiento([20, 16, 89, 6]));
    });
  });
