// Function Declaraction
// function add(a, b) {
//     console.log(a + b);
//     return(a-b);
// }

// console.log(add(3, 7));
// add(6, 7);

// function return_index(number, array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === number) {
//             return(i);
//         }
//     }
//     return(-1);
// }
//console.log(return_index(23, [43, 65, 48, 23, 94]));

// Function Expression(Anonyms function)
// const return_index = function (number, array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === number) {
//             return(i);
//         }
//     }
//     return(-1);
// }
// console.log(return_index(23, [43, 65, 48, 23, 94]));

// Arrow Function
// const add =(a, b)=>{
//     console.log(a + b)
//     return(a + b)
// }
// console.log(add(3, 7));
// add(6, 7);

// const isEven = number => number%2 == 0; // Arrow key function.
// console.log(isEven(65));

// Hoisting
// In fuction
// hello(); // Function is called before declaration. Note: It only happens in the case of function declaration and do not work in case of function expression and arrow key function.
// function hello(){
//     console.log("hello, who are you")
// }
// In variable
// console.log(Hello);
// var Hello = "hello world" // Output: Undefined of line above
// let Hello = "hello world" // Error of line above
// const Hello = "hello world" // Error of line above
// console.log(Hello);

// Function inside Function
// const app = () =>{
//     const myfuct = () => {
//         console.log("Hello from my fuction");
//     }
//     const addtwo = (num1, num2) => num1 + num2;
//     const multwo = (num1, num2) => num1 * num2;
//     console.log("my application");
//     myfuct();
//     console.log(addtwo(2, 6));
//     console.log(multwo(2, 6));
// }
// app();

// Local, Global and lexical scope.
// const var1 = "varglobal"
// const app = () =>{
//     const var1 = "var1lexical"
//         const myfuct = () => {
//             const var1 = "varlocal"
//             const myfuct2 = () =>{
//             console.log("inside myfunction", var1); // Prefrence: local > lexical > global
//         } 
//         myfuct2();
//         }
//         console.log(var1);
//         myfuct();
//     }
// app();

// Parameters
// 1. Default Parameters
// function sum(a, b = 4) { // b is default parameter.
//     return a + b
// }

// 2. Rest parameters
// function Show(a, b, ...c) {
//     console.log(`Value of a is ${a}`);
//     console.log(`Value of b is ${b}`);
//     console.log(`Value of c is ${c}`);
// }
// Show(3,45,2,35,2,5,3,23)
// function sumAll(...numbs) {
// console.log(numbs, typeof numbs, Array.isArray(numbs));
//     let sum = 0;
//     for (const number of numbs) {
//         sum = sum + number
//     }
//     console.log(sum)
// }
// sumAll(1,2,3,4,5)

// Parameter Destructuring
const person = {
    firstname: "Navnoor Singh",
    gender: "Male"
}
// const showObj = (obj) => {
//     console.log(obj.firstname);
//     console.log(obj.gender);
//     console.log(obj.age);
// }
// showObj(person);
// Now performing same operation using function destructuring.
// const showObj = ({firstname, gender, age}) => {
//     console.log(firstname);
//     console.log(gender);
//     console.log(age);
// }
// showObj(person);

// Higher order functions
// 1. Callback Function
// const myfunc1 = (name) => {
//     console.log("inside myfunc2");
//     console.log(`Your name is ${name}`);
// }
// const myfunc2 = (callback) => {
//     console.log("hello World");
//     callback("Navnoor Singh");
// }
// myfunc2(myfunc1);

// 2. Function returning function(Closure).
// function MyFunction() {
//     function hello() {
//         // console.log("hello world");
//         return "hello world"
//     }
//     return hello
// }
// console.log(MyFunction());
// const ans = MyFunction();
// console.log(ans)
// console.log(ans());
// ans(); // In the case of console.log

// In javascript function ===> function + object
function hello() {console.log("Hello World");
}
// name property
console.log(hello.name);
