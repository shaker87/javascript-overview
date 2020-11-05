function animalCount(mile){

    if(mile <= 10 && mile > 1){
        var firtPartAnimal = mile* 50;
        return firtPartAnimal;
    }
    else if(mile > 10 && mile <= 20){
       var firstPart = 10 * 50;
       var secondPart = mile - 10;
       var secondPartAnimal = secondPart * 100;
       var totalAnimalFirstAndSecond = firstPart + secondPartAnimal;
       return totalAnimalFirstAndSecond;
    }
    else{
        var firstPart = 10 * 50;
        var secondPart = 10 * 100;
        var firstAndSecondPartTotal = firstPart + secondPart;
        var thirdPartAnimal = mile - 20;
        var totalThirdPartAnimal = thirdPartAnimal * 300;
        var totalAnimal = firstAndSecondPartTotal + totalThirdPartAnimal;
        return totalAnimal;
    }
}

var result = animalCount(21);
console.log(result);