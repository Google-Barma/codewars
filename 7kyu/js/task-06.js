'use strict';

//сумма чисел от а до  b
function getSum(a, b) {
  let sum = 0;
  if (a < b) {
    for (let i = a; i <= b; i += 1) {
      sum += i;
    }
  }
  if (a === b) {
    sum = a;
  }
  if (a > b) {
    for (let i = b; i <= a; i += 1) {
      sum += i;
    }
  }
  return sum;
}

getSum(1, 0);
getSum(1, 2);
getSum(0, 1);
getSum(1, 1);
getSum(-1, 0);
getSum(-1, 2);
