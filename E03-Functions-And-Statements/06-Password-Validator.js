function solve(input) {

    let isValid = true;

    function lengthCheck(input) {
        if (input.length < 6 || input.length > 10) {
            console.log("Password must be between 6 and 10 characters");
            isValid = false;
        }
    }

    function symbolTypecheck(input) {
        for (let i = 0; i < input.length; i++) {
            if (!/^[a-zA-Z]$/.test(input.charAt(i))) {
                if (!/^[0-9]$/.test(input.charAt(i))) {
                    console.log("Password must consist only of letters and digits");
                    isValid = false;
                    break;
                }
            }
        }
    }

    function digitCheck(input) {
        let digitCounter = 0;
        for (let i = 0; i < input.length; i++) {
            if (/^[0-9]$/.test(input.charAt(i))) {
                digitCounter++;
            }

        }

        if (digitCounter < 2) {
            console.log("Password must have at least 2 digits");
            isValid = false;
        }

    }

    lengthCheck(input);
    symbolTypecheck(input);
    digitCheck(input);


    if (isValid) {
        console.log("Password is valid");
    }

}

solve('logIn');
solve('MyPass123');
solve('Pa$s$s');