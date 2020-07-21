'use strict';

function getDrinkByProfession(param) {
  let message;

  param = param.toUpperCase();

  switch (param) {
    case 'Jabroni'.toLocaleUpperCase():
      message = 'Patron Tequila';
      break;
    case 'School Counselor'.toLocaleUpperCase():
      message = 'Anything with Alcohol';
      break;
    case 'Programmer'.toLocaleUpperCase():
      message = 'Hipster Craft Beer';
      break;
    case 'Bike Gang Member'.toLocaleUpperCase():
      message = 'Moonshine';
      break;
    case 'Politician'.toLocaleUpperCase():
      message = 'Your tax dollars';
      break;
    case 'Rapper'.toLocaleUpperCase():
      message = 'Cristal';
      break;
    default:
      message = 'Beer';
  }
  return message;
}

console.log(getDrinkByProfession('jabrOni'));
