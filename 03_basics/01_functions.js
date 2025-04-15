

function syMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");


}

//sayMyName //when you wwrite it like this it's the reference to the function
//sayMyName() //when you write it like you're executing the function

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2)  //this will return the value of the addition of the two numbers

// }

function addTwoNumbers(number1,number2){
    let result = number1 + number2
    // console.log(result)  //this will return the value of the addition of the two numbers
    // return result //this will return the value of the addition of the two numbers
    return number1 + number2
    //After return statement the function will not execute any code
    //so the console.log will not be executed but above return statement will be executed
    // console.log(result) //this will return the value of the addition of the two numbers
}

const result = addTwoNumbers(2,3) //this will return 5

console.log("Result: " , result) //this will return undefined because the function does not return anything
// addTwoNumbers(3,"4") //this will return 34 because the second parameter is a string and it will be concatenated with the first parameter
// //addTwoNumbers(3,4) //this will return 7 because both parameters are numbers and they will be added
// addTwoNumbers(3,"a") //this will return 3a because the second parameter is a string and it will be concatenated with the first parameter
// addTwoNumbers(3,null) //this will return 3 because the second parameter is null and it will be ignored
// addTwoNumbers(3,undefined) //this will return NaN because the second parameter is undefined and it will be ignored

//when we create a function and put values in it they are called parameters
//when you call the function and put values in it they are called arguments


function loginUserMessage(username = "Sam"){
    if(username===undefined){  ///or write !username which is same as what is written now gives the same value = undefined
        console.log("Please enter a username")
        return //after writing it would not enter below code and return undefined

    }
    return `${username} just logged in`
    
}

// console.log(loginUserMessage("Dhrubb"))
console.log(loginUserMessage())

//============================================

// function calculateCartPrice(...num1){ //if we use spread operator we can pass any number of arguments to the function
//     // console.log(num1) //this will return an array of all the arguments passed to the function
//     return num1

// }

// console.log(calculateCartPrice(200,400,500)) //this will return 200 because the function only takes one parameter and ignores the rest

function calculateCartPrice(val1,val2, ...num1){
    return num1

}

console.log(calculateCartPrice(200,120,400,40000))
//output - [ 400, 40000 ] because the val1,val2 takes values 200 and 120 and rest comes in num1 

//=======================

const user = {
    username: "Hitesh",
    price: 199
}

//how to use object in a function

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user) //this will return Username is Hitesh and price is 199   
handleObject({
    username:"Sammy",
    price:200
})

// ===================================

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[2]

}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,400,100,600]))