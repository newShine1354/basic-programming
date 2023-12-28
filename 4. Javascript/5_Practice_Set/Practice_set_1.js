// Q1: Create a variable of type string and try to add a number to it.
// Ans1:
// let str = "String"
// console.log(str + 6)

// Q2: Using typeof
// Use the typeof keyword to see the data type of the variables in the previous question.
// Ans2:
// let n = str + 6
// console.log(n)
// console.log(typeof (str + 6))
// console.log(typeof (n))

// Q3: Const objects
// Create a constant object in JavaScript and then try to change its value to another data type.
// Ans3:
const a1 = {
    name: "Noor",
    section: 1,
    isPrincipal: false
}
// a1 = 45

// Q4: Modifying const objects
// Try to add a new key to the previous const object.
// Ans4:
a1['friend'] = "Shubam"
a1['name'] = "Lovish"
console.log(a1)

// Q5: Month dictionary
// Create a JavaScript program to make a month dictionary like 1 = January, 2 = February, and so on
// Ans5:
const months = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
    yakka: "Hard Work"
};
console.log(months[1])
// console.log(months.2)
console.log(months.yakka)
