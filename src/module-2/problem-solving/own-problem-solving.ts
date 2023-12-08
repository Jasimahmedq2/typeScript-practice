// Problem 2: Write a function that takes a string as input and returns the reverse of that string. // solved

// Problem 3: Write a function that takes an array of numbers as input and returns the largest number in the array.

// Problem 4: Write a function that takes a string as input and returns the number of vowels in that string. // solved

// Problem 5: Write a function that takes an array of strings as input and returns a new array containing only the strings that start with a vowel.

// Problem 6: Write a function that takes an array of numbers as input and returns the sum of all the numbers in the array.

// Problem 7: Write a function that takes a string as input and checks if it is a palindrome (reads the same forwards and backwards).

// Problem 8: Write a function that takes two strings as input and checks if they are anagrams (contain the same characters in a different order).

// Problem 9: Write a function that takes a number as input and returns true if it is a prime number, false otherwise.

// Problem 10: Write a function that takes an array of numbers as input and returns a new array containing only the prime numbers from the original array.

// const reverseName = (prm: string): string => {
// const revers = prm.split("").reverse()
// const result1 = revers.toString()
// return result1
// }

// const result = reverseName("jasim")
// console.log(result)

// const findBiggestNumber = (...prm: number[]): void => {
//   let largest = prm[0];
//   for (let i = 0; i < prm.length; i++) {
//     if (prm[i] > largest) {
//       largest = prm[i];
//     }
//   }
//   console.log(largest)
// };
// const result = findBiggestNumber(1, 2, 4, 10, 18);
// console.log(result)

// const returnvowels = (prm: string): number => {
//   const result1 = [...prm];
//   const result2 = result1.filter(
//     (p) => p === "a" || p === "i" || p === "e" || p === "u" || p === "o"
//   );
//   return result2.length;
// };
// const result = returnvowels("jasim");
// console.log(result);

// const firstCharacterVowels = (...prm: string[]): string[] => {
//   const result1 = prm.filter(
//     (p) =>
//       p.split("")[0] === "a" ||
//       p.split("")[0] === "e" ||
//       p.split("")[0] === "u" ||
//       p.split("")[0] === "i" ||
//       p.split("")[0] === "o"
//   );
//   return result1;
// };

// const result = firstCharacterVowels(
//   "jasim",
//   "human",
//   "user",
//   "easy",
//   "ios",
//   "os",
//   "mir hossain",
//   "active"
// );
// console.log(result); solved

// problem --> 6

// const returnSumNum = (...prm: number[]): number[] => {
//   let sum = 0;
//   for (let i = 0; i < prm.length; i++) {
//     sum = sum + prm[i];
//   }
//   const result1 = [sum]
//   console.log(result1)
  
//   return result1
// };

// const result = returnSumNum(2, 4, 6, 10, 9, 10, 9, 10, 60);

// const findBoolean = (...prm:any[]): void => {
// const result1 = prm.filter(prm => typeof prm === "boolean")
// console.log(result1)
// }
// const result = findBoolean("jasim", false, true, 48)




