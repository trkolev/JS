document.addEventListener('DOMContentLoaded', solve);

function solve() {

    document.getElementById('solutionCheck').addEventListener('submit', function (e) {
        e.preventDefault();

        let rows = document.querySelectorAll('#solutionCheck table tbody tr');
        let data = [];

        for (let row of rows) {

            let currentRow = [];

            row.querySelectorAll('input').forEach(e => {
                currentRow.push(Number(e.value));
            });

            data.push(currentRow);

        }

        let rowsAreFine = true;
        let columnsAreFine = true;

        for (let i = 0; i < 3; i++) {

            if (data[i][0] === data[i][1] || data[i][0] === data[i][2] || data[i][1] === data[i][2]) {
                rowsAreFine = false;
            }

        }

        for (let j = 0; j < 3; j++) {

            if (data[0][j] === data[1][j] || data[0][j] === data[2][j] || data[1][j] === data[2][j]) {
                columnsAreFine = false;
            }

        }

        let result = document.getElementById('check');


        if (rowsAreFine && columnsAreFine) {
            result.textContent = 'Success!';
            document.querySelector('#solutionCheck table').style.border = '2px solid green';
        } else {
            result.textContent = 'Keep trying ...';
            document.querySelector('#solutionCheck table').style.border = '2px solid red';
        }

    });


}