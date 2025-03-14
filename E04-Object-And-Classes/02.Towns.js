function solve(input) {


    for (let row of input) {

        let [city, latitude, longitude] = row.split(' | ');

        latitude = parseFloat(latitude).toFixed(2);
        longitude = parseFloat(longitude).toFixed(2);


        let line = { town: city, latitude, longitude };

        console.log(line);

    }

}

solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);

console.log('--------------------------')
solve(['Plovdiv | 136.45 | 812.575']);