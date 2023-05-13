// function productCategories<T, S>(value1: T, value2: S): [T, S]{
// return [value1, value2]
// }

// const result = productCategories<boolean, number>(true, 18)
// console.log(result) // generic type in normal function

// type makeGenericType<T> = {
//   name: T;
//   age: number;
// };

// const menInfo: makeGenericType<string> = {
//   name: "jasim Ahmed",
//   age: 20,
// };

// const productDetails: makeGenericType<number> = {
//     name: 20,
//     age: 30
// } // generic with type alias simple example

// interface IStudents<T> {
//   name: T;
// }

// const students: IStudents<number> = {
//   name: 12,
// }; // generic with interface

// function SetOfName<T>(arr: T[]): T {
//     console.log(arr[1])
//     return arr[1]
// }

// SetOfName<string>(['jasim', 'ahmed'])

// const setOfName = <T>(num: number, value: T): T[] => {
//   const students = [];
//   for(let i = 0; i < num; i++){
//     students.push(value)
//   }

//   return students
// };

// const result1 = setOfName<string>(4, 'jasim')
// console.log(result1) // generic with arrow function
