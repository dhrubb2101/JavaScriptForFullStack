const name = "hitesh"
const repoCount = 50

console.log(name + repoCount + "value")

console.log(`Hello my name is ${name}  and my repo count is ${repoCount}`)

// String Interpolation is the process of embedding expressions inside string literals. It allows dynamic values to be inserted directly within a string without manual concatenation.

// In JavaScript, we use template literals (backticks `) for string interpolation:


// const name = "John";
// console.log(`Hello, ${name}!`); // Output: Hello, John!

// /* Why Prefer Backticks Over Double Quotes 
// String Interpolation – ${} syntax makes embedding variables easy.

// Multi-line Support – Template literals allow multi-line strings without \n.

//  Better Readability – Reduces string concatenation (+ operator). 

//there's one better way to declare variables
const gameName = new String('Hitesh-hc')

console.log(gameName) // String { 'Hiteshhc' }
console.log(typeof gameName) // object
console.log(gameName.length) // 8
console.log(gameName[0]) // H
console.log(gameName.__proto__) // H

console.log(gameName.length)
console.log(gameName.toUpperCase()) // HITESHHC
console.log(gameName.toLowerCase()) // hiteshhc
//original value remains the same
console.log(gameName.charAt(2)) // t
console.log(gameName.indexOf('t')) // 2

const newString = gameName.substring(0,4)
console.log(newString) // Hite
// console.log(gameName.slice(0,4)) // Hite

const anotherString = gameName.slice(-8,4)
console.log(anotherString) // Hite

const newStringOne = "  Hitesh   "
console.log(newStringOne)
console.log(newStringOne.trim()) // Hitesh
console.log(newStringOne.trimStart()) // Hitesh
console.log(newStringOne.trimEnd()) // Hitesh

const url = "https://www.hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-')) // https://www.hitesh.com/hitesh-choudhary
console.log(url.includes('sundar'))
console.log(split('-'));