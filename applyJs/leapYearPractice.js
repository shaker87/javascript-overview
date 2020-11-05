// function leapYear(num){
//     if(4 % num == 0 && 400 % num == 0 || 100 % num != 0){
//         return true;
//     }
//     else{ 
//         return false;
//     }
// }

var year = 2021;

if(((year%4==0) && (year%100!=0)) || year%400==0){
    console.log("This is leap year");
    }
    else {
    console.log("This is leap not year");
    }

// var result = leapYear(2029);

// console.log(result);