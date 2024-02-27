// *** Q1: Difference between var let and const? ***

// Points:1. global execution context
//             _______I_______
//             I             I
//      memory phase    code phase
//   var age : undefined

// 2. variable hoisting for var let and const but for let and const, the area above declaration is called temporal red zone.
// 3. Temopral dead zone in case of let and const
// 4. In arrow function this refers to Global/Window object in browser but in node js it will log empty object.

// Related Questions: 1.
// console.log('age', age) // undefined
// var age = 20
// console.log('age', age)
// console.log('age', age1) // error
// let age1 = 21
// const age1 = 21
// console.log('age', age1)

// 2.
// myFun();
// var myFun = function () {
//   console.log("hlo"); // This and arrow function will show an error(myFun is not a function) as in memory phase (var myFun) is just declared.
// };
// myFun();
// function myFun() {
//   console.log("hlo");
// }
// myFun();

// 3.
// for (var i = 0; i < 10; i++) {
//   setTimeout(() => console.log(i), 0);
// }
// console.log(i);

// 4.
// var fullname = "Navnoor Singh";

// var obj = {
//   fullname: "Hacked Full Name",
//   prop: {
//     fullname: "Inside Prop",
//     getFullName: function () {
//       return this.fullname;
//     },
//   },
//   getFullName: function () {
//     return this.fullname;
//   },
//   getFullName2: () => this.fullname, // in arrow function this refers to Global/Window object in browser but in node js it will log empty object.
//   getFullName3: (function () {
//     return this.fullname;
//   })(),
// };
// console.log(obj.prop.getFullName());
// console.log(obj.getFullName());
// console.log(obj.getFullName2());
// console.log(obj.getFullName3());

// *** Q2: What is closure set? ***
// Points:1. Closure is a function with its lexical environment.
// 2. Closure is function returned by a fuction, the returned function is binded with its lexical scope.

// Related Questions: 2.
// function myFun() {
//   let variable = "I am variable.";
//   function insideFun() {
//     console.log(variable);
//   }
//   return insideFun;
// }

// let a = myFun();
// console.log(a);
// a();

// *** Q3. Based on call bind and apply ***
// const piyush = {
//   name: "Piyush Garg",
//   sayName: function () {
//     console.log(this.name);
//   },
// };
// const jhon = {
//   name: "Jhon Doe",
//   sayName: function () {
//     console.log(this.name);
//   },
// };
// jhon.sayName.call(piyush);
// jhon.sayName();

// function sayMyName() {
//   console.log(this.name);
// }
// sayMyName();
// sayMyName.call(jhon);

// *** Q4. Proto And Prototypes ***
// Points: (i) All JavaScript objects inherit properties and methods from a prototype.
// (ii) obj.__proto__ exposes prototype of objects and functions.
// const hl0 = {
//     name: "fhj",
//     printName: function () {
//       console.log(name);
//     },
//   };

  const hl1 = {
    name: "fhj",
    theeka: function () {
      console.log("hlo");
    },
  };
  console.log(hl1.theeka.__proto__);
  console.log(hl1.__proto__);
  console.log(Object.getPrototypeOf(hl1));
  let arr = [1,2,2,4]
  console.log(Object.getPrototypeOf(arr));
//   console.log(Object.getPrototypeOf(hl0));
//   console.log(hl0.__proto__);
//   hl0.__proto__ = hl1;
//   console.log(Object.getPrototypeOf(hl0));
//   console.log(hl0.__proto__);

