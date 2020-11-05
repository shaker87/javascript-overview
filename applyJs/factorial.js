// var factorial = 1;
// for(var i = 1; i <= 5; i++ ){
//     var factorial = i*factorial;
//     console.log(i, factorial);
// }


function factorial(n){
    var factFirstN = 1;
    for(var i = 1; i <= n; i++ ){
        factFirstN = factFirstN*i;
    }
    return factFirstN;
}

var result = factorial(5);
console.log(result);