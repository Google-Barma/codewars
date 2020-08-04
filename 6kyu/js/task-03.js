'use strict';

// Вася в кассе дает здачу, все по очереди, цена 25
function tickets(peopleInLine) {
  let twentyFives = 0;
  let fifty = 0;

  for (let cash of peopleInLine) {
    if (cash === 25) {
      twentyFives += 1;
    }
    if (cash === 50) {
      if (twentyFives < 1) {
        return 'NO';
      } else {
        twentyFives -= 1;
        fifty += 1;
      }
    }
    if (cash === 100) {
      if (fifty > 0 && twentyFives > 0) {
        twentyFives -= 1;
        fifty -= 1;
      } else if (twentyFives > 2) {
        twentyFives -= 3;
      } else {
        return 'NO';
      }
    }
  }
  return 'YES';
}

// function tickets(peopleInLine) {
//   let [c25, c50, c100] = [0, 0, 0];
//   for (let v of peopleInLine) {
//     if (v === 25) c25++;
//     if (v === 50) {
//       c50++;
//       c25--;
//     }
//     if (v === 100) {
//       c25--;
//       c50 > 0 ? c50-- : (c25 -= 2);
//     }
//     if (c25 < 0 || c50 < 0) return 'NO';
//   }
//   return 'YES';
// }

console.log(
  tickets([
    25,
    50,
    25,
    100,
    25,
    50,
    25,
    100,
    25,
    50,
    25,
    100,
    25,
    50,
    25,
    100,
    25,
    50,
    25,
    100,
  ]),
);
