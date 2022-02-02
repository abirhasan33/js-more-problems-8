function animalCount(miles){
    const animalDensityFirst10Mile = 10;
    const animalDensitySecond10Mile = 50;
    const restDensitySecond10Mile = 100;
    if(miles <= 10){
        const count = miles * animalDensityFirst10Mile;
        return count;
    }
    else if(miles <= 20){
        const firstDenseAnimal = 10 * animalDensityFirst10Mile;
        const restMiles = miles - 10;
        const secondDenseAnimal = restMiles * animalDensitySecond10Mile;
        const totelAnimal = firstDenseAnimal + secondDenseAnimal;
        return totelAnimal;
    }
    else{
        const firstDenseAnimal = 10 * animalDensityFirst10Mile;
        const secondDenseAnimal = 10 * animalDensitySecond10Mile;
        const restMiles = miles - 20;
        const restDenseAnimal = restMiles *restDensitySecond10Mile;
        const totelAnimal = firstDenseAnimal + secondDenseAnimal + restDenseAnimal;
        return totelAnimal;

    }
}
const animasl = animalCount(35);
console.log(animasl);