// Important tabs in inpect of browser
// Elements
// Console
// Networking
// Lighthouse

// Advantages of using src in script tag.
// 1. Sepration of concerns.
// 2. Browser Caching.

// Note: You can do only one thing, you can use src with script tag or write code between <script></script>.

// Concole Objects (Try these in console)
// Codes to watch all methods of console object is : console.anymethod(console)
// error() ==> used for errors.
// console.error("Hai this is a error.") // try this syntax in console.
// assert() ==> used to assert a condition
// console.assert(5>53); // error is shown if condition is false.
// clear() ==> clears the console.
// console.clear();
// log() ==> outputs a message to the console
// console.log("hello");
// table() ==> displays a tabular data (works very well in the case of objects.)
// console.table(obj1);
// warn() ==> used for warnings
// console.warn("Hey donot drink soda")
// info() ==> For adding important information.
// cosole.info("This is very similar to log.")
// console.info - Prints the text to the console as an informational message
// time() ==> it clecks the time of operation
// console.time("a")
// console.timeEnd("a")
// Too check time taken by for loop
// console.time("forLoop") // time start
// for (let i = 0; i < 5; i++) {
//     console.log(345);
// }
// console.timeEnd("forLoop"); // time end
// To check time taken by while loop
// console.time("WhileLoop") // time start
// let i = 0;
// while (i < 5) {
//     console.log(345);
//     i++;
//     }
// console.timeEnd("WhileLoop"); // time end

// alert, prompt, confirm (This are replaced by modules)
// alert("Hey, how are you.") // For miniwindow screen.
// let a = prompt("Enter the value of a", "7"); // Second value is defalt value.
// a = Number(a)
// alert(`The value and type of a is ${a} and ${typeof a} respectively.`)
// document.write(a); // This will write value of a in the html document.
// let write = confirm("Do you want to write it on the page.")
// if(write){
//     document.write(a)
// }
// else{
//     document.write("Please allow me to write on the page.")
// }
// limitation of alert, prompt and confirm
// a. Provides old look to the webpage.
// b. Pause user system interactions.

// window object ==> DOM(document object model), BOM (browser object model) and javascrpit core
// console.log(window); // Everything in javascript is part of window.
// alert("are you ok?") // Same as below line, we donot need to use window keyword because window is a global object.
// window.alert("are you ok?") // alert is method of window object.
// Javascript make html page is object and the name of object is document.
// console.log(document);

// DOM represents the page content as HTML.
// document.body // Page body as js object.
// document.body.style.background = "green" // Changes page background to green

// BOM represents additional objects provided by the browser(host environment) for working with everything except the document.
// alert/confirm/prompt are also a part of the BOM.
// location.href = "https://codewithharry.com".