const prompt = require("prompt-sync")()

// Question 1
// Create an array of numbers and take input from the user to add numbers to this array.
// Ans1:
array = [1, 2, 3, 4]
// while (true){
//     a = Number(prompt("Add any number to the array."))
//     array.push(a)
//     console.log("Value of array is", array);
// }

// Question 2
// Keep adding numbers to the array in Q1 until 0 is entered.
// Ans2:
// while (true) {
//     a = Number(prompt("Add any number to the array."))
//     array.push(a)
//     console.log("Value of array is", array);
//     if (a === 0)
//         break;
// }

// Question 3
// Filter for numbers deivisible by 10 from an array of numbers.
// Ans3:
array2 = [45, 80, 75, 1000, 390, 678, 34, 50];
// let new_array2 = array2.filter(elements => elements % 10 === 0);
// console.log(new_array2);

// Question 4
// Create an array of square of given numbers.
// Ans4:
const new_array2 = array2.map(elements => elements*elements)
console.log(new_array2);

// Question 5
// Use the reduce method to calulate factorial of a given number from an array of first n natural numbers (n being the numbers whose factorial needs to be calculated).
// Ans5:
array3 = []
n = prompt("Enter any natural number of which you want to calculate factorial: ")
for (let i = 1; i <= n; i++) {
    array3.push(i)
}
console.log(array3);
factorial = array3.reduce((element1, element2) => element1 * element2)
console.log(factorial);
