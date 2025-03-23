function solve() {
    let text = document.querySelector('#inputs textarea').value;
    let clearedText = text.slice(2, -2);
    let input = clearedText.split('","');

    let restaurants = [];

    for (let restaurant of input) {
        let splitedRestaurant = restaurant.split(' - ');
        let restaurantName = splitedRestaurant[0];
        let pplInput = splitedRestaurant[1].split(', ');

        let workers = new Map();
        let currentRestaurant = {};
        let totalSalary = 0;
        let bestSalary = 0;
        let isMet = false;

        for (let entry of restaurants) {
            if (entry.name === restaurantName) {
                workers = entry.workers;
                currentRestaurant = entry;
                totalSalary = entry.average * workers.size; // Restore total salary
                bestSalary = entry.highestCelery;
                isMet = true;
            }
        }

        for (let man of pplInput) {
            let [name, salary] = man.split(' ');
            salary = Number(salary);
            workers.set(name, salary);
            totalSalary += salary;
            if (salary > bestSalary) {
                bestSalary = salary;
            }
        }

        currentRestaurant.name = restaurantName;
        currentRestaurant.workers = workers;
        currentRestaurant.average = totalSalary / workers.size;
        currentRestaurant.highestCelery = bestSalary;

        if (!isMet) {
            restaurants.push(currentRestaurant);
        }
    }

    // Fix: Sort by average salary instead of highest salary
    restaurants.sort((a, b) => b.average - a.average);

    let bestRestaurant = restaurants[0];

    let bestRestaurantOutput = document.querySelector('#bestRestaurant p');
    bestRestaurantOutput.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.average.toFixed(2)} Best Salary: ${bestRestaurant.highestCelery.toFixed(2)}`;

    // Fix: Convert Map to an array before sorting
    let sortedWorkers = [...bestRestaurant.workers.entries()].sort((a, b) => b[1] - a[1]);

    let workersOutput = document.querySelector('#workers p');
    workersOutput.textContent = sortedWorkers
        .map(([name, salary]) => `Name: ${name} With Salary: ${salary}`)
        .join(' ');
}