// const findOddAVG = (...params: number[]) => {
//   const oddNumbers = params.filter((value) => value % 2 !== 0);
//   const findSum = oddNumbers.reduce((acc, curr) => acc + curr);
//   const AVG = findSum / oddNumbers.length;
//   return AVG
// };

// const result = findOddAVG(10, 33, 23, 20, 7, 30, 40);
// console.log({result})

// const findBiggerNumber = (...params: number[]) => {
//   let bigger = params[0];
//   for (let i = 0; i < params.length; i++) {
//     const element = params[i];
//     if (element > bigger) {
//       bigger = element;
//     }
//   }
//   return bigger;
// };

// const result = findBiggerNumber(2, 1, 323, 3, 9, 90, 400);
// console.log({ result });

// const removeDuplicate = (...params: any[]) => {
//   const existValues: any[] = [];
//   for (let i = 0; i < params.length; i++) {
//     const element = params[i];
//     if (!existValues.includes(element)) {
//       existValues.push(element);
//     }
//   }
//   return existValues;
// };

// const result = removeDuplicate("jasim", 4, 3, "jasim", "hello", 4);
// console.log({ result });

const removeFalseValue = (...params: any[]) => {
  console.log(params);
  const RemoveFalsyValue = params.filter((value) => !!value);
  return RemoveFalsyValue;
};

const result = removeFalseValue("jasim", "", false, "hello", 1, NaN, null, 4);
console.log({ result });
