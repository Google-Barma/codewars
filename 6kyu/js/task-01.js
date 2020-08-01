'use strict';

function findNb(num) {
  let result = 0;
  for (let i = 1; num > 0; i += 1) {
    num -= i ** 3;

    result += 1;
  }
  if (num < 0) {
    return -1;
  }
  return result;
}

console.log(findNb(1071225));
console.log(findNb(91716553919377));
console.log(findNb(300));
