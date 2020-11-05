function leapYear(year){
    if((year % 4 == 0) && (year % 400 == 0) || (year % 100 != 0)){
        return "leap year";

    }
    else{
        return "not leap year";
    }
}

var result = leapYear(2024);
console.log(result);
var result1 = leapYear(1700);
console.log(result1);
var result2 = leapYear(2020);
console.log(result2);