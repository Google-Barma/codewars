'use strict';

function moveZeros(arr) {
  arr.forEach((element, index) => {
    if (element === 0) {
      arr.splice(index, 1);
      arr.push(0);
    }
  });
  return arr;
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a'])); // returns[false,1,1,2,1,3,"a",0,0]
console.log(moveZeros([0, 0, false, 1, 0, 0, 0, 0, 1, 2, 0, 1, 3, 'a']));
