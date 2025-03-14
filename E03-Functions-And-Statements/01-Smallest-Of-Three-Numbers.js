function numbersCompare(...args){

    args.sort((a, b) => a-b);
    console.log(args[0]);

}

numbersCompare(2, 5, 3);
numbersCompare(600, 342, 123);
numbersCompare(25, 21, 4);
numbersCompare(2, 2, 2);