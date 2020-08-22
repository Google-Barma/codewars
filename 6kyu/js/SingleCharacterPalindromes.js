'use strict';

function solve(string) {
  let fText = [...string];
  if (string === string.split('').reverse().join('')) {
    return 'OK';
  }

  for (let i = 0; i < string.length; i++) {
    fText.splice(i, 1);
    if (fText.join('') === fText.reverse().join('')) {
      return `remove one`;
    }
    fText = string.split('');
  }
  return 'not possible';
}

console.log(solve('abba')); //= "OK". -- This is a palindrome
console.log(solve('abbaa')); //= "remove one". -- remove the 'a' at the extreme right.
console.log(solve('abbaab')); //= "not possible".
console.log(solve('abbaw'));
console.log(solve('abcdifg'));

//УДАЛЯЕТ ПОСЛЕДНЮЮ БУКВУ
// function solve(string) {
//   return string === string.split('').reverse().join('')
//     ? 'OK'
//     : string
//         .split('')
//         .splice(0, string.length - 1)
//         .join('') ===
//       string
//         .split('')
//         .splice(0, string.length - 1)
//         .reverse()
//         .join('')
//     ? `remove one`
//     : 'not possible';
// }

//С ПОКАЗОМ УДАЛЕННОЙ БУКВЫ
// function solve(string) {
//   return string === string.split('').reverse().join('')
//     ? 'This is a palindrome'
//     : string
//         .split('')
//         .splice(0, string.length - 1)
//         .join('') ===
//       string
//         .split('')
//         .splice(0, string.length - 1)
//         .reverse()
//         .join('')
//     ? `remove the '${string
//         .split('')
//         .splice(string.length - 1, 1)}' at the extreme right.`
//     : 'not possible';
// }
