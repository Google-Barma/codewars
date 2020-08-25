function validParentheses(parens) {
  let n = 0;
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] == '(') n++;
    if (parens[i] == ')') n--;
    if (n < 0) return false;
  }

  return n == 0;
}

// function validParentheses(parens) {
//   if (
//     parens[0] === ')' ||
//     parens[parens.length] === '(' ||
//     parens.length % 2 !== 0
//   ) {
//     return false;
//   }
//   const parensObj = parens
//     .toLowerCase()
//     .split('')
//     .reduce((acc, character) => {
//       acc[character] = acc.hasOwnProperty(character)
//         ? (acc[character] += 1)
//         : (acc[character] = 1);
//       return acc;
//     }, {});

//   return parensObj['('] === parensObj[')'];
// }

console.log(validParentheses('()'));
console.log(validParentheses(')(()))'));
console.log(validParentheses('('));
console.log(validParentheses('(())((()())())'));
console.log(validParentheses('())'));
console.log(validParentheses('(()())'));
