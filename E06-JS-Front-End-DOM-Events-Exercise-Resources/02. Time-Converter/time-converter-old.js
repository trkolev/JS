document.addEventListener('DOMContentLoaded', solve);

function solve() {
  
    let daysOutput = document.getElementById('days-input');
    let hoursOutput = document.getElementById('hours-input');
    let minutesOutput = document.getElementById('minutes-input');
    let secondsOutput = document.getElementById('seconds-input');


    document.querySelector('#days input[type = submit]').addEventListener('click', function(event){
        event.preventDefault();
        hoursOutput.value = (Number(daysOutput.value) * 24).toFixed(2);
        minutesOutput.value = (Number(daysOutput.value) * 1440).toFixed(2);
        secondsOutput.value = (Number(daysOutput.value) * 86400).toFixed(2);
        daysOutput.value = Number(daysOutput.value).toFixed(2);

    });

    document.querySelector('#hours input[type = submit]').addEventListener('click', function(event){
        event.preventDefault();

        daysOutput.value = (Number(hoursOutput.value) / 24).toFixed(2);
        minutesOutput.value = (Number(hoursOutput.value) * 60).toFixed(2);
        secondsOutput.value = (Number(hoursOutput.value) * 3600).toFixed(2);
        hoursOutput.value = Number(hoursOutput.value).toFixed(2);

    });

    document.querySelector('#minutes input[type = submit]').addEventListener('click', function(event){
        event.preventDefault();

        daysOutput.value = Number(minutesOutput.value / 1440).toFixed(2);
        hoursOutput.value = Number(minutesOutput.value / 60).toFixed(2);
        secondsOutput.value = Number(minutesOutput.value * 60).toFixed(2);
        minutesOutput.value = Number(minutesOutput.value).toFixed(2);

    });


    document.querySelector('#seconds input[type = submit]').addEventListener('click', function(event){
        event.preventDefault();
        
        daysOutput.value = Number(secondsOutput.value / 86400).toFixed(2);
        hoursOutput.value = Number(secondsOutput.value / 3600).toFixed(2);
        minutesOutput.value = Number(secondsOutput.value / 60).toFixed(2);
        secondsOutput.value = Number(secondsOutput.value).toFixed(2);

    });

}