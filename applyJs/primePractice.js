function prime(n){
    for(var i = 2; i < n; i++){
        if(n % i == 0){
            return 'not a prime number';
        }
        else{
            return 'prime number';
        }
    }
}

var result = prime(10);
console.log(result);