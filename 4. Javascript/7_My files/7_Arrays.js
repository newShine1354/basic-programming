// Array is a reference data_type.(They are stored in heap and their index is stored in stack)
// The heap is a region of memory where data is stored and managed during the execution of a program.
// This inclues arrays, array methods and properties, Loops in arrays, Cloning array, Array Destructuring.
// Iterables : are those datatypes on which we can use for of loop.
// Examples of iterables are strings, arrays and sets.
// Array like objects: string is an array like object as it has same properties as that of arrays.

const a1 = [1, "Hello", false, "Hello"];
// console.log(a1.slice(0, 2));
// console.log(a1)

let marks_class_12 = [65, 34, 87, 84];
// console.log(marks_class_12)
// console.log(marks_class_12[0])
// console.log(marks_class_12[1])
// console.log(marks_class_12[2])
// console.log(marks_class_12[3])
// console.log(marks_class_12[4])
// marks_class_12[3] = 8 // Changing the value of an array
// marks_class_12[4] = 8 // Adding a new value to the array
// console.log(marks_class_12[3])
// console.log(marks_class_12[4])
// console.log(typeof marks_class_12) // Object

// Arrays Methods
let num = [1, 2, 3, 34, 4, 5, 6, 8];
// console.log(num.length);

// toString Method
// let b = num.toString();
// let c = String(num)
// console.log(b);
// console.log(c);
// console.log(num);

// join Method
// let c = num.join("")
// let c = num.join()
// console.log(c, typeof c)

// includes Method
// console.log(num.includes(5));

// pop Method
// a1.pop(); // pop an element
// let r = a1.pop(); // pop an element and pop(r) returns the popped element
// console.log(a1, r);

// push Method
// let r = num.push(56); // add new last element and push(r) returns the new array length
// console.log(num);

// shift Method
// let r = num.shift(); // Remove first element and shift(r) returns removed element
// console.log(r, num);

// unshift Method
// let r = num.unshift(5); // Add new first element and shift(r) returns length of string
// console.log(r, num);

// delete Operator
// delete num[0] // Do not effect length of array
// console.log(num);

// concat Method
let num_more = [10, 11, 12, 13, 14, 15, 16];
let num_even_more = [67, 45, 98, 23];
// let newArray = num.concat(num_more, num_even_more)
// let newArray = num + num_more + num_even_more;
// console.log(newArray);
// console.log(typeof newArray);
// console.log(num); // Not affected
// console.log(num_more); // Not affected

// sort Method
num = [101, 32, 193, 34, 483, 59, 546, 38, 30, 3];
// console.log(num, num.length);
// num[0] = 69;
// console.log(num, num.length);
// // Sorting is done alphabatically means index of 2000 will be smaller than 30 or 3
// num.sort(); // It modifies original array
// console.log(num)
// let compare = (a, b) =>{
//     return a - b // For ascending order.
//     // return b - a // For decending order.
// }
// num.sort(compare); // It modifies original array
// console.log(num)

// reverse Method
// num.reverse();
// console.log(num)

// splice Method(used to add new items and delete to an array)
// Syntax: array.splice(position to add, No. of elements to removeEventListener, elements to be added)
// console.log(num);
let new_num = num.splice(2,4,36)
// let new_numslice = num.slice(2, 4)
console.log(num);
console.log(new_num)
// console.log(new_numslice);
// console.log(num)

// slice Method(slice out a piece from an array)
// Note: Donot change original array.
// let new_num = num.slice(3, 5)
// console.log(new_num)

// Loops in Arrays
// For loop
num = [3, 54, 1, 2, 4];
// for (let i = 0; i < marks_class_12.length; i++) {
//     const element = marks_class_12[i];
//     console.log(element)
// }

// For in loop
// for (a in marks_class_12){
//     console.log(marks_class_12[a]);
// }

// For of loop
// for (a of marks_class_12){
//     console.log(a)
// }

// For each loop
// num.forEach((elements) => {
//     console.log(elements*elements)
// })

// From Array
// It is used to convert any object to an array.
// let name = "Noor"
// let letters = Array.from(name)
// console.log(letters)

// It can also be used to convert html collection to an array.
// So that we can use for each loop on in
/* Function we can use in console in demand of html collection:
    let html_collection = document.getElementsByClassName("Class_name") */
// Array.from(html_collection) // Now we can apply for loop on html collection.

// Cloneing array
let array1 = [1, 2, 3, 4, true];
// let array2 = array1 // This will not clone an array because they are refrenced data types. This means if we change array1 then array2 will also be affected.
// let array2 = [1, 2, 3, 4, true]; // Method 1 is not efficient.
// let array2 = array1.slice(0) // Method 2 most used method because of its speed.
// let array2 = [].concat(array1) // Method 3
// let array2 = [...array1] // Method 4 by using spread operator is new efficient method.
// console.log(array2)

// Cloning array and adding more items
// let array2= array1.slice(0).concat("5")
let array2 = [...array1, 3, 4, 5]; // Method 4 by using spread operator is new efficient method.
// console.log(array2)

// Using const for making arrays
// const fruits = ["apple", "mango"];
// console.log(fruits);
// fruits.push("Banana"); // Sucessfully we have change a const array.
// console.log(fruits);

// Array Destructuring.
const myarray = ["value1", "value2", "value3", "value4", "value5"];
// let myvar1 = myarray[0];
// let myvar2 = myarray[1];
// let [myvar1, myvar2] = myarray; // Array Destructuring. myvar1 = myarray[0] and myvar2 = myarray[1]
// let [myvar1, ,myvar2] = myarray; // Array Destructuring. myvar1 = myarray[0] and myvar2 = myarray[2]
// console.log(myvar1);
// console.log(myvar2);
let [myvar1, myvar2, ...mynew_array] = myarray;
// console.log(mynew_array);

// HigherOrder functions on arrays:
// forEach, map, filter, reduce
// Symbol.iterator.
