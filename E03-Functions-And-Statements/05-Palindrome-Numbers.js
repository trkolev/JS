function palindromeTest(arr) {

    function test(num) {
        let numToString = num.toString();
        let invertedString = '';
        for (let index = numToString.length -1; index >= 0; index--) {
            invertedString += numToString.charAt(index);
        }

        return (num === parseInt(invertedString));

    }

    arr.forEach(element => {
       console.log(test(element));
    });

}


palindromeTest([123,323,421,121]);
palindromeTest([32,2,232,1010]);