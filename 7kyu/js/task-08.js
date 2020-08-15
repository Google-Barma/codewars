'use strict';

//ПОЛИМОРФ
const polindrome = function (polin) {
  const reversePolin = polin.split('').reverse();
  const arrPolin = polin.split('');

  for (let i = 0; i < polin.length; i++) {
    if (reversePolin[i] === arrPolin[i]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

console.log(polindrome('alla'));
console.log(polindrome('abaraba'));
console.log(polindrome('ara'));
