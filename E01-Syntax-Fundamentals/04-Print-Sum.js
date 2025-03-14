function solve(num1, num2){
    
    let sum = 0;
    let outputString = '';

    for (let num = num1; num <= num2; num++){

        sum += num;
        outputString += num + ' ';

    }

    console.log(outputString);
    console.log(`Sum: ${sum}`);

}


solve(5, 10);
solve(0, 26);