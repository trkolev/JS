function Solve(arr){

   
    arr.sort((a, b) => a - b);

    let low = arr.slice(0, arr.length/2);
    let high = arr.slice(arr.length/2, arr.length);
    high.reverse();

    let newArray = [];
    for (let i = 0; i < low.length; i++) {
        newArray.push(low[i]);
        newArray.push(high[i]);
    }

    if(low.length !== high.length){
        newArray.push(high[high.length -1]);
    }

    return newArray;
}


Console.log(Solve ([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
Solve ([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 100]);
