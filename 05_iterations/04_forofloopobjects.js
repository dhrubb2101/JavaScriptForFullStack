// const myObject = {
//     js : 'javascript',
//     cpp : 'c++',
//     rb : 'ruby',  
//     swift : 'swift by apple',
// }

// for (const key in myObject) {
//     console.log(key);
// }

// for (const key in myObject) {
//     console.log(myObject[key]);
// }

// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }

//===============================================
// for In loop with array

const programming = ["js","cpp","rb","swift","java"]

for (const key in programming) {
    console.log(key);
}
//the main difference between for in and for of loop is that for in loop gives the index(key of array) of the array and for of loop gives the value of the array
//the key is the index of the array

for (const key in programming) {
    console.log(programming[key]);
}

//===============================================

// for in loop for maps

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('UK', 'United Kingdom')
map.set('IN', 'India')

for (const key in map) {
    console.log(key);

}
// output-nothing

//map is nto iterable with for in loop
//for in loop is used to iterate over objects and not maps