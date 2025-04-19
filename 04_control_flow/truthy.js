const userEmail = "H@hitesh.ai"

if(userEmail){
    console.log("Got user Email")
}else{
    console.log("Don't have user email")
}

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

if(userEmail.length === 0){
    console.log("Array is empty")
}

const emptyObj = {}

if(Object.keys(emptyObj).length===0){
    console.log("Object is empty")
}

//false == 0 output is true
// false == '' //output is true
// 0 == '' //output is true


//Nullish Coalescing Operator (??) : null defined
//the whole is dependent on null and undefined

let val1;
val=5 ?? 10