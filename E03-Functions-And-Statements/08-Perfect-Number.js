function perfectionTest(n){


    let divisiors = 0;
        for (let i = 1; i < n; i++){
            if(n % i === 0){
                divisiors+= i;
            }
        }

        if(divisiors === n){
            console.log("We have a perfect number!");
        }else{
            console.log("It's not so perfect.");
        }

}

perfectionTest(6);
perfectionTest(28);
perfectionTest(1236498);