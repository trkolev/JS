function sum(number){

let oddSum = 0;
let evenSum = 0;
let num = number.toString();

for (let i = 0; i < num.length; i++){
        if(parseInt(num.charAt(i))%2){
            oddSum += parseInt(num.charAt(i));
        }else{
            evenSum += parseInt(num.charAt(i));
        }
}

console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}


sum(1000435);
sum(3495892137259234);