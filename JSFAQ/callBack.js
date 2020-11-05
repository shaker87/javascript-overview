function explain_callback(name, age, task){
    console.log("name", name);
    console.log("your age", age);
    task();
}

function wash_hand(){
    console.log("wash your hand");
}
function take_shower(){
    console.log("take shower");
}
explain_callback("shaker", 21, wash_hand);
explain_callback("tarek", 14, take_shower);