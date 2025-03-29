document.addEventListener('DOMContentLoaded', solve);

function solve() {
    
    document.querySelector('.buttons input[type = submit]').addEventListener('click', function (e){

            let firstRow = document.querySelectorAll('table tr td:nth-child(1)');
            let secondRow = document.querySelectorAll('table tr td:nth-child(2)');
            let thirdRow = document.querySelectorAll('table tr td:nth-child(3)');

            console.log(firstRow, secondRow, thirdRow);

    });

    document.querySelector('.buttons input[type = reset]').addEventListener('click', function (e){

        

    });


}