'use strict';

function rgb(r, g, b) {
  function colorToHex(color) {
    const hexString = color.toString(16).toUpperCase();

    return color > 255
      ? 'FF'
      : color < 0
      ? '00'
      : hexString.length === 1
      ? '0' + hexString
      : hexString;
  }

  return `${colorToHex(r)}${colorToHex(g)}${colorToHex(b)}`;
}

console.log(rgb(255, 255, 255)); // returns FFFFFF
console.log(rgb(255, 255, 300)); // returns FFFFFF
console.log(rgb(0, 0, 0)); // returns 000000
console.log(rgb(148, 0, 211)); // returns 9400D3
console.log(rgb(-148, 0, -211)); // returns 9400D3
