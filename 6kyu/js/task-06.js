'use strict';

function findOutlier(integers) {
  const odd = [];
  const even = [];
  integers.forEach(element =>
    element % 2 === 0 ? even.push(element) : odd.push(element),
  );

  return even.length > odd.length ? even : odd;
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));
