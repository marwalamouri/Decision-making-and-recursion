// Decision Making

// function leapYearChecker(year) {
//   if (year === 400) {
//     return `${year} is a leap year`;
//   }
//   if (year % 4 === 0 && year % 100 !== 0) {
//     return `${year} is a leap year`;
//   } else {
//     return `${year} is not a leap year`;
//   }
// }

// console.log(leapYearChecker(500));
// console.log(leapYearChecker(400));
// console.log(leapYearChecker(2024));

// function ticketPricing() {
//   let age = prompt("enter your age");
//   let price;
//   if (age <= 12) {
//     price = 10;
//   } else if (age <= 17) {
//     price = 15;
//   } else {
//     price = 20;
//   }
//   return `Your age is ${age} and the ticket price is ${price}`;
// }
// console.log(ticketPricing());

// Recursion

// function fibonacciSequence(n) {
//   if (n === 1) {
//     return 0;
//   }
//   if (n === 2) {
//     return 1;
//   }
//   return fibonacciSequence(n - 1) + fibonacciSequence(n - 2);
// }
// console.log(fibonacciSequence(7));

// function power(x, n) {
//   if (n === 1) {
//     return x;
//   } else {
//     return x * power(x, n - 1);
//   }
// }
// console.log(power(3, 3));
