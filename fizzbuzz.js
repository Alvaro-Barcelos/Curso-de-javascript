//Divisivel por 3 => Fizz
//Divisivel por 5 => buzz
//Divisivel por 3 e 5 => FizzBuzz
//Não divisivel por 3 ou 5 => entrada
// não é um numero 'não é um numero'
const resultado = fizzBuzz(5);
console.log(resultado);

function fizzBuzz(entrada){
   if (entrada % 3 == 0){
      console.log('Fizz');
   }

   else if (entrada % 5 == 0){
      console.log('Buzz');
   }

   else if (entrada % 3 == 0 && entrada % 5 == 0){
      console.log(entrada);
   }

   else{
      console.log('Não é um numero');
   }
}