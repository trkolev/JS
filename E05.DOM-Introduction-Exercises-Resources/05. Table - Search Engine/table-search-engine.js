function solve() {
   
   let search = document.getElementById('searchField').value;
   let record = document.querySelectorAll('tbody tr');
   record.forEach(row => {
      row.style.background = 'white'; 
      row.removeAttribute('class')});

   record.forEach(row => {

      if(row.textContent.toLowerCase().includes(search.toLowerCase())){
         row.style.background = 'yellow';
         row.classList.add('select');
      }

   });

   document.getElementById('searchField').value = '';


}