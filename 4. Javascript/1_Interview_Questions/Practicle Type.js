// 1. Print
// *
// **
// ***
// for (let i = 1; i < 5; i++) {
//     console.log("*".repeat(i));
// }

// 2. What is Output of the following?
// (i) const piyush = {
//   name: "Ramneek Singh",
//   sayName: function () {
//     console.log(this.name);
//   },
// };
// piyush.sayName();
// piyush.sayName.call(piyush);
// setTimeout(piyush.sayName.bind(piyush), 2000);
// let jk = piyush.sayName.bind(piyush)
// jk()
// setTimeout(piyush.sayName.call(piyush), 2000);
// (ii)
// const obj = {
//   height: 30,
// };
// console.log(obj.height);
// delete obj.height;
// console.log(obj.height);
// console.log(Object.getPrototypeOf(obj));
// And
// const obj = Object.create({
//   height: 30,
// }); // This adds height key in prototype of obj.
// console.log(obj.height);
// delete obj.height;
// console.log(obj.height);
// console.log(Object.getPrototypeOf(obj));

// 3.
// From:
// const user = ["Navnoor Singh: 1234", "Ramneek Singh: 1235"];
// Output: [
//     { username: 'Navnoor Singh', password: ' 1234' },
//     { username: 'Ramneek Singh', password: ' 1235' }
//   ]
// const arr = user.map((item) => item.split(": "));
// const arr1 = [{username: arr[0][0],password: arr[0][1]}, {username: arr[1][0], password: arr[1][1]}]

// const arr2 = arr.map((item) => {
//     return { username: item[0], password: item[1] };
// });
// console.log(arr1);
// console.log(arr2);

// {username: item[0], password: item[1]}

// 4.
// Calculate the sum of odd numbers greater than 10 and less than 30
// let sum = 0;

// for (let i = 11; i <= 30; i++) {
//   if (i % 2 !== 0) {
//     sum += i;
//   }
// }
// console.log(sum);

// 5. Calculate the sum of numbers in an array of numbers
// const arr = [1, 2, 3];
// const sumOfArray = (array) => {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum;
// };

// console.log(sumOfArray(arr));

// 6. Create a function that receives an array of numbers and returns an array containing only the positive numbers
// const arr = [1, -4, 5, 9, -3];
// const arrOfPositive = (arr) => {
//   return arr.filter((item) => item > 0);
// };
// console.log(arrOfPositive(arr));
