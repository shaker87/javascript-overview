var male = ['shaker', 'tarek','karina', 'atik', 'rudmila'];
var female = ['sabiha', 'mipta', 'tarin'];

var personToRemove = male[2];// remove by offset
female.unshift(personToRemove);
delete(male[2]);
male.splice(2,1); // do empty with splice
female.pop();
console.log(male, female);

console.log(male.length, female.length);