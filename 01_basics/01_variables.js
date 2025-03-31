const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur" // we can 
let accountState; // we can declare a variable without assigning a value to it
accountState = "Rajasthan" // we can assign a value to a variable after declaring it


// accountId = 2 // This will throw an error because accountId is a constant   , it is not allowed

accountEmail = "hc@hc.com" // This is allowed because accountEmail is a variable that can be changed
accountPassword = "2121212121" // This is allowed because accountPassword is a variable that can be changed
accountCity = "Bengaluru" // This is allowed because accountCity is a variable that can be changed

console.log(accountId) // 144553    

console.log(accountEmail)

console.log([accountId, accountEmail, accountPassword, accountCity, accountState]) // [ '2121212121', 'Bengaluru' ]

{} //curly braces are called as scope 
/* Prefer not to use var at all, use let and const instead.because of issue in block scope and function scope.
   var is function scoped, let and const are block scoped. 
   var is hoisted to the top of the function, let and const are not hoisted.
   var can be re-declared, let and const cannot be re-declared.
   var can be updated, let and const can be updated.
   var is global scoped, let and const are block scoped.
*/
