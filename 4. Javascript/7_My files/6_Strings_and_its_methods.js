// const prompt=require("prompt-sync")()
// let a = Array.from(prompt("Enter any string"))

// console.log(a);
// let name = "Noor"; // 'Noor'
// console.log(name);
// console.log(name.length);
// console.log(name[0])
// console.log(name[1])
// console.log(name[4])

// Converting String to Number (vica-versa)
// let age = "4";
// age = Number(age);
// age = parseInt(age)
// Another method
// age = +age // age = +"4";
// console.log(typeof (age));
// Number to String
// let age2 = 5;
// age2 = 5 + "";
// Another method
// age2 = String(age2)
// console.log(typeof (age2));
// const age3 = age - 2
// console.log(typeof age3);

// Template Literals
// let boy1 = "Ramneek"
// let boy2 = "Jaspreet"
// let sentence = `${boy1} is a friend of ${boy2}`

// Escape Sequence Characters
// let fruit1 = 'Banana"na';
// let fruit2 = "Banana'na";
// let fruit3 = "Banana`na";
// let fruit4 = "Banana\\na";
// let fruit5 = "Banana\nna";
// let fruit6 = "Banana\tna";
// let fruit7 = "B\bananana";
// let fruit8 = "Banana\rna";
// let fruit9 = "Banana\vna";
// console.log("fruit1", fruit1);
// console.log("fruit2", fruit2);
// console.log("fruit3", fruit3);
// console.log("fruit4", fruit4);
// console.log("fruit5", fruit5);
// console.log("fruit6", fruit6);
// console.log("fruit7", fruit7);
// console.log("fruit8", fruit8);
// console.log("fruit9", fruit9);

// Printing characters of Strings
// let str = "Navnoor"
// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }
// for (character of str) {
//     console.log(character);
// }

// String Methods
let name = "   Navnoor ThNavind";
// console.log(name[2]);
// console.log(name[2]); // wrong
let namte = ["   Navnoor ", "ThNavind"];
let friend = "Ramneek";
// let friend2 = "Jaspreet";
// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name.replace("Nav", "Gur"));
console.log(name.padStart(4,"x")); // adds x before name until the length of name reaches four
// console.log(name.slice(1,5));
// console.log(name.slice(7));
// console.log(name.slice(-5));
// console.log(name.concat(friend)); // We can also use "+" sign.
// console.log(name.trim());
// console.log(name.split(" "));
// let newArr = namte.map((item) => console.log(item));
// console.log(newArr);
