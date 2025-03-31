"use strict" // This will make sure that the code is executed in strict mode, which means that you cannot use undeclared variables, and some other restrictions are applied. It is a good practice to use strict mode in your code.
//treat all JS code as newer version
alert("Hello World") // This will show an alert box with the message "Hello World"
// console.log("Hello World") // This will print "Hello World" in the console

// alert(3+3) //we are using node.js and not browser, so this will not work
// alert(3+3) // if we enter directly in DOM console, it will work

console.log(3+3) 

// code readability should be high
// code should be clean and easy to understand
// code should be maintainable
//use MDN docs for reference

// use camelCase for variable names
console.log("Dhrubb Gupta")

let name = "hitesh"
let age = 18
let isLoggedIn = false // boolean values are true or false
let state = null // null is a special value that represents no value or no object


// number => 2.to power 53
//biginit => 2.to power 53 + 1
//string => "hitesh" , 'hitesh' , `hitesh`
//but always use double quotes 
//boolean => true or false 
//null => it's a standalone value and a datatype as well ,null is a representation of empty value
//undefined => when a variable is declared but not assigned a value, it is undefined
//symbol => unique value , not used much
//object => collection of key value pairs , objects are mutable , arrays are also objects in JS


console.log (typeof "Dhrubb") // string
console.log (typeof 3) // number
console.log (typeof age) // variable
console.log(typeof null) // object , this is a bug in JS, null is not an object, it is a standalone value
console.log(typeof undefined) // undefined , this is a bug in JS, undefined is not a datatype, it is a special value that represents no value or no object  