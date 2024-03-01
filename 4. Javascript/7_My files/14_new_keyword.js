//  new keyword
function CreateUser(firstname, age) {
  // this = {} // is done by new keyword automatically.
  this.firstname = firstname;
  this.age = age;
  // return this // is done by new keyword automatically.
}

CreateUser.prototype.about = function () {
  console.log(this.firstname, this.age);
};

CreateUser.prototype.is18 = function () {
  console.log(this.age < 23);
};

const user1 = new CreateUser("harsit", 8);
// Three works of new keyword
// 1. creates an empty object (this = {})
// 2. return this
// 3. make prototype proto of the function
console.log(user1.__proto__);
console.log(user1);
// user1.is18();
for (const key in user1) {
  // console.log(key); // Output: keys of both user1 and prototype of CreateUser
  if (user1.hasOwnProperty(key)) {
    console.log(key); // Output: keys of only user1
  }
}

// let numbers = [1,2,3]
// We have various methods of arrays
// Javascript take it from prototype
// But only functions have prototype
// This is because internally internally in javascript array is created as follows:
let numbers = new Array(1, 2, 3);
// This means methods of arrays are stored in prototype of Array() function internally.
// Which becomes proto of array which is created because of new keyword.
console.log(Object.getPrototypeOf(numbers)); // name is wrong because to provide proto not prototype.
// console.log(numbers);
console.log(Array.prototype); // prototype is array containing all array methods.
// function hello() {
//   console.log("hello");
// }
// console.log(hello.prototype); // empty object.

// Changing Prototype
// console.log(hello.prototype);
// hello.prototype = [];
// console.log(hello.prototype);
// hello.prototype.push(1);
// console.log(hello.prototype);
