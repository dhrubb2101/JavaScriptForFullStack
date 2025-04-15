let a = 10
const b = 20
var c = 30

// console.log(b) // 20        
// console.log(c) // 30

if (true) {
    let a = 100
    const b = 200
    console.log("INNER", a) // 100
    c=300
   
}
console.log(a) // 10
console.log(c) // 300 // that's why we never use VAR becuase what value we defined in the block just overrode the what we defined in the global scope

//never used VAR ever 
