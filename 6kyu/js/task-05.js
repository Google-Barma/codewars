'use strict';

//https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript
const findUniq = arr =>
  arr.reduce((acc, item) => {
    if (item !== acc) {
      return item;
    }
  });

console.log(findUniq([1, 1, 1, 2, 1, 1])); //=== 2;
console.log(findUniq([0, 0, 0.55, 0, 0])); //=== 0.55;

findUniq([1, 1, 1, 2, 1, 1]);
findUniq([0, 0, 0.55, 0, 0]);
