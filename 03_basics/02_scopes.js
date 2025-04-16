let a = 10
const b = 20
var c = 30

// console.log(b) // 20        
// console.log(c) // 30

if (true) {
    let a = 100
    const b = 200
    // console.log("INNER", a) // 100
    c=300
   
}
// console.log(a) // 10
// console.log(c) // 300 // that's why we never use VAR becuase what value we defined in the block just overrode the what we defined in the global scope

//never used VAR ever 

// ===================================

function one(){
    const username = "Hitesh"

    function two(){
        const website = "youtube"
        // console.log(username) // Hitesh
    }
    // console.log(website)

    two()
    
}

one()

//in nested function we can access the outer function variable but not the other way around
//that is child function can access the parent function variable but not the other way around

// =====================================

// if-else scope

if(true){
    const username = "Hitesh"
    if(username === "Hitesh"){
        const website = "youtube"
        // console.log(username + " " + website) // Hitesh
    }
    // console.log(website) // ReferenceError: website is not defined
}
// console.log(username) // ReferenceError: username is not defined
// in both cases we are not able to access the variable outside the block scope

// =====================================interesting==================

function addone(num){ //function
    return num + 1

}

addone(5)

//another way

const addTwo = function(num){ //function expression where function is stored in a variable
    return num + 2
}

addTwo(5)