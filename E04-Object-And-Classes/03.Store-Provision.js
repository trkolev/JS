function solve(arr1, arr2) {

    let combinedStocks = {};

    for (let i = 0; i < arr1.length; i++) {

        if (i === 0) {
            let product = arr1[i];
            combinedStocks[product] = parseInt(arr1[i + 1]);
        } else if (i % 2 === 0) {
            let product = arr1[i];
            combinedStocks[product] = parseInt(arr1[i + 1]);
        }

    }

    for (let j = 0; j < arr2.length; j++) {

        if (j === 0) {
            if ((arr2[0]) in combinedStocks) {
                combinedStocks[arr2[0]] = parseInt(arr2[1]) + combinedStocks[arr2[0]];
            } else {
                combinedStocks[arr2[0]] = arr2[1];
            }
        } else if (j % 2 === 0) {
            if ((arr2[j]) in combinedStocks) {
                combinedStocks[arr2[j]] = parseInt(arr2[j + 1]) + combinedStocks[arr2[j]];
            } else {
                combinedStocks[arr2[j]] = arr2[j + 1];
            }
        }

    }



    for (let product in combinedStocks) {
        
        console.log(`${product} -> ${combinedStocks[product]}`);

    }

}


solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]);

console.log('--------------------------')

solve([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
],
    [
        'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]);
