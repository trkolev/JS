document.addEventListener('DOMContentLoaded', solve);
 
function solve() {
    let inputDays= document.getElementById('days-input');
    let inputHours= document.getElementById('hours-input');
    let inputMinutes = document.getElementById('minutes-input');
    let inputSeconds = document.getElementById('seconds-input');
 
    let daysBtn = document.getElementById('daysBtn');
    let hoursbtn = document.getElementById('hoursBtn');
    let minutesBtn = document.getElementById('minutesBtn');
    let secondsBtn = document.getElementById('secondsBtn');
 
    daysBtn.addEventListener('click', convertFromDays);
    hoursbtn.addEventListener('click', convertFromHours);
    minutesBtn.addEventListener('click', convertFromMinutes);
    secondsBtn.addEventListener('click', convertFromSeconds);
 
    function convertFromDays(e) {
        e.preventDefault();
        inputHours.value = (Number(inputDays.value) * 24).toFixed(2);
        inputMinutes.value = (Number(inputDays.value) * 1440).toFixed(2);
        inputSeconds.value = (Number(inputDays.value) * 86400).toFixed(2);
    }
 
    function convertFromHours(e) {
        e.preventDefault();
        inputDays.value = (Number(inputHours.value) / 24).toFixed(2);
        inputMinutes.value = (Number(inputHours.value) * 60).toFixed(2);
        inputSeconds.value = (Number(inputHours.value) * 3600).toFixed(2);
    }
 
    function convertFromMinutes(e) {
        e.preventDefault();
        inputDays.value = (Number(inputMinutes.value) / 1440).toFixed(2);
        inputHours.value = (Number(inputMinutes.value) / 60).toFixed(2);
        inputSeconds.value = (Number(inputDays.value) * 60).toFixed(2);
    }
 
    function convertFromSeconds(e){
        e.preventDefault();
        inputDays.value = (Number(inputMinutes.value) / 86400).toFixed(2);
        inputHours.value = (Number(inputSeconds.value) / 3600).toFixed(2);
        inputMinutes.value = (Number(inputSeconds.value) / 60).toFixed(2);
    }
 
}