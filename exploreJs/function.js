function checkingLove(){
    var sabihaLove = true;
    var shakerLove = true;
    if(sabihaLove == true && shakerLove == true){
        console.log('They Both love them');
    }
    else{
        console.log('they dont love each other');
    }
}

checkingLove();

//function parameter, multiple parameter, function return

// function doubleIt(num){
//     var result = num*2;
//     console.log(result);
// }

// doubleIt(100);


//single parameter and total
function doubleIt(num){
    var result = num*2;
    return result;
}
var first = doubleIt(10);
var second = doubleIt(10);
var total = first + second;
// console.log(first, second, total);
console.log(first + '+' + second + '=' + total);

//pass multiple parameter
function add(num1, num2){
    var result1 = num1 + num2;
    return result1;
}

var sum = add(10, 20);
console.log(sum);