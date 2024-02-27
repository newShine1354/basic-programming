// Object literals are reference type which stores key value pairs and do not has index as arrays.
const person = {
  name: "Navnoor Singh",
  // Noor's friend: "Ramneek Singh", // This will show an error.
  "Noor's friend": "Ramneek Singh",
  age: 18,
  hobbies: ["Football", "learning programming", "watching comedy movies"],
};
// console.log(typeof person, person);
// console.log(person.name);
// console.log(person["name"]);
// console.log(person.hobbies);
// console.log(person["hobbies"][0]);
// person.gender = "male"; // Adding new value to an array
// person["Class"] = 12;
// console.log(person);
// Difference between dot and bracket notation.
// console.log(person.Noor's friend); // This will show error.
// console.log(person["Noor's friend"]);
// So prefer bracket notation.
// const key = "email";
// add email as a key in person object
// person[key] = "navnoorsinghthind1354@gmail.com"
// Creating an array of Keys
// let arrayofKeys = Object.keys(person);
// console.log(arrayofKeys);

// Iterating object literals
// Note: Objects are not iterables, firstly we have to make array of keys of object literal using Object.keys() method
// For loop using Object.keys()
// for (let i = 0; i < Object.keys(person).length; i++) {
//     console.log(`The value of ${Object.keys(person)[i]} is ${[person[Object.keys(person)[i]]]}`);
// }

// For in loop
// for (items in person){
//     console.log(`The value of ${items} is ${person[items]}`);
// }

// For of loop
// for (items of Object.keys(person)){
//     console.log(`${items}: ${person[items]}`)
// }

// Computed properties
// const key1 = "Objkey1";
// const key2 = "Objkey2";
// const value1 = "myvalue1";
// const value2 = "myvalue2";
// Making above constants as a key value pair in an object literal
// const obj = {};
// obj[key1] = value1;
// obj[key2] = value2;
// console.log(obj);
// Using Computed properties
// const obj = {
//     [key1]: value1, // Computed Properties
//     [key2]: value2
// }

// Cloning Object literals.
// Spread Operator in Object literals:
// const array1 = [..."ahhdsfh"];
// console.log(array1);
// const array2 = [...1234567];
// console.log(array2);
// const name = "Navnoor Singh";
// const alphabat_name = [...name]
// console.log(alphabat_name);
// const obj1 = {..."123"}
// const obj2 = {..."Navnoor singh"}
// console.log(obj1)
// console.log(obj2)
// console.log({...person});
// Using Object.assign() method
// const new_person = Object.assign({},person)
// console.log(new_person);

// A Object literal can not have 2 exactly same keys.
// const obj1 = {
//     key1: value1,
//     key2: value2,
//     key1: value3 // Later key will be printed
// }
// const obj2 = {
//     key3: value3,
//     key4: value3,
//     key1: value5 // Later key will be printed
// }
// console.log({...obj1,...obj2});
// console.log({...obj2,...obj1});

// Object Destructuring
// const person = {
//     name: "Navnoor Singh",
//     // Noor's friend: "Ramneek Singh", // This will show an error.
//     "Noor's friend": "Ramneek Singh",
//     age: 18,
//     hobbies: ["Football", "learning programming", "watching comedy movies"]
// }
const { name: firstname, ...rest } = person;
// console.log(firstname,  rest);

// Objects inside array
const users = [
  { userId: 1, firstname: "Nav", gender: "male" },
  { userId: 2, firstname: "Noor", gender: "male" },
  { userId: 3, firstname: "neek", gender: "male" },
];
// console.log(users)
// console.log(users[0]);
// console.log(users[0]["userId"]);
// console.log(users[0].userId);
// for (user of users){
//     console.log(user);
// }
// for (user of users){
//     console.log(user.firstname)
// }
// for (user of users){
//     for(userinfo in user){
//         console.log(`The value of ${userinfo} is ${user[userinfo]}`)
//     }
// }

// Nested destructuring
// const [user1, user2, user3] = users;
// console.log(user1);
// const [{firstname: user1first_name}, , {firstname: user3first_name, gender}] = users;
// console.log(user1first_name, user3first_name, gender);

// Acessing key of another object (create method)
// const obj1 = {
//     key1: "value1",
//     key2: "value2"
// }
// const obj2 = {
//     key3: "value3"
// }
// const obj2 = {}
// obj2.key3 = "value3";
// console.log(obj2.key1); // Undefined
// const obj2 = Object.create(obj1); // {} Empty object.
// The above syntax will make obj1 proto of obj2
// console.log(obj2.key2);
// console.log(obj2);
// console.log(obj2.__proto__); // Check in console for more information.
// console.log(obj1.__proto__);
// obj2 donot contains key2, so intepreature will find in the object inside create method

const object = [
  {
    name: "Navnoor Singh",
    hobbies: {
      h1: "football",
      h2: "programming",
    },
  },
  {
    name: "Ramneek Singh",
    hobbies: {
      h1: "cricket",
      h2: "being standard",
    },
  },
];

const [, { name, hobbies }] = object;
console.log(name, hobbies);
