function solve(input){

let employees = {};

for (let employee of input){
  
    employees[employee] = employee.length;

}

for (let employee in employees){
    console.log(`Name: ${employee} -- Personal Number: ${employees[employee]}`);
}


}


solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);
    console.log('-----------------');
solve([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ]);