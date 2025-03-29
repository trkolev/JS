document.addEventListener('DOMContentLoaded', solve);

function solve() {
     
    document.querySelector('form').addEventListener('submit', function(e){
        e.defaultPrevented;


        let itemText = document.getElementById('newItemText');
        let itemValue = document.getElementById('newItemValue');

        let opt = document.createElement('option');
        opt.textContent = itemText.value;
        opt.value = itemValue.value;

        document.getElementById('menu').appendChild(opt);

        itemText.value = '';
        itemValue.value = '';


    });

}