var number = [11, 12, 13, 24, 45, 87, 33];

var sum = 0;

for(var i = 0; i < number.length; i++){
    var element = number[i];
    sum = sum + element;
}

// console.log(sum);

function arraySum(number){
    var sum = 0;

    for(var i = 0; i < number.length; i++){
        var element = number[i];
        sum = sum + element;
    }
    return sum;
}

var result = arraySum(number = [13, 12, 13, 24, 45, 90, 33]);
console.log(result);