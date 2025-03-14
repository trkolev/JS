function printMatrix(n) {

    let result = '';

    for (let i = 0; i < n; i++) {
        result += n + ' ';
    }

    for (let i = 0; i < n; i++) {
        console.log(result);
    }
}

printMatrix(3);
printMatrix(7);
printMatrix(2);