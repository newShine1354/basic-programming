// Question 1
// What will the following code print in JavaScript?
// console.log("har\"".length);
// Ans1:
// Output: 4 // Because \' is a single character.

// Question 2
// Explore the includes, startsWith, and endsWith functions in a string.
// Ans2:
// includes method
let name = "Navnoor Singh"
// console.log(name.includes("ing"));

// startsWith method
console.log(name.startsWith("Nav"));
console.log(name.startsWith("av", 1));

// endsWith method
console.log(name.endsWith("gh"));

// Question 3
// Write a program to convert a given string into lowercase.
// Ans3:
// const convertlowercase = (str) =>{
//     return str.toLowerCase();
// }

// let givenString = "Noor Singh"
// console.log(convertlowercase(givenString));
// console.log(givenString.toLowerCase())

// Question 4
// Extract the numerical amount from this string:
// let str = "Total: Rupees 2907";
// Ans4:
// console.log(substr(start, length));
// console.log(str.substr(14, 4));
// console.log(str.slice(14))
// console.log(str.slice("Total: Rupees ".length))

// Question 5
// Try to change the 4th character of a given string. Would you be able to do it?
// let str2 = "Total: Rupees 2907";
// str2[3] = "j" // Error, because strings are immutable.

