function solve(input) {

    let keyWords = input.shift().split(' ');

    let result = {};


    for (let word of keyWords) {
        result[word] = 0;

        for (let entry of input) {

            if (word === entry) {
                result[word] += 1;
            }

        }

    }

    let sortedObj = Object.fromEntries(
        Object.entries(result).sort((a, b) => b[1] - a[1])
    );


    for (let key in sortedObj) {
        console.log(key + ' - ' + sortedObj[key]);
    }
}

solve([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);
solve([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);