//if statement
// const isUserLoggedIn = true
// const temperature = 20

// if(2=="2"){
//     console.log("Executed")


// }

// if(temperature === 20){
//     console.log("Temperature is less than 50")
// } else{
//     console.log("temperature is greater than 50")
// }

// console.log("Executed") // Executed

//>,<,>=,<=,===,!==
// '=' is assignment operator that is used to assign a value to a variable 
//for example above isUserLoggedIn = true means we are assigning the value true to the variable isUserLoggedIn
// and '==' is equality operator that is used to compare two values
// for example if(1 == 1) means we are comparing the value of 1 with 1 and it will return true
// and '===' is strict equality operator that is used to compare two values and their types

//=============================================================
// Block and globe scope( why we don't use var)

// const score = 200

// if(score > 100){
//     let power = "fly"
//     console.log(`User Power: ${power}`);
// }
// console.log(`User Power: ${power}`);

//==============================================================

// const balance = 1000

// if(balance > 500) console.log("test") //implicit scope 
//another way to write 
// it's a single line of code so we don't need to use curly braces

//=========================================================

// If-else proper Use Case

// const balance = 1100
// if(balance < 500){
//     console.log("less than")
// } else if(balance < 750){
//     console.log("less than 750")
// } else if(balance < 900){
//     console.log("less than 900")
// } else {
//     console.log("less than 1200")
// }

//==========================================================

const userLoggedIn = true 
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2===2) {
    console.log("Allow to buy course")
}

if(loggedInFromEmail || loggedInFromGoogle) {
    console.log("User logged In")

}

 

