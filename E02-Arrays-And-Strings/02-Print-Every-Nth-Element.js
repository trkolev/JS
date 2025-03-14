function solve(arr, n) {

let newArr = [arr[0]];

for (let i = 1; i < arr.length; i++){
    if(i % n === 0){
        newArr.push(arr[i]);
    }
}

return newArr;

}


solve(['5',
    '20',
    '31',
    '4',
    '20'],
    2);

solve(['dsa',
    'asd',
    'test',
    'tset'],
    2);

solve(['1',
    '2',
    '3',
    '4',
    '5'],
    6);