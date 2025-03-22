function solve() {

  let input = document.getElementById('input').textContent
    .split('.')
    .map(s => s.trim())
    .filter(s => s.length > 0);

  let outputElement = document.getElementById('output');
  outputElement.innerHTML = '';
  let counter = 0;
  let rawParagraph = [];
  while (input.length !== 0) {


    let currentSentence = input.shift();

    if (currentSentence.trim().length > 0) {
      rawParagraph.push(currentSentence);
      counter++;
    }

    if (counter === 3) {
      outputElement.innerHTML += `<p>${rawParagraph.join('.')}.</p>`;
      counter = 0;
      rawParagraph = [];
    }

  }

  if (rawParagraph.length > 0) {
    outputElement.innerHTML += (`<p>${rawParagraph.join('.')}.</p>`);
  }
}