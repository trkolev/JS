function inventory(input) {

    let list = [];


    for (let entry of input) {

        let hero = {};

        currentEntry = entry.split(' / ');

        hero.heroName = currentEntry[0];
        hero.heroLevel = parseInt(currentEntry[1]);
        hero.heroItems = currentEntry[2];

        list.push(hero);

    }

    list.sort((a, b) => a.heroLevel - b.heroLevel);

    for (let entry of list) {
        console.log(`Hero: ${entry.heroName}\nlevel => ${entry.heroLevel}\nitems => ${entry.heroItems}`)
    }

}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);

console.log('-----------------------------------')

inventory([
    'Poppy / 28 / Sentinel, Antara',
    'Superman / 18 / Sword',
    'Batman / 2 / Banana, Gun'
]);