function tinyFriend(){
    // var shortestName = Infinity;
    var shortestName = str[0].length;
    for(var i = 0; i < str.lenght; i++){
        var element = str[i].length;
        if(element < shortestName){
            shortestName = element;
        }
        
    }
    return shortestName;
    
}

// var str = ["shaker", "ahm", "tvassssss"];
// var result = tinyFriend(str);
// console.log(result);

function arrayMax(str){
    var min = str[0].length;

    for(var i = 0; i < str.length; i++){
        var element = str[i];
        if(element < min){
            min = element;
        }
    }
    return min;
}



var str = ["shaker", "ahm", "t"];
var result = tinyFriend(str);
console.log(result);