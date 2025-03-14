function addAndSubstract(x, y, z){

        function sum(a, b){
            return a + b;
        }

        function subtract (c){
            return sum(x, y) - c;
        }

        console.log(subtract(z));
}

addAndSubstract(23,
    6,
    10);
addAndSubstract(1,
    17,
    30);
addAndSubstract(42,
    58,
    100);