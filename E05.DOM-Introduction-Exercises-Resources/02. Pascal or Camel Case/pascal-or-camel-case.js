function solve() {

  let input = document.getElementById('text').value;
  let command = document.getElementById('naming-convention').value;
  let output = document.getElementById('result');

  let arr = input.split(' ');
  let result = '';

  if (command === 'Camel Case') {

    for (let element = 0; element < arr.length; element++) {

      if (element === 0) {

        result = arr[0].toLowerCase();

      } else {

        for (let letter = 0; letter < arr[element].length; letter++) {

          if (letter === 0) {
            result += arr[element].charAt(0).toUpperCase();
          } else {
            result += arr[element].charAt(letter).toLowerCase();
          }

        }

      }

    }

  } else if (command === 'Pascal Case') {

    arr.forEach(element => {

      for (let letter = 0; letter < element.length; letter++) {

        if (letter === 0) {
          result += element.charAt(0).toUpperCase();
        } else {
          result += element.charAt(letter).toLowerCase();
        }

      }

    });

  } else {

    result = 'Error!'

  }


  output.textContent += result;

}