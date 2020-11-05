// var inch = 60;

// var feet = inch / 12;

// console.log(feet);

//function

function inchToFeet(inch){
    var feet = inch / 12;
    return feet;
}
var inchArray = [23, 25, 29];
var mama = inchToFeet(inchArray[2]);
console.log(mama);

var nana = inchToFeet(122);
nana = nana.toFixed(2);
console.log(nana);

var nani = inchToFeet(126);
console.log(nani);