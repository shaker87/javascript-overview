function maxBigger(num1, num2, num3){
    if(num1 > num2){
        if(num1 > num3){
            return "num 1 big";
        }
        else{
            return "num 3 is big";
        }
    }

    else{
        if(num2 > num3){
            return "num 2 is bigger";
        }
        else{
            return " num 3 is bigger";
        }
    }
}

var inputValue = maxBigger(30, 52, 60);
// console.log(inputValue);

var bigger = Math.max(9, 3, 7);
console.log(bigger);