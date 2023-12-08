// const helloFunction = (array: any, callBack: any): void => {

//   for (let i = 0; i < array.length; i++) {
//     callBack(array[i], i);
//   }
// };

// const theArray = [
//   {
//     name: "jasim",
//     type: "full stack developer",
//     role: "developer",
//     completedProject: 20,
//   },
//   {
//     name: "ahmed",
//     type: "full stack developer",
//     role: "developer",
//     completedProject: 10,
//   },
// ];

// helloFunction(theArray, (selectedDATA: any, indexes: any) => {
//   console.log({ selectedDATA, indexes });
// });

// const theArray = [
//   {
//     name: "jasim",
//     type: "full stack developer",
//     role: "developer",
//     completedProject: 50,
//   },
//   {
//     name: "ahmed",
//     type: "full stack developer",
//     role: "developer",
//     completedProject: 33,
//   },
//   {
//     name: "mehedi hassan",
//     type: "full stack developer",
//     role: "developer",
//     completedProject: 19,
//   },
//   {
//     name: "najmul hassan santo",
//     type: "full stack developer",
//     role: "developer",
//     completedProject: 10,
//   },
//   {
//     name: "sakib al hassan",
//     type: "full stack developer",
//     role: "developer",
//     completedProject: 16,
//   },
//   {
//     name: "akram",
//     type: "full stack developer",
//     role: "developer",
//     completedProject: 17,
//   },
//   {
//     name: "onik",
//     type: "full stack developer",
//     role: "developer",
//     completedProject: 18,
//   },
//   {
//     name: "emon",
//     type: "full stack developer",
//     role: "developer",
//     completedProject: 15,
//   },
//   {
//     name: "omor",
//     type: "full stack developer",
//     role: "developer",
//     completedProject: 30,
//   },
//   {
//     name: "u-suf",
//     type: "full stack developer",
//     role: "developer",
//     completedProject: 40,
//   },
//   {
//     name: "ishan",
//     type: "full stack developer",
//     role: "developer",
//     completedProject: 30,
//   },
// ];

// const values = theArray.filter(
//   (value) => value.name.charAt(0) === "a" || "o" || "u" || "e" || "i"
// );

// console.log(values);

// const ReturnCommon = (age1: number[], age2: number[]) => {
//   let commonNumber: number[] = [];
//   for (let i = 0; i < age1.length; i++) {
//     const element = age1[i];
//     console.log("element:", element);
//     if (age2.includes(element)) {
//       commonNumber.push(element);
//     }
//   }
//   let withoutDuplicate: number[] = [];
//   for (let i = 0; i < commonNumber.length; i++) {
//     const element = commonNumber[i];
//     if (!withoutDuplicate.includes(element)) {
//       withoutDuplicate.push(element);
//     }
//   }
//   console.log("commonNumber:", commonNumber);
//   console.log("finalResult:", withoutDuplicate);
//   return withoutDuplicate;
// };

// const ages1 = [20, 18, 17, 17, 17, 33, 21, 25];
// const ages2 = [20, 17, 33, 29, 19];

// const result = ReturnCommon(ages1, ages2);
// console.log({ result });
// solved common number

// const a = [1,9,2, 3, 4];
// const result = a.sort((a, b) => a - b);
// console.log(result);

// const returnSumArray = (...demoArray: number[]) => {
//   const sumArray: number[] = [];
//   for (let i = 0; i < demoArray.length; i++) {
//     const element = demoArray[i];
//     if (element % 2 === 0) {
//       sumArray.push(element);
//     }
//   }

//   const sum = sumArray.reduce((pre, current) => pre + current);
//   console.log({ sum });
// };

// const result = returnSumArray(3, 10, 15, 30, 17, 32, 33, 12);

// finds all even number's sum a array



