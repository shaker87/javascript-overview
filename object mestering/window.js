var name = 'kuddus';

function add(num1, num2){
    const result = num1 + num2;
    console.log('inside result', result);
    function double(num){
        return num * 2;
    }
    var total = double(result);
    return total;
}

const sum = add(10, 30);
console.log(sum);