var leapYear = 2020;

// if(leapYear % 400 == 0){
//     console.log("it's leap year");
// }

// else if( leapYear % 100 == 0){
//     console.log("its not a leapyear");
// }
// else if(leapYear % 4 == 0){
//     console.log("its leapYear");
// }

// else{
//     console.log("not a leap year");
// }

var remainder = leapYear % 4;
if(0 == remainder){
    console.log("leapyear");
}
else{
    console.log("not leapyear");
}