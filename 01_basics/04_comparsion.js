// console.log(2>1) 
// console.log(2<1)
// console.log(2>=1)
// console.log(2<=1) 
// console.log(2==1) // this will check for value only
// console.log(2===1) // this will check for value and type    
// console.log(2!=1) // this will check for value only
// console.log(2!==1) // this will check for value and type
// console.log(2=="1") // this will check for value only

// console.log("2" > 1) // this will check for value only
// //true
// console.log("02" > 1) // this will check for value only
//true

console.log(null > 0)
console.log(null == 0) // this will check for value only    
console.log(null >= 0) // this will check for value only

console.log(undefined == 0) // this will check for value only
console.log(undefined > 0) // this will check for value only    
console.log(undefined < 0) // this will check for value only

// 1️⃣ console.log(null > 0);
// Output: false
// Reason:

// In JavaScript, when using relational operators (>, <, >=, <=), null is converted to a number, which results in 0.

// This becomes 0 > 0, which is false.

// 2️⃣ console.log(null == 0);
// Output: false
// Reason:

// The equality operator (==) does not convert null to a number.

// null is only loosely equal to undefined, but not to 0.

// 3️⃣ console.log(null >= 0);
// Output: true
// Reason:

// When using >=, JavaScript converts null to 0, so it evaluates as 0 >= 0, which is true.

// 4️⃣ console.log(undefined == 0);
// Output: false
// Reason:

// undefined is only equal to null in loose equality (==), but not to any other value, including 0.

// 5️⃣ console.log(undefined > 0);
// Output: false
// Reason:

// When using comparison operators, undefined is converted to NaN (Not-a-Number).

// Any comparison (NaN > 0, NaN < 0, NaN == 0) involving NaN always returns false.

// 6️⃣ console.log(undefined < 0);
// Output: false
// Reason:

// Since undefined is converted to NaN, the comparison (NaN < 0) returns false.

// 🔹 Summary of Key Points:
// null is treated as 0 in comparisons but not in equality (==).

// undefined is treated as NaN in comparisons, which always results in false.

// null >= 0 is true, but null > 0 is false due to type coercion.

//Avoid using these type of comparision cuz there's a lot of confusion and inconsistency in JS

// === is a strict equality operator, it checks for value and type
// == is a loose equality operator, it checks for value only
// != is a loose inequality operator, it checks for value only
// !== is a strict inequality operator, it checks for value and type

console.log("2"===2) // this will check for value and type
//false

