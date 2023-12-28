// Reverse an array
// array1 = [1,2,3,4]
// const reverseArray =(array)=>{
//     for (let i = 0; i < array.length ; i++) {
//         let shiftedElement = array.shift();
//         array.splice((array.length-(i)), 0, shiftedElement);
//     }
//     return array
// }
// console.log(reverseArray(array1));

// Rotate an array to left
// array1 = [1,2,3,4,5]
// const rotateToLeft = (array) =>{
//     let shiftedItem = array.shift();
//     array.push(shiftedItem);
//     return array
// }

// Print n prime numbers upto nth natural number.
// const isPrime = (num) =>{
//     if (num < 0){
//         return "Enter natural number";
//     }
//     if (num === 1 || num === 0){
//         return false;
//     }
//     if (num === 2){
//         return true;
//     }
//     let sqrtnum = Math.sqrt(num)
//     for (let i = 2; i <= sqrtnum; i++) {
//         if(num % i === 0){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPrime(7));
// const printPrime = (upto) =>{
//     for (let i = 0; i <= upto; i++) {
//         if (isPrime(i)) {
//             console.log(i);
//         };
//     }
// }
// printPrime(10);

// Create a function that will return in an array the first "nPrimes" prime numbers greater than a particular number "startAt"
// const isPrime = (num) => {
//     if (num < 0) {
//         return "Enter natural number";
//     }
//     if (num === 1 || num === 0) {
//         return false;
//     }
//     if (num === 2) {
//         return true;
//     }
//     let sqrtnum = Math.sqrt(num)
//     for (let i = 2; i <= sqrtnum; i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// const printPrime = (startAt, nPrimes) => {
//     for (let i = 0; i <= nPrimes; i++) {
//         if (isPrime(i) && i>=startAt) {
//                 console.log(i);
//         };
//     }
// }
// printPrime(3,20);

// Reverse a string
// str1 = 'Navnoor Singh'
// const reverseString = (string) => {
//     let str = ''
//     for (let i = (string.length - 1); i >= 0; i--) {
//         let char = string[i]
//         str += char
//     }
//     return str
// }
// console.log(reverseString(str1));

// Create a function that will merge two arrays and return the result as a new array
// const mergeArrays = (arr1, arr2) =>{
//     let new_arr = arr1.concat(arr2)
//     return new_arr
// }
// console.log(mergeArrays([2,4,3,2,1], [2,34,2,53,23,5]));

// Reverse a string
// str1 = 'Navnoor Singh'
// function reverseString(string) {
//     str = ''
//     for (let i = (string.length - 1); i >= 0; i--) {
//         let char = string[i]
//         str = str + char
//     }
//     return str
// }
// console.log(reverseString(str1));

