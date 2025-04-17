// Immediately Invoked Function Expression (IIFE)

// function chai(){
//     console.log(`DB CONNECTED`)
// }
// chai()

//============================================================

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`)
})(); // IIFE
// this is a function which is invoked immediately after it is defined
//we enclose the whole function in paranthesis


//============================================================

//Also another thing if we use IIFE function simultaneously say two times 
//Mistake is when we finish first IIFE function end it with semi colon mark 
//then only second IIFE function will work doesn't matter if it is a normal function or arrow function

( (name)=> {
    console.log("DB CONNECTED TWO")

})('HITESH')