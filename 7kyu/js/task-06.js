'use strict';

function tickets(arr) {
  let kassa = 0;
  for (let key of arr) {
    if (key === 25) {
      kassa += 25;
    } else if (key === 50) {
      if (kassa >= 25) {
        kassa += 50;
        kassa -= 25;
      } else {
        return console.log('NO');
      }
    } else if (key === 100) {
      if (kassa >= 75) {
        kassa += 100;
        kassa -= 75;
      } else {
        return console.log('NO');
      }
    }
  }
  console.log(kassa, 'kassa');
}

tickets([25, 25, 50]);
tickets([25, 100]);
tickets([25, 25, 50, 50, 100]);
