function minArray(num){
    var min = num[0];
    for(var i = 0; i < num.length; i++){
        var element = num[i];
        if(element < min){
            min = element;
        }
        
    }
    return min;
}


var result = minArray([11,12,3,2,7]);
console.log(result);