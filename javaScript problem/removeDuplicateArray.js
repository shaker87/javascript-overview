function duplicateArray(idNumber){
    var uniqueName = [];
    for(var i = 0; i < idNumber.length; i++){
        var element = idNumber[i];

        var index = uniqueName.indexOf(element);
        if(index == -1){
            uniqueName.push(element);
        }
    }
    return uniqueName;
}

var idNumber = [2,3,2,4,5,6,2,7,9,6,8,8];

var result = duplicateArray(idNumber);
console.log(result);