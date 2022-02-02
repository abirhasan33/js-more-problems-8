// function largestElenabt(number){
//     let max = 0;
//     for(let i = 0; i < number.length; i++){
//         let elemant = number[i];
//         if(elemant > max){
//             max = elemant;
//         }
//     }  return max;
// }
// let isElemant = largestElenabt([3, 5, 8, 10, 7, 6, 9]);
// console.log(isElemant);

function largestElenabt(number){
    let min = number[0];
    for(let i = 0; i < number.length; i++){
        let elemant = number[i];
        if(elemant < min){
            min = elemant;
        }
    }  return min;
}

let isRecap = largestElenabt([22, 23, 24, 25, 26, 17]);
console.log(isRecap);
