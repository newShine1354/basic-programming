// Primitive data types
// NN SS BB U
let nullVar = null;
console.log(typeof nullVar);
let numVar = 29;
let boolVar = true;
let bigIntVar = BigInt(567) + BigInt(8);
let strVar = "harry";

// Symbol
// let k1 = Symbol("Symbol 1");
// let k2 = Symbol("Symbol 1"); // k2 is not equal to k1(even symbol is a primitive data type.)
// let k3 = Symbol("Symbol 3");
// let age = "age";
// const obj1 = {};
// obj1[k2] = "kida g";
// obj1[k3] = "hor fer sajno";
// obj1[age] = 19;

// console.log(obj1);
// console.log("obj1[k2]", obj1[k2]);
// console.log('obj1["k2"]', obj1["k2"]); // not correct as k2 is not a string
// console.log("obj1.k2", obj1.k2); // this is also false this will try to log k2 having string value.

let undefinedVar = undefined; // let undefinedVar

// Non-primitive data types
// Object
const bioData = {
  name: "Harry",
  age: 29,
  likesJS: true,
  secret: undefined,
};

// console.log(bioData["name"]); // Output: Harry
// console.log(bioData.age); // Output: 29
// console.log(bioData["pet"]); // Output: undefined
