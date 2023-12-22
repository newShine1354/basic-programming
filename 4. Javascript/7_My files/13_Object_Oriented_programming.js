// Proto, Prototype, Class
// In javascript __proto__ and [[prototype]] are same.
// prototype is different from these two.

// Acessing key of another object (create method)
const obj1 = {
    key1: "value1",
    key2: "value2"
}
const obj2 = { 
    key3: "value3"
}
// const obj2 = {}
obj2.key3 = "value3";
console.log(obj2.key1); // Undefined
const obj2 = Object.create(obj1); // {} Empty object.
// The above syntax will make obj1 proto of obj2
console.log(obj2.key2); 
console.log(obj2);
console.log(obj2.__proto__); // Check in console for more information.
console.log(obj1.__proto__);
// obj2 donot contains key2, so intepreature will find in the object inside create method

// const user = {
//     firstname: "Navnoor Singh",
//     lastname: "Thind",
//     email: "nurisingh123@gmail.com",
//     age: 34,
//     address: "House Number, Colony, Pincode, State",
//     about() {
//         return `${this.firstname} is ${this.age} years`
//     },
//     is18: function () {
//         return this.age >= 18;
//     }
// }
// const aboutUser = user.about();
// console.log(aboutUser);
// Function 
// 1. That function create object.
// 2. Add key value pair.
// 3. Return Object.
// const userMethods = {
//     about: function () {
//         return `${this.firstName} is ${this.age} years`
//     },
//     is18: function () {
//         return this.age >= 18;
//     }
// }
// function createUser(firstName, lastName, Email, age, address) {
//     const user = Object.create(userMethods); // userMethods is now proto of user.
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.Email = Email;
//     user.age = age;
//     user.address = address;
//     return user;
// }
// const user1 = createUser("Navnoor Singh", "Thind", "nurisingh123@gmail.com", 34, "House Number, Colony, Pincode, State")
// const user2 = createUser("Ramneek Singh", "Thind", "nurisingh123@gmail.com", 34, "House Number, Colony, Pincode, State")
// const user3 = createUser("Jaspreet Singh", "Thind", "nurisingh123@gmail.com", 34, "House Number, Colony, Pincode, State")
// console.log(user1.about());
// console.log(user2.about());

// Prototype (Only provided by functions)
// In javascript function ===> function + object
// function hello() {
//     console.log("Hello World");
// }
// Function Properties
// 1. name property
// console.log(hello.name);
// 2. call, apply, bind properties
// 3. Now interesting thing is we can add your properties.
// hello.myOwnProperty = "very unique value"
// console.log(hello.myOwnProperty);

// Function provide empty object(free space)
// This empty object is called prototype
// console.log(hello.prototype); // {}
// You can add property in the prototype
// hello.myOwnproperty2 = "House1";
// hello.prototype.myOwnproperty2 = "House2"
// console.log(hello.myOwnproperty2);
// console.log(hello.prototype.myOwnproperty2);
// hello.prototype.sing = function(){
//     return "lalalala"
// };
// console.log(hello.prototype.sing());

// Using prototype as a object to store functions
// function CreateUser(firstName, lastName, Email, age, address) {
//     const user = Object.create(CreateUser.prototype); // userMethods is now proto of user.
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.Email = Email;
//     user.age = age;
//     user.address = address;
//     return user;
// }
// // CreateUser is a constructor function as it constructs objects.
// CreateUser.prototype.about = function () {
//     return `${this.firstName} is ${this.age} years`
// }
// CreateUser.prototype.is18 = function () {
//     return this.age >= 18;
// }
// const user1 = CreateUser("Navnoor Singh", "Thind", "nurisingh123@gmail.com", 34, "House Number, Colony, Pincode, State")
// console.log(user1.about());

// // Class keyword in 2015(es6)
// // Classes are fake internally the code in file new_keyword.js is executed.
// class Animal {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     eat(){
//         return `${this.name} is eating.`
//     }
//     isSuperCute(){
//         return this.age <= 1;
//     }
//     isCute(){
//         return true;
//     }
// }
// const cat = new Animal("Tom", 1);
// console.log(cat);
// console.log(cat.eat());

// Inheritance
// class Dog extends Animal{ // Dog is child/sub/derived class and parent/super/base class.
//     constructor(name,age, speed) {
//         super(name, age)
//         this.speed = speed;
//     }
//     run(){
//         return `this `
//     }
// }
// const tommy = new Animal("Tommy", 1);
// console.log(tommy);
// console.log(tommy.isCute());

// getters and setters
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
    // Getter is a function which we use as a property.
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    setName(firsName, lastName){
        this.firstName = firsName;
        this.lastName = lastName;
    }
    // Setter
    set fullName(fullname){
        const [firstName, lastName] = fullname.split(" ")   
        this.firstName = firstName
        this.lastName = lastName
    }
    // Static method (Donot applicable on objects, are accessed using classname)
    static classInfo(){
        console.log("This is person class.");
    }
    // Static property (Donot applicable on objects, are accessed using classname)
    static desc = "Static Property."
}

const person1 = new Person("Navnoor Singh", "Thind", 18)
console.log(person1);
console.log(person1.firstName);
// To use function as a property we use getter. Use get before function declaration.
// console.log(person1.fullName()); // This will show error because fullName is a getter, we donot need to use parathesis.
console.log(person1.fullName);
person1.firstName = "Jaspreet Singh";
person1.lastName = "Mao Sahib";
console.log(person1.fullName);
person1.setName("Ramneek Singh", "Moti", 18);
console.log(person1.firstName);
console.log(person1.fullName);
person1.fullName = "Japleen Singh"
console.log(person1.firstName);
console.log(person1.lastName);

