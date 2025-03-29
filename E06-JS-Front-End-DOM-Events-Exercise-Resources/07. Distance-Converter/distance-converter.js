document.addEventListener('DOMContentLoaded', solve);

function solve() {

    document.getElementById('convert').addEventListener('click', function (e) {
        e.preventDefault();

        const input = document.getElementById('inputDistance').value;
        const inputUnit = document.getElementById('inputUnits').value;
        const outputUnit = document.getElementById('outputUnits').value;
        let output = document.getElementById('outputDistance');

        const toMeters = {
            km: 1000,
            m: 1,
            cm: 0.01,
            mm: 0.001,
            mi: 1609.34,
            yrd: 0.9144,
            ft: 0.3048,
            in: 0.0254
        }

        output.value = (Number(input) * Number(toMeters[inputUnit])) / Number(toMeters[outputUnit]);

    });


}