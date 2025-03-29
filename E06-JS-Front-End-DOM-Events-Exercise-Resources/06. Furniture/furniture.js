document.addEventListener('DOMContentLoaded', solve);

function solve() {


  document.querySelector('#input input[type = submit]').addEventListener('click', function (e) {

    e.preventDefault();

    let input = JSON.parse(document.querySelector('#input textarea').value);
    let table = document.querySelector('#shop table tbody');


    for (let furniture of input) {

      let tr = document.createElement('tr');

      let imgTd = document.createElement('td');
      let imgImg = document.createElement('img');
      imgImg.src = furniture.img;
      imgTd.appendChild(imgImg);
      tr.appendChild(imgTd);

      let nameTd = document.createElement('td');
      let name = document.createElement('p');
      name.textContent = furniture.name;
      nameTd.appendChild(name);
      tr.appendChild(nameTd);

      let priceTd = document.createElement('td');
      let price = document.createElement('p');
      price.textContent = furniture.price;
      priceTd.appendChild(price);
      tr.appendChild(priceTd);

      let decFactorTd = document.createElement('td');
      let factor = document.createElement('p');
      factor.textContent = furniture.decFactor;
      decFactorTd.appendChild(factor);
      tr.appendChild(decFactorTd);

      let chTd = document.createElement('td');
      let checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      chTd.appendChild(checkbox);
      tr.appendChild(chTd);

      table.appendChild(tr);

    }

  });

  const shopFormEl = document.querySelector('#shop');

  shopFormEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const outputEl = e.target.querySelector('textarea');

    const data = [...document.querySelectorAll('table tbody tr:has(input:checked)')].map(el => ({
      name: el.children[1].textContent.trim(),
      price: Number(el.children[2].textContent),
      decFactor: Number(el.children[3].textContent)
    }));

    let output = `Bought furniture: ${data.map(el => el.name).join(', ')} \n`;
    output += `Total price: ${data.reduce((total, el) => total + el.price, 0)} \n`;
    output += `Average decoration factor: ${data.reduce((factor, el) => factor + el.decFactor, 0) / data.length} \n`;

    outputEl.value = output;
  });

}