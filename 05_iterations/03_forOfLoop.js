//Array Specific Loops

//for of loop
// for of loop is used to iterate over iterable objects like arrays, strings, maps, sets etc

// ["","",""]-array(strings)
// [{},{},{}]-array(objects)

// const arr = [1,2,3,4,5]

// for (const num of object) {
    
// }
//============================================

// for (const num of arr) {
//     console.log(num)
    
// }

//object here means on what do you want to apply a loop  it can be an array,strings, maps, sets etc

//============================================

// const greetings = "Hello World!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`)
    
// }

//=============================================

//Maps - datatype in js
// Maps are iterable objects and can be used with for of loop
// Maps are key value pairs
// Maps remember the order of insertion of keys unlike objects
// Maps can have any type of key unlike objects which can only have strings as keys
// there are no duplicate keys in maps unlike objects which can have duplicate keys

// const map = new Map()
// map.set('IN', 'India')
// map.set('USA', 'United States of America')
// map.set('UK', 'United Kingdom')
// map.set('IN', 'India')


// console.log(map)

//=============================================

// for of loop with maps
// for (const [key, value] of map) {

// for (const [key,value] of map) {
//     console.log(key,':-' ,value)
    
// }

//==============================================

//forof loop with objects
// for of loop can be used with objects but we need to use Object.entries() method to convert the object into an array of key value pairs
// Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs

const myObject = {
    'game1' : 'NFS',
    'game2' : 'FIFA',
    'game3' : 'PUBG',
}

for (const [key,value] of myObject) {
    console.log(key,':-' ,value)
    
}

//above method to iterate object in for of loop is not correct
