'use strict';

function likes(names) {
  if (names.length < 1) {
    return console.log(`no one likes this`);
  } else if (names.length === 1) {
    return console.log(`${names.toString()} likes this`);
  } else if (names.length === 2) {
  }
}

console.log(likes([])); // must be "no one likes this"
console.log(likes(['Peter'])); // must be "Peter likes this"
console.log(likes(['Jacob', 'Alex'])); // must be "Jacob and Alex like this"
console.log(likes(['Max', 'John', 'Mark'])); // must be "Max, John and Mark like this"
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max'])); // must be "Alex, Jacob and 2 others like this"
