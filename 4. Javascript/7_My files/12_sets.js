// Diffences between array and set.
// 1. Set do not have to same elements.
// 2. Sets do not maintain order which means we cannot access their elements by indexing.
// 3. Length is also undefined
const numbers = new Set([1,2,3,3])
// console.log(numbers);
// const numbers = new Set();
const a = 5;
numbers.add(a);
numbers.add(4);
numbers.add(6);
numbers.add(2);
numbers.add(1);
numbers.add(7);
numbers.add(7); // This will be ignored
// numbers.add(['item1', 'items2'])
// numbers.add(['item1', 'items2']) // This will not be ignored because as per javasript it a new array.
// console.log(numbers);
// console.log(numbers.has(1));
// To check a particular element in an set.
// if (numbers.has(1)) {
//     console.log("1 is present");
// }
// else{
//     console.log("1 is not present");
// }
// for (const number of numbers) {
//     console.log(number)
// }

// Length of a set
// let length = 0;
// for(number of numbers){
//     length++;
// }
// console.log(length);

// Map Data type
const person = new Map();
person.set('firstname', 'harshit') // ['firstname', 'harshit'] will become an element of person.
person.set('age', '7') 
person.set(1 , 'one')
person.set([1,2,3] , 'array')
person.set({1 : "one"} , 'object literals')
// console.log(person);
// console.log(person.get("firstname"));
// console.log(person.keys());
// for (const keys of person.keys()) {
//     console.log(keys, typeof keys);
// }
// for (const key of person) {
//     console.log(key);
// }
// for (const [key, value] of person) {
//     console.log(key, value);
// } 
// const person = new Map([['firstname', 'harshit'], [1 , 'one'], [[1,2,3] , 'array']]);
// console.log(person);
const person1 = {
    id : 1,
    name : "Navnoor"
}
const person2 = {
    id : 2,
    name : "Ramneek"
}
const extraInfo = new Map();
extraInfo.set(person1, {"age" : 2});
extraInfo.set(person2, {"age" : 3});
console.log(extraInfo.get(person1))
console.log(extraInfo.get(person1).age)
