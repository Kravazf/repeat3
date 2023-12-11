// let firstvalue = parseFloat(prompt('Enter your first value'));
// let secondvalue = parseFloat(prompt('Enter your second value'));
// let thirdvalue = parseFloat(prompt('Enter your third value'));

// let arithmeticMeanVaule = (firstvalue + secondvalue + thirdvalue) / 3;

// console.log(arithmeticMeanVaule);

let numOrStr = prompt('input number or string');
console.log(numOrStr)

if(numOrStr === null) {
console.log('ви скасували')
} else if( numOrStr.trim() === '' ) {
console.log('Empty String');
} else if ( isNaN( +numOrStr ) ) {
console.log(' number is Ba_NaN')
} else {
console.log('OK!')
}

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