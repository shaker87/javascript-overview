var speech = "I am a good person and happy person";

var count = 0;

for(var i = 1; i < speech.length; i++){
    var char = speech[i];
    if(char == " "){
        count++;
    }
}
count++;

// console.log(count);

function counter(str){
    var count = 0;

    for(var i = 1; i < speech.length; i++){
        var char = speech[i];
        if(char == " "){
            count++;
        }
    }
    count++;
    return count;
}

var result = counter(speech);
console.log(result);