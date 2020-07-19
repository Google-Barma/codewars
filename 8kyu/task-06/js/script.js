'use strict';

function fakeBin(x) {
  const charArray = x.split('');

  //   console.log(charArray);
  for (let i = 0; i < charArray.length; i += 1) {
    if (charArray[i] < 5) {
      charArray[i] = 0;
    } else if (charArray[i] >= 5) {
      charArray[i] = 1;
    }
  }
  return charArray.join('');
}

console.log(fakeBin('45385593107843568'));
