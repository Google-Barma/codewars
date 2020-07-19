'use strict';

function checkExam(array1, array2) {
  let score = 0;
  for (let i = 0; i < array1.length; i += 1) {
    if (array2[i] === '') {
      score += 0;
    } else if (array1[i] === array2[i]) {
      score += 4;
    } else if (array1[i] !== array2[i]) {
      score -= 1;
    }
  }
  return score < 0 ? 0 : score;
}

console.log(checkExam(['a', 'a', 'b', 'b'], ['a', 'c', 'b', 'd']));
