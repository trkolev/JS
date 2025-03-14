function printBetween(ch1, ch2) {

    function asciiNumberToChar(num) {
        return String.fromCharCode(num);
    }

    let result = '';

    if (ch1.charCodeAt(0) < ch2.charCodeAt(0)) {
        for (let index = ch1.charCodeAt(0) + 1; index < ch2.charCodeAt(0); index++) {
            result += asciiNumberToChar(index) + ' ';
        }
    } else {
        for (let index = ch2.charCodeAt(0) + 1; index < ch1.charCodeAt(0); index++) {
            result += asciiNumberToChar(index) + ' ';
        }
    }

    console.log(result);

}

printBetween('a', 'd');
printBetween('#', ':');
printBetween('C', '#');