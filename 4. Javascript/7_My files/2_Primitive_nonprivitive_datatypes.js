// Primitive data types
// NN SS BB U
let nullVar = null;
let numVar = 29;
let boolVar = true;
let bigIntVar = BigInt(567) + BigInt(8);
let strVar = "harry";
let symbolVar = Symbol("I'm a nice symbol");
let undefinedVar = undefined; // let undefinedVar

// Non-primitive data types
// Object
const bioData = {
  "name": "Harry",
  age: 29,
  likesJS: true,
  secret: undefined,
};

console.log(bioData["name"]); // Output: Harry
console.log(bioData.age); // Output: 29
console.log(bioData["pet"]); // Output: undefined