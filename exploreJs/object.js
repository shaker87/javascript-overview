var student = {id:01, name:"shaker", phone: 18};
var student1 = {id:02, name:"shaker", phone: 1878};

//student1.phone = 66578;//update value
student1["phone"]= 66578;

/*var phonePropNum = "phone";
var phoneNo2 = student1[phonePropNum];*/


// var phoneNo1 = student1[phone]
var phoneNo1 = student1.phone; // see individual value



console.log(student);
console.log(phoneNo1);
