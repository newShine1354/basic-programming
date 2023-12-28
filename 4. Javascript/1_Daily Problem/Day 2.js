// Create a function that receives an array of numbers and returns an array containing only the positive numbers
// Method 1
// arr1 = [1, -4, 7, -3, -87, 34]
// const onlyPositive =(array)=>{
//     arr = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] >= 0) {
//             arr.push(array[i])
//         };
//     }
//     return arr      
// }
// console.log(onlyPositive(arr1));
// Method 2
// arr1 = [1, -4, 7, -3, -87, 34]
// const onlyPositive =(array)=>{
//     return array.filter(elements=>elements >= 0)       
// }
// console.log(onlyPositive(arr1));

// Find the maximum number in an array of numbers
// arr1 = [1, -4, 7, -3, -87, 34]
// function findMax(ar) {
//     let max = ar[0];
//     for (let i = 0; i < ar.length; i++) {
//         if(ar[i]> max){
//             max = ar[i];
//         }        
//     }
//     return max;
// }
// console.log(findMax(arr1));

// Print the first 10 Fibonacci numbers without recursion
// let k = 0
// let j = 1
// console.log(k);
// console.log(j);
// for (let i = 0; i <= 8; i++) {
//     let l = k + j
//     k = j
//     j = l
//     console.log(l);
// } 

// Create a function that will find the nth Fibonacci number using recursion
// const FibonacciNumber = (n) => {
//     if (n<1){
//         return "Enter positive integer"
//     }
//     if (n == 1){
//         return 0 
//     }
//     if (n == 2) {
//         return 1
//     }
//     return FibonacciNumber(n - 2) + FibonacciNumber(n - 1)
// }
// console.log(FibonacciNumber(9));

// Calculate the sum of digits of a positive integer number
// function sumOfDigits(number) {
//     let sum = 0;
//     let numStr = String(number)
//     for (let i = 0; i < numStr.length; i++) {
//         sum = sum + Number(numStr[i]);
//     }
//     return sum
// }
// console.log(sumOfDigits(456));

