function duplicateArrayRemove(number){
    var uniqueName = [];
    for(var i = 0; i < number.length; i++){
        var element = number[i];
        var index = uniqueName.indexOf(element);
        if(index == -1){
            uniqueName.push(element);
        }
    }
    return uniqueName;
}

var number = [1,2,3,4,1,3,4,5,3,2,6,7, 7, 8,9];
var result = duplicateArrayRemove(number);
console.log(result);