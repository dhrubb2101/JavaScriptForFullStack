// const userEmail = "H@hitesh.ai"

// if(userEmail){
//     console.log("Got user Email")
// }else{
//     console.log("Don't have user email")
// }

//falsy values

// false, 0, "", null, undefined, NaN,-0, BigInt 0n

//truthy values 

// empty arrays, empty objects, functions, strings with spaces, numbers other than 0, BigInt other than 0n
//"0" is a truthy value when it is in string,
//"false" or 'false is a truthy value when it is in string
//" " is a truthy value when it is in string
//[] is a truthy value when it is in array
//function(){} is a truthy value when it is in function
//{} is a truthy value when it is in object
//BigInt other than 0n is a truthy value when it is in BigInt

// if(userEmail.length === 0){
//     console.log("Array is empty")
// }

// const emptyObj = {}

// if(Object.keys(emptyObj).length===0){
//     console.log("Object is empty")
// }

//false == 0 output is true
// false == '' //output is true
// 0 == '' //output is true


//Nullish Coalescing Operator (??) : null defined
//the whole is dependent on null and undefined

let val1;
// val1=5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
//when you use ?? operator, it will check the left side first, if it is null or undefined then it will return the right side value
//when you call from a database like firebase or appwrite or supabase, it will return us two values and not a direct reponse, it can be a null or undefined value so you can use this operator to check the value

val1 = null ?? 10 ?? 10

// console.log(val1);

//Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("More than 80");
//