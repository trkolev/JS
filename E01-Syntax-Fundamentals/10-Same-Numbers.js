function solve(input){

    let sum = 0;
    let isValid = true;
    let previousNumber;

    while(input != 0){

        let currentDigit = input % 10;
        sum += currentDigit;

        if (previousNumber === undefined) {
            previousNumber = currentDigit;
        } else if (previousNumber !== currentDigit) {
            isValid = false;
        }

        input = Math.floor(input / 10);

    }

    console.log(isValid);
    console.log(sum);

}


solve(2222222);
solve(1234);