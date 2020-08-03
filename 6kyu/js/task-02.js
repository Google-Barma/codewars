'use strict';

function alphabetPosition(text) {
  const arrayAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  let numArray = [];
  let textArray = text.toLowerCase().split('');
  for (let char of textArray) {
    if (arrayAlphabet.includes(char)) {
      numArray.push(arrayAlphabet.indexOf(char) + 1);
    }
  }

  return (text = numArray.join(' '));
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
alphabetPosition('The narwhal bacons at midnight.');
