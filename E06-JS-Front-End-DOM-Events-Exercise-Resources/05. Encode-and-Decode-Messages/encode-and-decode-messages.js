document.addEventListener('DOMContentLoaded', solve);

function solve() {

    let clearPassword = document.querySelector('#encode textarea');
    let decodedPassword = document.querySelector('#decode textarea');

    document.getElementById('encode').addEventListener('click', function (e) {
        e.preventDefault();


        let codedString = '';
        let encodedPassword = clearPassword.value;

        for (let i = 0; i < encodedPassword.length; i++) {

            codedString += String.fromCharCode(encodedPassword.charAt(i).charCodeAt(0) + 1);

        }

        decodedPassword.value = codedString;
        clearPassword.value = '';

    });

    document.getElementById('decode').addEventListener('click', function (e) {
        e.preventDefault();

        let codedPassword = decodedPassword.value;
        let decodedString = '';

        for (let i = 0; i < codedPassword.length; i++) {

            decodedString += String.fromCharCode(codedPassword.charAt(i).charCodeAt(0) - 1);

        }

        decodedPassword.value = decodedString;

    });
}