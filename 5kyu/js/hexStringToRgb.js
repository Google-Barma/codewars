'use strict';

function hexStringToRGB(hexString) {
  return {
    b: parseInt(hexString.slice(5, 7), 16),
    g: parseInt(hexString.slice(3, 5), 16),
    r: parseInt(hexString.slice(1, 3), 16),
  };
}

console.log(hexStringToRGB('#FF9933')); //, { r: 255, g: 153, b: 51 })
