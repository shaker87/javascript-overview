var weakDay = [
    'sat', //0
    'sun', //1
    'mon' //2
]

var weakDay1 = [
    'tues', //3
    'wed'//4
]

var weakDay2 =[
    'thus', //5
    'fri' //6
]
// var weakDay3 = weakDay.concat(weakDay1).concat(weakDay2);
var weakDay3 = [].concat(weakDay, weakDay1, weakDay2);

console.log(weakDay, weakDay1, weakDay2, weakDay3);