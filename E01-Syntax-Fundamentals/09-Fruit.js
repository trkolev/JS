function solve(fruit, weight, price){

        money = ((weight/1000) * price).toFixed(2);

    console.log(`I need $${money} to buy ${(weight/1000).toFixed(2)} kilograms ${fruit}.`)

}


solve('orange', 2500, 1.80);
solve('apple', 1563, 2.35);