const score = 400 
// console.log(score)
// console.log(typeof score) // number
// console.log(score + 100) // 500

const balance = new Number(100)
// console.log(balance) // [Number: 100]
// console.log(typeof balance) // object

// console.log(balance.toString()) // '100'
// console.log(balance.toString().length) // 3
// console.log(balance.toFixed(2)) // '100.00'
// console.log(balance.toFixed(2).length) // 6


//when we convert it to string, we can use string methods on it like length

const otherNumber = 23.8966

// console.log(otherNumber.toFixed(2)) // '23.90'
// console.log(otherNumber.toPrecision(2)) // '24'
// console.log(otherNumber.toPrecision(3)) // '23.9'

const otherNumber1 = 123.8966
// console.log(otherNumber1.toPrecision(4)) // '123.9'
// console.log(otherNumber1.toPrecision(3)) // '124'


const hundreds = 1000000000
// console.log(hundreds.toLocaleString()) // '1,000,000,000'
// console.log(hundreds.toLocaleString('en-IN')) // '100,00,00,000'
//say if you enter a value like 1234567890, it will be converted to 1,23,45,67,890
//this is because the Indian numbering system is different from the US numbering system
//so it will convert the number to the Indian numbering system
//this is useful when you want to display numbers in a specific format
//like currency or date or time
//tolocalestring is a very useful method to format numbers in a specific way
//it takes two arguments, the first is the locale and the second is the options object

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=++++++++++++++

// console.log(Math)
// console.log(Math.abs(-4)) // 4 //it turns negative numbers to positive numbers and it only works on negative numbera
// //it doesn;t work on positive numbers
// console.log(Math.abs(4)) // 4 //it returns the same number if it is positive
// console.log(Math.round(4.3)) // 4 //it rounds the number to the nearest integer
// console.log(Math.round(4.6)) // 5 //it rounds the number to the nearest integer incase anything above than 0.5 we round it off to one.
// console.log(Math.floor(4.9)) // 4 //it rounds the number down to the nearest lowest integer
// console.log(Math.ceil(4.1)) // 5 //it rounds the number up to the nearest next integer,say if number in decimal point a bit bigger than 4, it will round it to 5
//it will always round it up to the next integer

// console.log(Math.min(4,3,2,5,6))
// console.log(Math.max(4,3,2,5,6))

console.log(Math.random())
//gives random values between 0 & 1 which include decimal as well

console.log((Math.random()*10) + 1)
console.log((Math.random()*10) + 1)
console.log(Math.floor(Math.random()*10) + 1)

const min = 10 
const max = 20 

console.log(Math.floor(Math.random() * (max-min + 1)) + min)