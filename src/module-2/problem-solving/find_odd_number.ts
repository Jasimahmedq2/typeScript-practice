// const results: number[] = [66, 68, 54, 42, 53, 48, 67, 8, 9, 15, 20, 33]
// const finalResult: number[] = results.filter(num => num % 2 !== 0)
// console.log({finalResult}) // here all odd number

// const names: string[] = ["j","a", "s", "i", "m"]
// const joinFn = (param: string[]): void => {
// const results = param.filter(num => num.split(",")).join("")
// console.log(results)
// }

// joinFn(names)
// type arrays = [string, number, number, string];
// const twoType: arrays = ["jasim", 5, 8, "6"];

// const findNumber = (param: arrays): object => {
//   const result = param.filter((prm) => typeof prm === "number");
//   return result;
// };
// console.log(findNumber);

// findNumber(twoType);

// const convertStringToNumber = (...param: string[]): void => {
//   const convertNum: number[] = [];
//   for (let i = 0; i <= param.length; i++) {
//     let element = param[i];
//     if(typeof element === "string"){
//         const result = Number(element)
//         convertNum.push(result)
//     }
//   }
//   console.log(convertNum)
// };

// convertStringToNumber('5', '6', '10')

// const clockTime = (param: number): void => {
//   let sum: number = param + param;
//   console.log({ sum });
// };

// const timeinterval = setInterval(() => {
//     clockTime(1)
// }, 1000)

// type InterestsType = number;

// const findInterests = (
//   principal: InterestsType,
//   interest: InterestsType,
//   selectedMonth: InterestsType = 1
// ): InterestsType => {
//   const perMonth = (principal * interest) / 100;
//   const finalResult = perMonth * selectedMonth;
//   return finalResult;
// };

// const result = findInterests(30000, 3, 6);
// console.log(result);

// const books: string[] = [
//   "the lean startup",
//   "computer & accounting system",
//   "science & technology",
//   "Recharge your down battery",
// ];


// for (let i = 0; i <= books.length; i++) {
// let element = books[i]
// if(typeof element !== "undefined"){

//  if(element.length > 26){
//   console.log(element)
//  }

// }
// }

// Problem 1: Write a function that takes two numbers as input and returns their sum.
// const sumNumber = (param1: number, param2: number): number => {
//   return param1 + param2
// }

// const result = sumNumber(2,7)
// console.log(result)

