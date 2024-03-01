// 1.
// repeat() : string method
// console.log("12".repeat(2));

// 2.
// In arrow function this refers to Global/Window object in browser but in node js it will log empty object.

// 3.
// Closures

// 4. if we create object using "Object.create", then keys inside it will be added inside prototype of object.

// 5. Prototype: (i). objects have special property called prototype that is either null or references another object.
// (ii). When we try to read a property from a object and its missing. Javascipt automatically takes it from prototype. This is called "Prototypal inheritance".

// 6. Prototypal Inheritance: 5.(ii)

// 7. To take prompt from user
const promptSync = require("prompt-sync");
const prompt = promptSync();
const username = prompt("What is your name?");
console.log(username);
