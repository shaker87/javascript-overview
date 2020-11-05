// const year = 3613;
// const remainder = year % 4;
// if(0 == remainder){
//     console.log('this is leep year');
// }
// else{
//     console.log('its not leap year');
// }

function isLeapYear(year){
    const remainder = year % 4;
    if(0 == remainder){
        return true;
    }
    else{
        return false;
    }
}

const leapYear = isLeapYear(2000);
console.log(leapYear);