// function evenify(element){
//     if(element % 2 == 0){
//         console.log(element);
//     }
//     else{
//         var double = (element*2);
//         console.log(double);
//     }
// }
function evenifyall(num){
    var doubleArray =[];
    for (let i = 0; i < num.length; i++) {
        const element = num[i];
        if(element % 2 != 0){
           var result = element * 2;
          doubleArray.push(result);
        }
    }
    return doubleArray;
}
var num = [3,5,7,3, 8];
var resultView = evenifyall(num);
console.log(resultView);

// var age = [4,5,7,3,12, 14];
// evenifyall(age);
