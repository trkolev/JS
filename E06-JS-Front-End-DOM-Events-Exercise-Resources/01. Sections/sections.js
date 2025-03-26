document.addEventListener('DOMContentLoaded', solve);

function solve() {

   let input = document.querySelector('#task-input input[type = text]').value;
   let inputArr = input.split(', ');
   
   if (!input.trim()) {
      return;
   }
   

   let form = document.querySelector('#task-input');
   form.addEventListener("submit", function (event){

      event.preventDefault();

      let content = document.getElementById('content');


      for (let element of inputArr) {

         let div = document.createElement("div");
         let p = document.createElement("p");

         p.textContent = element;

         div.append(p);
         content.append(div);

      }
   });
}