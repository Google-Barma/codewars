'use strict';

function generateHashtag(str) {
  return str.length > 140 || str === ''
    ? false
    : '#' +
        str
          .split(' ')
          .filter(item => item !== '')
          .map(word => word[0].toUpperCase() + word.slice(1))
          .join('');
}

console.log(generateHashtag(' Hello there thanks for trying my Kata'));
console.log(generateHashtag('    Hello     World   '));
console.log(generateHashtag(''));
console.log(
  generateHashtag(
    'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  ),
);
console.log(generateHashtag(' '.repeat(200)));
