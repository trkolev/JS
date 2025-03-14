function solve(n1, n2) {

    function factorialCalck(num) {

        let fac = 1;

        for (let i = 1; i <= num; i++) {

            fac *= i;

        }

        return fac;
    }

    let answer = (factorialCalck(n1) / factorialCalck(n2)).toFixed(2);

    console.log(answer);

}

solve(5, 2);
solve(6, 2);