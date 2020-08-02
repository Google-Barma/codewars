'use strict';
//сортировка чисел, от большого к малому
function descendingOrder(num) {
  const arr = String(num).split('');
  let orderedArray = [];
  while (arr.length > 0) {
    let n = Math.max(...arr);

    orderedArray += arr.splice(arr.indexOf(`${n}`), 1);
  }
  return console.log(+orderedArray);
}

// function descendingOrder(n) {
//   return parseInt(String(n).split('').sort().reverse().join(''));
// }
