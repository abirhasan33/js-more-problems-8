// const names = ['abul', 'babil', 'cabul', 'dabul', 'ebul', 'fabil', 'babi', 'ebul', 'babil', 'gabil', 'abul', 'habul', 'dabul'];

// function removDuvlicate(names){
//     const unique = [];
//     // for(let i = 0; i < names.length; i++){
//     //     const element = names[i];
//     //     console.log(element);
//     // }
//     for(const element of names){
//         console.log(element)
//         if(unique.indexOf(element) == -1){
//             unique.push(element);
//         }
//     }
// }

// const uniqueName = removDuvlicate(names);
// console.log(uniqueName);



var number = [2, 3, 4, 5, 6, 2, 3, 5, 8, 1, 7];
function remobNumber(number){
    const uiuque = [];
    for(const elemant of number){
        console.log(elemant);
        if(uiuque.indexOf(elemant) == -1){
            uiuque.push(elemant);
        }
    }
}
const isNumber = remobNumber(number);
console.log(isNumber);

