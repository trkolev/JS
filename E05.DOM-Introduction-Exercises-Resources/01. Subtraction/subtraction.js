function subtract() {
    
    let n1 = Number(document.getElementById('firstNumber').value);
    let n2 = Number(document.getElementById('secondNumber').value);

    let result = document.getElementById('result');
    result.textContent += n1 - n2;

}