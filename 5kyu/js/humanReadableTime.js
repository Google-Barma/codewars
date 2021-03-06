'use strict';

// function humanReadable(seconds) {
//   let min = Math.floor(seconds / 60);
//   let hour = Math.floor(min / 60);
//   let sec = seconds % 60;
//   min = min - hour * 60;

//   if (hour < 10) {
//     hour = '0' + hour;
//   }
//   if (min < 10) {
//     min = '0' + min;
//   }
//   if (sec < 10) {
//     sec = '0' + sec;
//   }
//   return `${hour}:${min}:${sec}`;
// }

// function humanReadable(seconds) {
//   const pad = function (x) {
//     return x < 10 ? '0' + x : x;
//   };
//   return (
//     parseInt(seconds / 3600 / 24) +
//     ':' +
//     pad(parseInt((seconds / 3600) % 24)) +
//     ':' +
//     pad(parseInt((seconds / 60) % 60)) +
//     ':' +
//     pad(seconds % 60)
//   );
// }

function humanReadable(ms) {
  const pad = function (x) {
    return x < 10 ? '0' + x : x;
  };
  return (
    parseInt(ms / 1000 / 3600 / 24) +
    ':' +
    pad(parseInt((ms / 1000 / 3600) % 24)) +
    ':' +
    pad(parseInt((ms / 1000 / 60) % 60)) +
    ':' +
    pad(parseInt((ms / 1000) % 60))
  );
}

console.log(humanReadable(0)); //'00:00:00'
console.log(humanReadable(5)); //'00:00:05'
console.log(humanReadable(60)); //'00:01:00'
console.log(humanReadable(86401)); //'23:59:59'
console.log(humanReadable(359999)); //'99:59:59'
const date = new Date();
const strDate = Date.now();

console.log(date);
console.log(strDate);

console.log(humanReadable(strDate));
