// //Задача 1 - Напишите рекурсивную функцию для вычисления суммы цифр заданного числа.

// function sumOfDigits(number) {
//   if (number < 10) {
//     return number;
//   } else {
//     return (number % 10) + sumOfDigits(Math.floor(number / 10));
//   }
// }

// const number = 12345;
// const result = sumOfDigits(number);
// console.log(`Сумма цифр числа ${number} равна ${result}`);

// //Задача 2 - Подсчет количества цифр в числе:

// function countDigits(number) {
//   if (number < 10) {
//     return 1;
//   } else {
//     return 1 + countDigits(Math.floor(number / 10));
//   }
// }

// const num = 56789;
// const digitCount = countDigits(num);
// console.log("Количество цифр в числе", num, ":", digitCount);
