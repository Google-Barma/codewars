'use strict';

function spinWords(str) {
  let reversWords = [];
  str.split(' ').forEach(element => {
    element.length > 4
      ? reversWords.push(element.split('').reverse().join(''))
      : reversWords.push(element);
  });
  return reversWords.join(' ');
}

// function spinWords(words) {
//   return words
//     .split(' ')
//     .map(function (word) {
//       return word.length > 4 ? word.split('').reverse().join('') : word;
//     })
//     .join(' ');
// }

console.log(spinWords('Hey fellow warriors'));
console.log(spinWords('This is a test'));
console.log(spinWords('This is another test'));
