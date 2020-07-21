'use strict';

let totalScore = 0;
let totalLines = 0;
let playerLevel = 0;

function getScore(arr) {
  sumScore(arr);
  return totalScore;
}

function sumScore(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    // console.log(`количество линий ${totalLines}`);
    // console.log(`общий счет ${totalScore}`);
    // console.log(`уровень игрока ${playerLevel}`);
    // console.log(`множитель  ${playerLevel + 1}`);
    switch (arr[i]) {
      case 1:
        levelFactor(totalLines);
        totalScore += 40 * (playerLevel + 1);
        totalLines += arr[i];
        // console.log(scoreLines.one * (playerLevel + 1));
        break;
      case 2:
        levelFactor(totalLines);
        totalScore += 100 * (playerLevel + 1);
        totalLines += arr[i];
        // console.log(scoreLines.two * (playerLevel + 1));

        break;
      case 3:
        levelFactor(totalLines);
        totalScore += 300 * (playerLevel + 1);
        totalLines += arr[i];
        // console.log(scoreLines.three * (playerLevel + 1));

        break;
      case 4:
        levelFactor(totalLines);
        totalScore += 1200 * (playerLevel + 1);
        totalLines += arr[i];
        // console.log(scoreLines.four * (playerLevel + 1));

        break;
      default:
        break;
    }
  }
}

function levelFactor(sum) {
  playerLevel = Math.floor(sum / 10);
  return playerLevel;
}

console.log(getScore([0, 1, 2, 3, 4]));

// console.log(`конечный счет ${totalScore}`);
// console.log(`кол-во всех линий ${totalLines}`);
// console.log(`уровень ${playerLevel}`);

// function iterationOverAnArray(arr) {}
// iterationOverAnArray([4, 2, 2, 3, 3, 4, 2]);

// if (arr[i] === 1) {
//   totalScore += scoreLines.one;
// } else if (arr[i] === 2) {
//   totalScore += scoreLines.two;
// } else if (arr[i] === 3) {
//   totalScore += scoreLines.three;
// } else if (arr[i] === 4) {
//   totalScore += scoreLines.four;
// }
