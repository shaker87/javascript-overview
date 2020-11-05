function brickCalculator(n) {
    var sum = 0;
    if (n <=  10){
        sum = sum + 10 * 15 * 1000;
        if(n <= 20){
            sum = sum + 10 * 12 * 1000;
        }
    }
    return sum;

}

var result = brickCalculator(10);
console.log(result);