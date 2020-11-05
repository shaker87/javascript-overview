function doSomething(){
    console.log(3333);
}
console.log(1222);
// setTimeout(function(){
//     console.log("lazy and waiting");
// },4000);
setInterval(() => {
    console.log("doing it")
}, 1000);
console.log(4444);