function Solve(input) {

    let splitedInput = [];
    let startIndex = 0;
    let newWord = false;


    for (let index = 0; index < input.length; index++) {

        if (input[index] === input[index].toUpperCase()) {
            if (newWord) {
                startIndex = index;
                newWord = true;
            } else if (index !== 0) {
                splitedInput.push(input.substring(startIndex, index));
                startIndex = index;
                newWord = false;
            }
        }
    }

    splitedInput.push(input.substring(startIndex, input.length));

    console.log(splitedInput.join(', '));

}


Solve('HoldTheDoor');
Solve('ThisIsSoAnnoyingToDo');
Solve('SplitMeIfYouCanHaHaYouCantOrYouCan');