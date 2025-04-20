const coding = ["js","ruby","cpp","swift","java","python"]


// coding.forEach( function (val){
//     console.log(val)
// })
//because it is a callback function, it will not return anything
// it will just print the value of the array
// that's also why we don't give a name of the function when defining it
// we just give the function as a parameter to the forEach method
// forEach method is used to iterate over arrays and it takes a callback function as a parameter

//==================================================
// forEach method with arrow function

// coding.forEach( (item) => {
//     console.log(item)
// })

//==================================================
// forEach method with named function
// named function is a function which has a name and can be called by that name
// but in this case we are not calling the function, we are passing it as a parameter to the forEach method
// so the function will be called by the forEach method and not by us
// it is also called a callback function
// callback function is a function which is passed as an argument to another function
//here we are not executing the function we are just referencing it in the forEach method
// so the forEach method will call the function and pass the value of the array to it
function printMe(item){
    console.log(item)
}

coding.forEach(printMe)

//==================================================

coding.forEach( (item, index, arr)=> {
    console.log(item,index, arr)
})

//===================================================
//Applying for-each method on array containing objects
//showing how to value in object in the array
const myCoding = [
    {
        languageName : "javascript",
        languageFileName:'js',
    },
    {
        languageName : "java",
        languageFileName:'java',
    },
    {
        languageName : "python",
        languageFileName:'py'
    }
    

]

myCoding.forEach( (item) => {
    console.log(item.languageName)

})