// Optional Chaining "?" (Part of error handling for Nested Objects)
// const person = {
//     name : "Navmoor Singh",
//     marks : {Physics: 70, Chemistry:60}
// }
// console.log(person?.name);
// console.log(person?.rollNo);
// console.log(person.rollNo.ClassRollNo) // Error
// console.log(person?.rollNo?.ClassRollNo) // Undefined

// Methods : Function inside object
// This keyword.
// console.log(this); // This will show an empty set but if you try to use this syntax inside console of your browser then you can see that "this" is a Window Object.
// console.log(Window); // Window is equal to this in console but we can't replace this by window.
// const Person = {
//         name : "Navmoor Singh",
//         age : 7,
//         marks : {Physics: 70, Chemistry:60},
//         about: function(){
//             // console.log(`Name of the person is ${this.name}`); // this is person(name of object literal.)
//             console.log(this); // Same as below statement.
//             console.log(Person);
//         }
//     }
// // console.log(Person.about);
// Person.about();
// Another Example
function personInfo(){
        console.log(`Name of the person is `); // this is person(name of object literal.)
}
// const Person1 = {
//             name : "Navmoor Singh",
//             age : 18,
//             marks : {Physics: 70, Chemistry:60},
//             // about: personInfo(), // This will call function inside the object literal.
//             about: personInfo
//             }
// const Person2 = {
//             name : "Ramneek Singh",
//             age : 18,
//             marks : {Physics: 70, Chemistry:60},
//             about: personInfo
//             }
// const Person3 = {
//             name : "Japleen Singh",
//             age : 19,
//             marks : {Physics: 70, Chemistry:60},
//             about: personInfo
//             }
            
// console.log(Person1.about);
// Person1.about();
// Person2.about();
// Person3.about();

// When we create a function it is stored in window object
// Window.personInfo(); // This will work in console.

// "use strict" is used for strict mode.(Error Handling)

// Call, Apply and Bind
// Even if function is defined under an object literal, then also we have to pass object as agrument in the case of apply and bind.
// const sum = () => "hello world";
// console.log(sum()); 
// console.log(sum.call()); // Same as above statement when no argrument is passed.
const user1 = {
                name : "Ramneek Singh",
                age : 7,
                about: function(hobby, game){
                    console.log(this.name, this.age, hobby, game); 
                }
        }
const user2 = {
                name : "Navnoor Singh",
                age : 10,
        }
// To use function written in user1 for user2. 
// user1.about("flute", "cricket")
// user1.about.call() // We have to pass value to call method other wise it will show as undefined.
// user1.about.call(user2, "Guitar", "football")
// Note: Also we can define about function outside an object and use call() method.
// Apply
// Same as call() the only one difference is we can pass all the arguments as an array.
// user1.about.apply(user1, ["flute", "cricket"])
// Bind (This method return the function)
// const user1_func = user1.about.bind(user1, "tabla", "cricket")
// user1_func();
// don't do this mistake
// const fun = user1.about;
// fun(); // Reason in the video : 09:06 hours
// If there is a arrow function in the object litersals
// user1 = {
//         name : "Ramneek Singh",
//         age : 7,
//         about:() =>{
//             console.log(this.name, this.age); // this.name and this.age are undefined, because arrow functions donot have "this" as user1.It takes it from surroundings.
//         }
// }
// user1.about();
// user1.about.call(user1);

// Function Expression 
// console.log(sum(3,6));
// const sum = (a, b) =>{
//         return a + b;
// }