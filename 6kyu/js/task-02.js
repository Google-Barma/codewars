'use strict';

function alphabetPosition(text) {
  const arrayAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  let numArray = [];
  let textArray = text.toLowerCase().split('');
  for (let char of textArray) {
    // if (arrayAlphabet.indexOf(char) === -1) continue;
    if (arrayAlphabet.includes(char)) {
      //   console.log(`Буква: ${char}-${arrayAlphabet.indexOf(char) + 1}`);

      numArray.push(arrayAlphabet.indexOf(char) + 1);
    }
  }

  return (text = numArray.join(' '));
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
alphabetPosition('The narwhal bacons at midnight.');
