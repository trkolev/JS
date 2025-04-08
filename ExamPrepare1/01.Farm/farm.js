function solve(input){


    let farmerArea = {};
    let farmerTasks = {};
    let n = Number(input.shift());

    for(let farmer = 0; farmer < n; farmer++){
        let[name, area, skillsInput] = input.shift().split(' ');
        let skills = skillsInput.split(',');
        farmerArea[name] = area;
        let tasks = new Set(skills);
        farmerTasks[name] = tasks;

    }


    while(input[0] !== 'End'){

        let tokens = input.shift();
        let [command, farmer, area, task] = tokens.split(' / ');

        switch(command){

            case 'Execute': {
                if(farmerArea[farmer] === area && farmerTasks[farmer].has(task)){
                    console.log(`${farmer} has executed the task: ${task}!`)
                }else{
                    console.log(`${farmer} cannot execute the task: ${task}.`)
                }
            }
            break;
            case 'Learn Task': {
                
                if(!farmerTasks[farmer].has(area)){
                farmerTasks[farmer].add(area);
                console.log(`${farmer} has learned a new task: ${area}.`)
                }else{
                    console.log(`${farmer} already knows how to perform ${area}.`)
                }
                
            }
            break;
            case 'Change Area': {
                farmerArea[farmer] = area;
                console.log(`${farmer} has changed their work area to: ${area}`)
            }
            break;
        }
    }

    for (let farmer in farmerArea){

        let sortedTasks = [...farmerTasks[farmer].values()].sort((a, b) => a.localeCompare(b));

        console.log(`Farmer: ${farmer}, Area: ${farmerArea[farmer]}, Tasks: ${sortedTasks.join(', ')}`);
    }
}

solve([
    "2",
    "John garden watering,weeding",
    "Mary barn feeding,cleaning",
    "Execute / John / garden / watering",
    "Execute / Mary / garden / feeding",
    "Learn Task / John / planting",
    "Execute / John / garden / planting",
    "Change Area / Mary / garden",
    "Execute / Mary / garden / cleaning",
    "End"
  ]);

  console.log('------------');

  solve([
    "3",
    "Alex apiary harvesting,honeycomb",
    "Emma barn milking,cleaning",
    "Chris garden planting,weeding",
    "Execute / Alex / apiary / harvesting",
    "Learn Task / Alex / beeswax",
    "Execute / Alex / apiary / beeswax",
    "Change Area / Emma / apiary",
    "Execute / Emma / apiary / milking",
    "Execute / Chris / garden / watering",
    "Learn Task / Chris / pruning",
    "Execute / Chris / garden / pruning",
    "End"
  ]);