const user = {
    username: "hitesh",
    price: 999,


welcomeMessage: function(){ //declaring a function as key in the object
    console.log(`${this.username} , welcome to website`)
    console.log(this)
    }

}


// user.welcomeMessage() // hitesh , welcome to website
// user.username = "Sammy"
// user.welcomeMessage()

//this keyword is used to current context that's why value which was stored in key was changed
// and used this keyword here because it presents them with a current context


// console.log(this)

//===============================================

// function chai(){
//     console.log(this) // window object
// }

// chai() // window object

//this keyword is used to refer to the current context of the function or object
// but in this case it is referring to the window object because it is not inside any object or function

//======================================================
// here this keyword inside the function will not work as it works inside the object.
//the context provided by this keyword only works inside an object not a function

// function chai(){
//     let username = "Hitesh"
//     console.log(this) 
// }

// chai() 

//========================================================

// const chai = function (){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai() // undefined

//=========================================================


const chai =  () =>{
    let username = "hitesh"
    console.log(this);
}

// chai()

//==========================================================

//basic arrow function
// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3,4))

//==========================================================

//Implicit return in arrow function

// if the function has only one line of code then we can use implicit return
// const addTwo = (num1,num2) => num1 + num2
//we can also write it like this we add THE brackets
// const addTwo = (num1,num2) => (num1 + num2)
//if we use curly braces then we need to use return keyword otherwise it will not work

// console.log(addTwo(3,4))


//========================================================
//Implicit return in arrow function with object

const addTwo = (num1,num2) => ({username: "Hitesh", price: 999})
//output will be in the form of object because we are using implicit return and we are using brackets

//============================================================


// const myArray = [2,5,3,7,8]

//myArray.forEach()