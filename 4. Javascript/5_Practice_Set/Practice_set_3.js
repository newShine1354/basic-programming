const prompt=require("prompt-sync")()

// Question 1
// Write a program to print the marks of a student in an object using for loop: object could be like this:
// let marks = {
// coco: 80,
// harry: 98,
// rohan: 75
// }
// Ans1:
// for (let i = 0; i < Object.keys(marks).length; i++) {
// console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
// }

// Question 2
// Write a program in Q1 using for in loop:
// Ans2:
// for( let keys in students){
//   console.log("Marks of", keys, "are", students[keys])
// }

// Question 3
// Write a program to print "try again" until the user enters the correct number:
// Ans3:
let cn = 7
let i
while (i != cn) {
  i = prompt("Enter required number.")
}

// Question 4
// Write a function to find the mean of 5 numbers:
// Ans4:
// const mean5 = (a, b, c, d, e)=>{
//   f = a+b+c+d+e
//   mean = f/5
//   return(mean)
// }
// console.log(mean5(11,11,11,11,11))