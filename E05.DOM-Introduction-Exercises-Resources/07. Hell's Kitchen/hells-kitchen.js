function solve() {

    let text = document.getElementById('inputs').textContent;
    let input = text.split(',');

    let restaurants = {};

    for(let restaurant of input){

        let currentRestaurant = new Map;
        let splitedRestaurant = restaurant.split(' - ');
        let restaurantName = splitedRestaurant[0];
        let pplInput = splitedRestaurant[1].split(', ');

        for(let man of pplInput){

            let[name, celery] = man.split(' ');
            currentRestaurant.set(name, parseInt(celery));

        }

        restaurants[restaurantName] = currentRestaurant;

    }

}