'use strict';

function generateHashtag(str) {
  const hash = str
    .split(' ')
    .filter(item => item !== '')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join('');
  if (hash.length >= 140 || hash === '') return 'false';

  return '#' + hash;
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
