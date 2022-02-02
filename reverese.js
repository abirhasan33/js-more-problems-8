const greeting = 'helo, how are you ?';

function reversSting(text){
    let reveres = '';
    for(const letter of text){
        console.log(letter);
        reveres = reveres + letter;
        // reveres = letter + reveres;
    }
}

const reveresed = reversSting(greeting);
console.log(reveresed);