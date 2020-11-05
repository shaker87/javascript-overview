// var n = 11;

// for (var i = 2; i < n; i++) {
//     console.log(i, n % i);
//     if (n % i == 0) {
//         console.log('not a prime number');
//         break;
//     } else {
//         console.log('prime number');
//     }
// }

function isPrime(n) {

    for (var i = 2; i < n; i++) {
        // console.log(i, n % i);
        if (n % i == 0) {
            return 'not a prime number';
     
    }
    return 'prime number';
}
}

var result = isPrime(7);
console.log(result); 