var weakDay = [
    'sat', //0
    'sun', //1
    'mon', //2
    'tues', //3
    'wed', //4
    'thus', //5
    'fri' //6

]

//shallow copy

// deep copy

// var list2 = weakDay;
// list2[1]= "no-day";
var list3 = weakDay.slice();
list3[2] = "no day";

console.log(weakDay, list3);