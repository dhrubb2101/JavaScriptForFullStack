let score = "33abc"


// const {score} = req.body // destructuring the score from the request body
//we don't know the datatype of score here

console.log(typeof score) // string
console.log(typeof(score)) // string

let valueInNumber = Number(score) // converting the string to number
console.log(typeof valueInNumber) // number
console.log(valueInNumber) // NaN , Not a Number, this is a special value that represents an invalid number
console.log(valueInNumber + 3) // NaN , Not a Number, this is a special value that represents an invalid number

// "33" => 33 string gets easily converted to number 
// "33abc" => NaN , Not a Number, this is a special value that represents an invalid number
// true => 1; false => 0

// Another Example:
let isLoggedIn = true // boolean values are true or false
console.log(isLoggedIn) // true

console.log(typeof isLoggedIn) // boolean
let valueInLoggedIn = Number(isLoggedIn) // converting the boolean to number
console.log(typeof valueInLoggedIn) // number

// Another Example:
let isLoggedOut = 0 

let booleanIsLoggedOut = Boolean(isLoggedOut) // converting the number to boolean
console.log(typeof booleanIsLoggedOut) // boolean
console.log(booleanIsLoggedOut) // false

//Another Example:
let isLoggedOff = ""

let booleanIsLoggedOff = Boolean(isLoggedOff) // converting the string to boolean   
console.log(typeof booleanIsLoggedOff) // boolean
console.log(booleanIsLoggedOff) // false

//Another Example:
let isLoggedOn = "Dhrubb"

let booleanIsLoggedOn = Boolean(isLoggedOn) // converting the string to boolean   
console.log(typeof booleanIsLoggedOn) // boolean
console.log(booleanIsLoggedOn) // false

//1 => true; 0 => false
// "" => false; "Dhrubb" => true

let someNumber = 33

let stringNumber = String(someNumber) // converting the number to string
console.log(typeof stringNumber) // string
console.log(someNumber)