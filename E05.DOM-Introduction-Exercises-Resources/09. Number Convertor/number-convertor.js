function solve() {

    let input = parseInt(document.getElementById('input').value);

    let targetSystem = document.getElementById('selectMenuTo').value;

    let result;

    if ('binary' === targetSystem) {
        result = input.toString(2);
    } else if ('hexadecimal' === targetSystem){
        result = input.toString(16).toUpperCase();
    }

    document.getElementById('result').value = result;

}