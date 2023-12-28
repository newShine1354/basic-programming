// Higher order functions.
// For each is also a (higher order) functions
// Higher order functions are thoughs functions which take three argruments(value, index, array)

// For each fuction
let num = [34, 56, 87, 43, 85, 29]
// function Myfunc(number, index) {
//     console.log(`Number at index ${index} is ${number}`);
// }
// num.forEach(Myfunc);
// OR
// num.forEach((elements, index) => {
//     console.log(`Number at index ${index} is ${elements}`);
// });
// In the case of objects inside an array.
const users = [
    { userId: 1, firstname: "Nav", gender: "male" },
    { userId: 2, firstname: "Noor", gender: "male" },
    { userId: 3, firstname: "neek", gender: "male" }
]
// users.forEach(user =>{
//     console.log(user.firstname)
// })

// Map function
// let new_num = num.map((elements, index)=>{
//     console.log(elements)
//     return elements + index // Always use return in the case of map function.
// })

// let new_num = num.map((elements, index, array)=>{
// console.log(elements, index, array)
//     return elements + 1
// })

// console.log(num)
// console.log(new_num);

// Filter method
// let new_num = num.filter((values) => {
//     return values < 50
// console.log(values < 50);
// })
// console.log(new_num);

// Reduce function
// let new_num = num.reduce((accumulator, currentValue) => {
//     return accumulator - currentValue
// }, 100) // 100 is initial value.
// console.log(new_num)
const reduce_func = (h1, h2) => {
    return h1 + h2
}
let new_num = num.reduce(reduce_func)
console.log(new_num)
// const userCart = [
//     { productId: 1, productName: "mobile", prize: 12000 },
//     { productId: 2, productName: "laptop", prize: 52000 },
//     { productId: 3, productName: "tv", prize: 15000 }
// ]

// const total_amount = userCart.reduce((totalPrize, CurrentProduct) => {
//     return totalPrize + CurrentProduct.prize
// }, 0)
// console.log(total_amount);

// Find Method
// const myArray = ["Hello", "cat", "dog", "loin"]
// const isLength3=(string)=>{
//     return string.length ===3;
// }
// const ans = myArray.find(isLength3)
// console.log(ans); // Output: first occurance

// Every Method (returns a boolean expression(returns true if condition for every element is true otherwise it returns false.))
// const numbers = [3, 5, 5, 6, 8, 2]
// const ans = numbers.every((number) => number % 2 === 0);
// console.log(ans)
// const userCart = [
//     { productId: 1, productName: "mobile", prize: 12000 },
//     { productId: 2, productName: "laptop", prize: 52000 },
//     { productId: 3, productName: "tv", prize: 15000 }
// ]

// const lessThan = userCart.every(product => product.prize <= 51000)
// console.log(lessThan);

// Some method (returns true even if condition is true for a single element.)
// const numbers = [1,34,54,56,654]
// const res = numbers.some(element=> element % 2 !== 0)
// console.log(res);
// const userCartres = userCart.some(cartItem=> cartItemprize >= 50000)
// console.log(userCartres);

// Fill Method (Used to fill items in an array.)
// const myArray = new Array(10).fill(0);
// console.log(myArray);
// const myArray = [1, 2, 3, 4, 5, 5, 6, 6, 7]
// myArray.fill(0, 2, 5)
// console.log(myArray);

// Splice Method (put impact on original array)
// const myArray = ["item1","item2","item3"]
// myArray.splice(1,1); // To delete items
// deletedValues = myArray.splice(1, 2, "inserted item") // To insert item
// console.log(deletedValues);

// Match method (Used to search a string for a match against any regular expression.)
// let user = prompt("Enter 0, 1, 2")
// let radnum = Math.floor(Math.random()*3);
// let alphabets = ['a', 'b', 'c']
// let matchNumArray = [alphabets][radnum]
// console.log(matchNumArray);
// const match = (matchNumArray, user) => {
//     if(matchNumArray = "a" && user == "b")
//     {
//         alert("condition is satisfied")
//     }
// }
// match(matchNumArray, user)

