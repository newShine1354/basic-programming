// Call, Apply and Bind
// const sum = () => "hello world";
// console.log(sum());
// console.log(sum.call()); // Same as above statement when no argrument is passed.
// const user1 = {
//   name: "Ramneek Singh",
//   age: 7,
//   about: function (hobby, game) {
//     console.log(this.name, this.age, hobby, game);
//   },
// };
// const user2 = {
//   name: "Navnoor Singh",
//   age: 10,
// };
// To use function written in user1 for user2.
// user1.about("flute", "cricket")
// user1.about.call() // We have to pass value to call method other wise it will show as undefined.
// user1.about.call("Guitar", "football") // This is wrong, because the first argument should be the object on which function will be applied.
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
const user1 = {
        name : "Ramneek Singh",
        age : 7,
        about:() =>{
            console.log(this.name, this.age); // this.name and this.age are undefined, because arrow functions donot have "this" as user1.It takes it from surroundings.
        }
}
// user1.about();   
// user1.about.call(user1);
