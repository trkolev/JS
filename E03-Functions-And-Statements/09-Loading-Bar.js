function solve(n) {

    let progress = '';

    for (let i = 0; i < 10; i++) {
        if (i < n/10) {
            progress+= '%';
        }else{
            progress+= '.';
        }
    }

    console.log(`${n}% [${progress}]
Still loading...`)

}


solve(30);
solve(50);
solve(100);