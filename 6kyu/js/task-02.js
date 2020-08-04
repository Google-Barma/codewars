'use strict';

function alphabetPosition(text) {
  const arrayAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  let numArray = [];
  text = text.toLowerCase().split('');
  for (let char of text) {
    if (arrayAlphabet.includes(char)) {
      numArray.push(arrayAlphabet.indexOf(char) + 1);
    }
  }

  return (text = numArray.join(' '));
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
console.log(alphabetPosition('The narwhal bacons at midnight.'));
