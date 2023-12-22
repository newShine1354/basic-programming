// Question 1
// Write a program using the prompt function to take input of age as a value from the user and use alert to tell them if they can drive or not.
// Answer:
// let age = Number(prompt("Enter your age: /n"))

// const canDrive = (age) =>{
//     return age>=18?true:false
// }
// if (canDrive(age)){
//     alert("You can drive.")
// }
// else {
//     alert("You can't drive.")
// }

// Question 2
// In question 1, use confirm to ask the user if they want to see the prompt again and want to get prompted again for the age.
// Answer:
//  const canDrive = (age) => {
//         return age >= 18 ? true : false
//     }
// let loop = true;
// while (loop) {
//     let age = Number(prompt("Enter your age: /n"))
//     if (canDrive(age)) {
//         alert("You can drive.")
//     }
//     else {
//         alert("You can't drive.")
//     }
//     loop = confirm("You want to change your age.")
// }

// Question 3
// In the previous question, use console.error to log the error of age is 0 or negative.
// Answer:
// let loop = true;
// while (loop) {
//     let age = Number(prompt("Enter your age: /n"))
//     if (age < 0) {
//         console.error("Please enter valid age.");
//         break;
//     }
//     else if (age >= 18) {
//         alert("You can drive.")
//     }
//     else {
//         alert("You can't drive.")
//     }
//     loop = confirm("You want to change your age.")
// }

// Question 4
// Write a program to prompt the user to input a number and change the URL to  // https://google.com if the user enters a number greater than 4 (Hint: location.href).
// Answer:
// let number = Number(prompt("Enter any number"))
// if (number > 4){
//     location.href("https://google.com")
// }

// Question 5
// Change the background of the page to yellow, red or any other color based on user input through prompt.
// Answer:
// let color = prompt("Enter background color you want");
// document.body.style.backgroundColor = color;


