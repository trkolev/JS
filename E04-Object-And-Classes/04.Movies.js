function solve(input) {



    let movies = [];

    for (let entry of input) {
        let name;
        let director;
        let date;

        let movie = {};


        if (entry.includes('addMovie')) {
            let currentEntry = entry.slice(9);
            if (!checkForName(currentEntry)) {
                movie.name = currentEntry;
                movies.push(movie);
            }
        } else if (entry.includes('directedBy')) {

            currentEntry = entry.split(' directedBy ');

            let currentName = currentEntry[0];
            for (let entry of movies) {

                if (entry.name === currentName) {
                    entry.director = currentEntry[1];
                }

            }
        } else if (entry.includes('onDate')) {

            [currentName, currentEntry] = [entry.slice(0, entry.length - 18), entry.slice(-18)];
            currentEntry = currentEntry.split(' ');

            for (let entry of movies) {

                if (entry.name === currentName) {
                    entry.date = currentEntry[2];
                }

            }
        }
    }

    function checkForName(name) {

        for (let entry of movies) {

            if (entry.name === name) {
                return true;
            }

        }

        return false;
    }

    for (let entry of movies) {

        if (entry.name !== undefined && entry.director !== undefined && entry.date !== undefined) {
            console.log(JSON.stringify(entry));
        }

    }

}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);

console.log('----------------');

solve([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]);