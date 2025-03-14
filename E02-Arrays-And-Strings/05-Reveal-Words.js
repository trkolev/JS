function Solve(words, text){

let wordsSplited = words.split(', ');
let textSplited = text.split(' ');

for (let i = 0; i < textSplited.length; i++) {

    for (let j = 0; j < wordsSplited.length; j++){
        if(textSplited[i].length == wordsSplited[j].length && textSplited[i].includes('*')){
            textSplited[i] = wordsSplited[j];
        }
    }

}
    
console.log(textSplited.join(' '));

}

Solve('great','softuni is ***** place for learning new programming languages');
Solve('great, learning','softuni is ***** place for ******** new programming languages');