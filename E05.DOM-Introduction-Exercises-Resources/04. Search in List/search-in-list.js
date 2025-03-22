function solve() {
   
   let input = document.getElementById('searchText').value;
   let towns = document.querySelectorAll('#towns li');
   let townsArray = Array.from(towns).map(li => li.textContent);
   let matches = 0;
   let result = document.getElementById('result');

   towns.forEach(element => element.textDecoration = 'none');

   towns.forEach(town => {

      if(town.textContent.includes(input)){
         town.style.textDecoration = 'underline';
         town.style.fontWeight = 'bold';
         matches++;
      }

   });

   result.textContent = (`${matches} matches found`);

}