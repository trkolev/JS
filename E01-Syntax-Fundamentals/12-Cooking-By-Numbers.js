function solve(num, op1, op2, op3, op4, op5) {
  
  let arr = [op1, op2, op3, op4, op5];
  num = parseInt(num);
  arr.forEach(element => {
    
    if(element === 'chop'){
        num /= 2;
    }else if (element === 'dice'){
      num = Math.sqrt(num);
    }else if(element === 'spice'){
      num += 1;
    }else if(element === 'bake'){
      num *= 3;
    }else if(element === 'fillet'){
      num *= 0.8;
    }

    console.log(num);
  });


}


solve ('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve ('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
