// Q1: Using Logical Operators
// Create a JavaScript program to check if a age is between 10 and 20.
// Ans1:
// let age = prompt("What is your age?")
// console.log("Your age is", age>10 && age<20?"b/w 10 and 20" : "not b/w 10 and 20")
// alert("Your age is", age>10 && age<20?"b/w 10 and 20" : "not b/w 10 and 20")


// Q2: Using Switch Case
// Demonsrate the use of switch case in JavaScript.
// Ans2:
// let a = Number.parseInt(prompt("Enter 1, 2 or 3."))
// switch (a) {
//   case 1:
//     console.log("You enter", 1)
//     break;
//   case 2:
//     console.log("You enter", 2)
//     break;
//   case 3:
//     console.log("You enter", 3)
//     break;
//   default:
//     console.log("You enter something else.")
// }

// Q3: Divisible by 2 and 3
// Create a JavaScript program to check if a number is divisible by 2 and 3.
// Ans3:
// let number = Number.parseInt(prompt("Enter any number."))
// if (number % 2 == 0 && number % 3 == 0) {
//   console.log("Number is printable by both 2 and 3.")
// }
// else {
//   console.log(number, "is not divisible by 2 and 3")
// }

// Q4: Using Ternary Operator
// Print "you can drive" if the age is greater than or equal to 18, otherwise print "you cannot drive". Use the ternary operator.
// Ans5:
// let age = Number.parseInt(prompt("Enter your age"))
// console.log("You can", age >= 18 ? "drive." : "not drive.")