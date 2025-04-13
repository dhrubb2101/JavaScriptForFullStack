//array

const myArr = [0,1,2,3,4,5]
const myHeroes = ["spiderman", "ironman", "thor", "hulk"]

const myArr2 = new Array(1,2,3,4)


//javascript arrays are resizable

console.log(myArr[1])


//Array methods


myArr.push(6) //adds an element at the end of the array
myArr.push(7)
// myArr.pop() //removes the last element of the array
console.log(myArr)


// myArr.unshift(9)
// myArr.unshift(8) //adds an element at the start of the array
// myArr.shift() //removes the first element of the array

console.log(myArr.includes(9))
console.log(myArr.indexOf(9)) //returns -1 if not found
console.log(myArr.indexOf(8)) //returns -1 if found
console.log(myArr.indexOf(7)) //returns 6 if found

const newArr = myArr.join() //joins the array elements into a string
console.log(myArr) 
//
console.log(typeof newArr) //returns string
console.log(newArr) 


//splice,slice

console.log("A",myArr)
const myn1 = myArr.slice(1,3) //returns the elements from the original array and does not modify the original array
//slice does not modify the original array
//slice includes the first element and excludes the last element
//slice is used to extract a portion of the array
console.log(myn1)


console.log("B",myArr) //adds an element at the start of the array
const myn2 = myArr.splice(1,3) //removes the elements from the original array and returns them
//splice modifies the original array
console.log("C",myArr) //adds an element at the start of the array
console.log(myn2) 