// Block vs Function Scope
// let and const are block scoped
// var is function scoped
{
  let firstname = "Navnoor Singh";
  console.log(firstname);
}
// console.log(firstname); // Error
{
  let firstname = "Ramneek Singh";
  console.log(firstname);
}
