// let firstvalue = parseFloat(prompt('Enter your first value'));
// let secondvalue = parseFloat(prompt('Enter your second value'));
// let thirdvalue = parseFloat(prompt('Enter your third value'));

// let arithmeticMeanVaule = (firstvalue + secondvalue + thirdvalue) / 3;

// console.log(arithmeticMeanVaule);

// let numOrStr = prompt('input number or string');
// console.log(numOrStr)

// if(numOrStr === null) {
// console.log('ви скасували')
// } else if( numOrStr.trim() === '' ) {
// console.log('Empty String');
// } else if ( isNaN( +numOrStr ) ) {
// console.log(' number is Ba_NaN')
// } else {
// console.log('OK!')
// }

// let numOrStr = prompt('input number or string');
// console.log(numOrStr)

// if (numOrStr === null) {
//     console.log('ви скасували');
// } else {
//     switch (true) {
//         case numOrStr.trim() === '':
//             console.log('Empty String');
//             break;
//         case isNaN(+numOrStr):
//             console.log('number is Ba_NaN');
//             break;
//         default:
//             console.log('OK!');
//     }
// }

let userYearBirth = prompt('Enter your year of birth');
let userCity = prompt('Enter your city where you live');
let userFavoriteSport = prompt('What is your favorite sport');

let messageForUserAge = '';
let messageForCity = '';
let messageForSport = '';

// Вік користувача
if (!userYearBirth) {
  messageForUserAge = "Maybe you prefer not to say your age!";
} else {
  messageForUserAge = `You are ${new Date().getFullYear() - userYearBirth} years old.`;
}

// Місто проживання
if (!userCity) {
  messageForCity = "Maybe you prefer not to say your city!";
} else {
  if (userCity.toLowerCase() === 'kyiv' || userCity.toLowerCase() === 'lviv' || userCity.toLowerCase() === 'london') {
    messageForCity = 'Good, you live in a capital city!';
  } else {
    messageForCity = `Good, you live in ${userCity}`;
  }
}

// Улюблений вид спорту
if (!userFavoriteSport) {
  messageForSport = "Maybe you prefer not to say your favorite sport!";
} else {
  switch (userFavoriteSport.toLowerCase()) {
    case 'box':
      messageForSport = `Maybe your favorite sportsman is Usick`;
      break;
    case 'swimming':
      messageForSport = `Maybe your favorite sportsman is Paul`;
      break;
    case 'tennis':
      messageForSport = `Maybe your favorite sportsman is Grisha`;
      break;
    default:
      messageForSport = `Cool, your favorite sport is ${userFavoriteSport}`;
  }
}

console.log(`
  ${messageForUserAge}
  ${messageForCity}
  ${messageForSport}
`);