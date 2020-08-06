'use strict';

function duplicateEncode(word) {
  let newStr = '';
  const wordsObj = word
    .toLowerCase()
    .split('')
    .reduce((acc, character) => {
      acc[character] = acc.hasOwnProperty(character)
        ? (acc[character] += 1)
        : (acc[character] = 1);
      return acc;
    }, {});

  for (let i = 0; i < word.length; i += 1) {
    wordsObj[word[i].toLowerCase()] > 1 ? (newStr += ')') : (newStr += '(');
  }

  return newStr;
}

console.log(duplicateEncode('din')); // '((('
console.log(duplicateEncode('recede')); // '()()()'
console.log(duplicateEncode('Success')); // ')())())', 'should ignore case'
console.log(duplicateEncode('(( @')); // '))(('
