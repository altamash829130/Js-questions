// 1. Even or Odd:
//  Write a program that takes an integer input and prints whether it's even or odd.

// function isEven(int) {
//   let isEven = true;
//   if (int % 2 === 0) {
//     return isEven;
//   } else {
//     isEven = false;
//     return isEven;
//   }
// }

// function isNumEven(num) {
//   return num % 2 === 0 ? `${num} is even` : `${num} is odd`;
// }

function checkNum(integer) {
  switch (integer % 2) {
    case 0:
      return `${integer} is even`;
    case 1:
      return `${integer} is odd`;
  }
}
