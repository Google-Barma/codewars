'use strict';

function solve(s) {
  const upperCaseChar = [];
  const lowerCaseChar = [];
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === s[i].toUpperCase()) {
      upperCaseChar.push(s[i]);
    } else {
      lowerCaseChar.push(s[i]);
    }
  }
  if (upperCaseChar.length > lowerCaseChar.length) {
    return s.toUpperCase();
  } else if (upperCaseChar.length < lowerCaseChar.length) {
    return s.toLowerCase();
  } else if (upperCaseChar.length === lowerCaseChar.length) {
    return s.toLowerCase();
  }
}

console.log(solve('code'));
console.log(solve('CODe'));
// solve('code');
// solve('CODe');
// solve('COde');
