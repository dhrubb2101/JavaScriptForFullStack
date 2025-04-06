const score = 400 
console.log(score)
console.log(typeof score) // number
console.log(score + 100) // 500

const balance = new Number(100)
console.log(balance) // [Number: 100]
console.log(typeof balance) // object

console.log(balance.toString()) // '100'
console.log(balance.toString().length) // 3
