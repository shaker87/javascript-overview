var fruits = ['banana', 1 , 'jackfruit', 'orange', 'apple'];
fruits.push ('pineapple'); //push new element
var sliceFruits = fruits.slice(2, 4); // cut element from list
console.log(sliceFruits);

var arrayLength = (fruits.length); // check array length and put it new varriable
console.log(arrayLength);

fruits[1] = 'coconut'; // update array element

console.log(fruits);

var bananaFruits = fruits[0]; //put array element in new variable

console.log(bananaFruits);

arrayIndex = fruits.indexOf('jackfruit'); // find array index depend on array element
console.log(arrayIndex);


fruits.push ('newFruits');
console.log(fruits);

fruits.pop (); // deleted element (is by default)
console.log(fruits);

fruits.shift(); // remove begining element from list
console.log(fruits);

fruits.unshift('apple'); // add new element in the begining of list
console.log(fruits);



