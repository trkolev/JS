function Solve(word, text) {

    let textSplited = text.split(' ');
    let notFound = true;


    for (let position = 0; position < textSplited.length; position++) {

        if (word.toLowerCase() == textSplited[position].toLowerCase()) {
            console.log(word);
            notFound = false;
            break;
        }
    }

    if (notFound) {
        console.log(`${word} not found!`);
    }

}


Solve('javascript', 'JavaScript is the best programming language');
Solve('python', 'JavaScript is the best programming language');
