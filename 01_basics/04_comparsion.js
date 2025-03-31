console.log(2>1) 
console.log(2<1)
console.log(2>=1)
console.log(2<=1) 
console.log(2==1) // this will check for value only
console.log(2===1) // this will check for value and type    
console.log(2!=1) // this will check for value only
console.log(2!==1) // this will check for value and type
console.log(2=="1") // this will check for value only

console.log("2" > 1) // this will check for value only
//true
console.log("02" > 1) // this will check for value only
//true

console.log(null > 0)
console.log(null == 0) // this will check for value only    
console.log(null >= 0) // this will check for value only

console.log(undefined == 0) // this will check for value only
console.log(undefined > 0) // this will check for value only    
console.log(undefined < 0) // this will check for value only

//Avoid using these type of comparision cuz there's a lot of confusion and inconsistency in JS

// === is a strict equality operator, it checks for value and type
// == is a loose equality operator, it checks for value only
// != is a loose inequality operator, it checks for value only
// !== is a strict inequality operator, it checks for value and type

console.log("2"===2) // this will check for value and type
//false
