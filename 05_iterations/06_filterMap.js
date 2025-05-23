const coding = ["js","ruby","cpp","swift","java","python"]



// const values = coding.forEach( (item) => {
//     console.log(item)
//     return item
// })

// console.log(values)

//For-each doesn't return anything, it just prints the value of the array
// that's also why we don't give a name of the function when defining it

//===================================================

//this method returns values
const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => num > 4 )
// console.log(newNums) // [5,6,7,8,9,10]

//====================================================
// doing it another way,because we used curly braces so we have to use return keyword.

// const newNums = myNums.filter( (num) => {
//     return num>4
// } )
// console.log(newNums) // [5,6,7,8,9,10]

//======================================================

//how to use above curly braces thing in for-each loop

// const newNums = []

// myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })

// console.log(newNums)


//======================================================
//some other basic filter functions

const books = [
    {"title":'Book One', genre: 'Fiction', publish:1981, edition: 2004 },
    {"title":'Book Two', genre: 'Non-Fiction', publish:1982, edition: 2008 },
    {"title":'Book Three', genre: 'History', publish:1999, edition: 2007 },
    {"title":'Book Four', genre: 'Non-Fiction', publish:1989, edition: 2010 },
    {"title":'Book Five', genre: 'Science', publish:2009, edition: 2014 },
    {"title":'Book Six', genre: 'Fiction', publish:1987, edition: 2010},
    {"title":'Book Seven', genre: 'History', publish:1986, edition: 1996 },
    {"title":'Book Eight', genre: 'Science', publish:2011, edition: 2016 },
    {"title":'Book Nine', genre: 'Non-Fiction', publish:1981, edition: 1989 },
]

// let userBooks = books.filter( (bk) => bk.genre === 'History')

const userBooks = books.filter( (bk) => { 
    return bk.publish >= 2000 && bk.genre === 'History'
} )
console.log(userBooks)


//======================================================

