// Primitive or reference type data types
// Primitive data types are the most basic data types.
// They are immutable and are passed by value.

// 7 Types : String , Number , Boolean, Null,undefined, Symbol , BigInt
// ✅ Yes, they are Call by Value.

// 🔹 What does "Call by Value" mean?
// When you assign a primitive value to a variable or pass it to a 
// function, a copy of the value is made. 
// Modifying the copied value does not affect the original variable.

// "Basically, over there, they have concepts like Call by Value and Call by Reference. 
// Don’t worry, I’ll give you examples too. 
// The main difference boils down to how data is stored in memory and how you can access that data. 
// This is the basis for the two official categorizations.



const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null // No value assigned to it
let userEmail;
//let userEmail = undefined ( same only like above)

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId) // false , because both are different symbols
//even though we gave the same value to both variables but by using symbol we get unique value

const bigNumber = 3454343434343422332n
// console.log(typeof bigNumber)



// Reference (Non Primitive)

// Array, Objects , Functions
// ✅ Yes, they are Call by Reference.
// 🔹 What does "Call by Reference" mean
// When you assign a reference type value to a variable or pass it to a function,
// a reference to the original value is made.
// Modifying the reference value affects the original variable.

const heroes = ["shaktiman", "naagraj", "doga"] //arrays
// console.log(heroes[0]) // shaktiman
// console.log(heroes[2]) // doga

let myObj ={
    name: "Dhrubb",
    age: 22,
    isLoggedIn: false,
    "lastLoginDays": ["Monday", "Tuesday", "Wednesday"]
}
// console.log(myObj.name) // Dhrubb
//object

const myFunction = function() {
    console.log("Hello World")

}
//function
console.log(typeof myFunction) // function
// console.log(myFunction()) // Hello World

console.log(typeof myObj)// object
console.log(typeof heroes) // object
console.log(typeof score) // number
console.log(typeof isLoggedIn) // boolean
console.log(typeof outsideTemp) // object
console.log(typeof userEmail) // undefined

console.log(typeof id) // symbol
console.log(typeof anotherId) // symbol 


// ===========================================================

//stack Memory(primitive), heap Memory( Non-Primitive)
// Stack Memory is used to store primitive data types and reference types.
// Heap Memory is used to store reference types.

let myYoutubename= "dhrubbguptadotcom" // string
let anothername = myYoutubename // copy of the value

console.log(anothername) // dhrubbguptadotcom

anothername = "chaiaurcode" // reassigning the value

console.log(anothername) // chaiaurcode


let userOne = {
    email: "user@google.com",
    upi: "user@ybl",

}

let userTwo = userOne // reference of the object

userTwo.email = "hitesh@google.com" // changing the value of the object
console.log(userOne.email)
console.log(userTwo.email)

//in stack memory, the value is stored in the variable and it's copy is created in the stack memory which is used original variable remains the same
//in heap memory, the referemce of the variable is used to access the original variable stored there,that is original variable gets changed if it is changed