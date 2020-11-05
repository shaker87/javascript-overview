var number1 = 25;
var number2 = '20.5';

// number1 = ''+number1; //convert number to string
// console.log(typeof number1);

number2 = parseFloat(number2);

console.log(number1 + number2);

number2 = parseInt(number2); //different way ---   // number2 = +number2; string to number
console.log(number1 + number2);


//fixed value after .
var n1 = 0.3;
var n2 = 0.4;

var total = n1 + n2;
total =total.toFixed(2);
console.log(total);