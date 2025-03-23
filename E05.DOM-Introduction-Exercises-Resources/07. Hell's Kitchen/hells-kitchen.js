function solve() {

    let text = document.querySelector('#inputs textarea').value;
    let clearedText = text.slice(2,-2);

    let input = clearedText.split('","');



    let restaurants = [];

    for (let restaurant of input) {

        let workers = new Map;
        let currentRestaurant = {};
        let splitedRestaurant = restaurant.split(' - ');
        let restaurantName = splitedRestaurant[0];
        let pplInput = splitedRestaurant[1].split(', ');
        let averageCelery = 0;
        let bestCelery = 0;

        for (let man of pplInput) {

            let [name, celery] = man.split(' ');
            workers.set(name, parseInt(celery));
            averageCelery += parseInt(celery);
            if (bestCelery < parseInt(celery)){
                bestCelery = parseInt(celery);
            }
        }

        currentRestaurant.name = restaurantName;
        currentRestaurant.workers = workers;
        currentRestaurant.average = averageCelery / pplInput.length;
        currentRestaurant.highestCelery = bestCelery;

        restaurants.push(currentRestaurant);

    }

    restaurants.sort((a, b) => b.highestCelery - a.highestCelery);

    let bestRestaurant = document.querySelector('#bestRestaurant p');
    bestRestaurant.textContent = `Name: ${restaurants[0].name} Average Salary: ${restaurants[0].average.toFixed(2)} Best Salary: ${restaurants[0].highestCelery.toFixed(2)}`;

    const sortedWorkers = new Map([...restaurants[0].workers.entries()].sort((a, b) => b[1] - a[1]));

    let workers = document.querySelector('#workers p');
    
    let output = [];

    sortedWorkers.forEach((salary, name) => {
            output.push(`Name: ${name} With Salary: ${salary}`);
    });

    workers.textContent = output.join(' ');
}