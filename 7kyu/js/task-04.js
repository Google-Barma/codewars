'use strike';

function printerError(s) {
  const standartColors = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
  ];
  let rightChar = 0;
  for (let i = 0; i < s.length; i += 1) {
    if (standartColors.includes(s[i])) {
      rightChar += 1;
    }
  }

  return `${s.length - rightChar}/${s.length}`;
}

s = 'aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz';

console.log(printerError(s));
console.log(s.length);
