function solve(input) {

    let result = new Set;

    for (let entry of input) {

        let [command, plateNumber] = entry.split(', ');

        if(command === 'IN'){
            result.add(plateNumber);
        }else{
            result.delete(plateNumber);
        }
        

    }

    if (result.size === 0) {
        console.log('Parking Lot is Empty');
    } else {
       console.log([...result].sort().join('\n'));
        
    }

}

solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);

console.log('-----------------------------');

solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']);