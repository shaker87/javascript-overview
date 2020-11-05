var number = -5;
var absoluteNumber = Math.abs(number); // absolute means when value is positive than convert to negative and negative to positive
console.log(absoluteNumber);

var rNumber = 10.67;
var roundNumber = Math.round(rNumber); // round means when its value avobe .50 than make it's 1 and when value is below .50 than make it 0
console.log(roundNumber);

var fNumber = 11.09;
var floorNumber = Math.floor(fNumber); // floor means when value is 11.09 than it convert to 11
console.log(floorNumber);

var cNumber = 11.09;
var ceilNumber = Math.ceil(cNumber); // ceil means when value is 11.09 than it convert to 12
console.log(ceilNumber);

//random

var number = Math.random()*100;
var result = Math.round(number);
console.log(result);