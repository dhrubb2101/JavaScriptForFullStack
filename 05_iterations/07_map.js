const myNumbers = [1,2,3,4,5,6,7,8,9,10]
//map is used to iterate over arrays and return a new array with the same length as the original array
//map is better than filter method 

// const newNums = myNumbers.map( (num) =>  num + 10)
// console.log(newNums) //output- [11,12,13,14,15,16,17,18,19,20]

//=========================================

// if you do it with curly braces then alwaus use return keyword 

// const newNums1 = myNumbers.map( (num) => {return num + 5})  
// console.log(newNums1)

//=========================================

//chaining

const newNums2 = myNumbers
                    .map( (num) => num*10)
                    .map( (num ) => num + 1)
                    .filter( (num) => num >= 40)
console.log(newNums2)

//output- [41, 51, 61, 71, 81, 91, 101]
//here we are chaining the map and filter method
//first we are multiplying the numbers by 10 and then adding 1 to it and then filtering the numbers which are greater than or equal to 40

