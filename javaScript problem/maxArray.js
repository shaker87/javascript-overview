var marks = [23, 44, 34, 35, 29, 39, 40];
var max = marks[0];

for(var i = 0; i < marks.length; i++){
    var element = marks[i];
    if(element > max){
        max = element;
    }
}
console.log("maximum marks is: ", max);

function arrayMax(marks){
    var max = marks[0];

    for(var i = 0; i < marks.length; i++){
        var element = marks[i];
        if(element > max){
            max = element;
        }
    }
    return max;
}
var marks=[23, 46, 34, 35, 29, 39, 40];
var result = arrayMax(marks);
// console.log(result);

