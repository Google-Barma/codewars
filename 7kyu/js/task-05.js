'use strict';

//возвращает самое большое и самое маленькое число

// function highAndLow(numbers) {
//   const arrNum = numbers.split(' ');
//   let highNum = arrNum[0];
//   let minNum;

//   for (let i = 0; i < arrNum.length; i++) {
//     if (highNum <= +arrNum[i]) {
//       highNum = +arrNum[i];

//       minNum = highNum;
//     }
//   }

//   for (let j = 0; j < arrNum.length; j++) {
//     if (minNum >= +arrNum[j]) minNum = +arrNum[j];
//   }

//   return console.log(`${highNum} ${minNum}`);
// }

function highAndLow(numbers) {
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

highAndLow('1 2 3 4 5'); // return "5 1"
highAndLow('1 2 -3 4 5'); // return "5 -3"
highAndLow('1 9 3 4 -5'); // return "9 -5"
highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6');
highAndLow('-1 -1');
