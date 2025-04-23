const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`${acc} and currval is ${currval}`)
//     return acc + currval
// }, 0)

// console.log(myTotal) //output- 6
// //reduce is used to reduce the array to a single value by add all of them
// //it takes two arguments, first is the function and second is the initial value of the accumulator
// //the function takes two arguments, first is the accumulator and second is the current value

//===========================================

//writing it in arrow function

const myTotal = myNums.reduce( (acc,curr) => acc + curr,0)
console.log(myTotal) //output- 6
// //here we are using arrow function to write the reduce method

//============================================

//Example : shopping cart using array within it objects

const shoppingCart = [
    {
        itemName: "js course",
        price: 1999
    },
    {
        itemName: "py course",
        price: 2999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const shoppingCartTotal = shoppingCart.reduce( (acc , item) => acc + item.price, 0)
console.log(shoppingCartTotal)