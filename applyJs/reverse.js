function reverseSring(str){
    var reverse = "";
    for(var i = 0; i < str.length; i++){
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}

var speech = "Hello alien vai brother";
var result = reverseSring(speech);
console.log(result);