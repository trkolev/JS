function solve(arr, rotations) {

    for (let rotation = 0; rotation < rotations; rotation++) {
        let num = arr.shift();
        arr.push(num);
    }

    let output = arr.join(' ');

    console.log(output);

}


solve([51, 47, 32, 61, 21], 2);
solve([32, 21, 61, 1], 4);
solve([2, 4, 15, 31], 5);