function factorialNumber(number){
    var fact = 1;
    for(var i = 1; i <= number; i++){
        fact = fact * i;
       
    }
    return fact;
}

var result = factorialNumber(5);
console.log(result);

var number = 5;
var fact = 1;
for(var i = 1; i <= number; i++){
    fact = fact * i;
    
}
console.log(fact);

function factorialNum(number){
    var i = 1;
    var fact = 1;
    while(i <= number){
        fact = fact * i;
        i++;
    }
    return fact;
}

var result1 = factorialNum(5);
console.log(result1);
