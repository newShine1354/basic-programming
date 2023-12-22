  // 1. Print all odd numbers upto 100
// Method 1
// for (let i = 1; i < 101; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }s
// Method 2
// for(let i = 1; i <= 100; i += 2)
// {
//     console.log(i)
// }

// 2. Create an array having odd numbers upto 100 as its elements
// Method1
let arr = [];
for (let i = 1; i < 101; i++) {
    if (i % 2 !== 0) {
        arr.push(i);
    }
}
console.log(arr);
// Method 2
// arr = [];
// for (let i = 0; i < 101; i++) {
//     arr.push(i);
// }
// let odd_arr = arr.filter((elements) => elements % 2 != 0)
// console.log(odd_arr);

// 3. Print the multiplication table with 7
// for (let i = 0; i < 11; i++) {
//     console.log(`7 * ${i} = ${7*i}`);
// }

// 4. Print multiplication table with 7
// for (let i = 1; i < 11; i++) {
//     console.log(`Table of ${i}`);
//     for (let j = 1; j < 11; j++) {
//     console.log(`${i} * ${j} = ${i*j}`);   
//     }
// }

// 5. Calculate the sum of numbers from 1 to 10
// let sum = 0;
// for (let i = 0; i <= 10; i++) {
//     sum += i;
// }
// console.log(sum);

// 6. Calculate 10!
// Method 1
// function factorial(number) {
//     if (number < 2) {
//         return 1;
//     }
//     return number*factorial(number - 1)
// }
// console.log(factorial(6));
// Method 2
// let factorial = 1;
// for (let i = 1; i <= 6; i++) {
//     factorial *= i;
// }
// console.log(factorial);

// Calculate the sum of odd numbers greater than 10 and less than 30.
// let sum = 0;
// for (let i = 10; i <= 30; i++) {
//     sum = i + sum;
// }
// console.log(sum);

// Create a function that will convert from Celsius to Fahrenheit
// const celsiusToFahrenhit = (temp) =>{
//     return 9*temp/5 +32
// }
// console.log(celsiusToFahrenhit(45));

// Create a function that will convert from Fahrenheit to Celsius
// const fahrenhitToCelsius = (temp) =>{
//     return 5*(temp-32)/9 
// }
// console.log(fahrenhitToCelsius(0));

// Calculate the sum of numbers in an array of numbers
// Method 1
// let arr1 = [1,2,3,4]
// function sumofElements(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum = sum + array[i];
//     }
//     return sum
// }
// console.log(sumofElements(arr1));
// Method 2
// let arr2 = [1,2,3,4]
// let sumofElements = arr2.reduce((a,b) => a+b)
// console.log(sumofElements);

// Calculate the average of the numbers in an array of numbers
// let arr1 = [4,4,8,4]
// function averageOfElements(array) {
//     sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//         average = sum/array.length
//     }
//     return average
// }
// console.log(averageOfElements(arr1));

// Convert elements of an array to upper case.
// let array = ['apple', 'orange', 'grapes']
// let newArray = array.map((item)=>{
//   return item.toUpperCase();
// })
// console.log(newArray);

// let c = 1;
// function sum(a, b) {
//   return a + b
// }
// console.log(sum(5,6));

// for (let i = 0; i < 10000; i++) {
//   console.log(i);
// }