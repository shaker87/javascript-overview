//s1 = 2 4 6 8 10 12

// var series = "";
// var n;

// for(var i = 1; i <= 10; i++){
//     n = i*2;
//     series = series + n + " ";
// }
// console.log(series);

function series(n){
    var series = "";
    for(var i = 1; i <= n; i++){
        n = i *2;
        series = series + n + "";
    }
    return series;
}

var result = series(5);
console.log(series);