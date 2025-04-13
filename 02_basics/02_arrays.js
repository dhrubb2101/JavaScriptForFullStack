const marvel_heroes = ["thor",'ironman','spiderman','hulk','black widow','captain america']
const dc_heroes = ["superman","batman","flash"]

//push method
marvel_heroes.push("dc_heroes") 
console.log(marvel_heroes)
//output - [ 'thor', 'ironman', 'spiderman', 'hulk', 'black widow', 'captain america',["superman","batman","flash"] ]
//which is not a good way to do merge two arrays as to access an element we have to write somthing like this
// marvel_heroes[6][0] which is not a good way to do it
//so we use the concat method to merge two arrays


//concat method
const allHeroes = marvel_heroes.concat(dc_heroes) //merges the two arrays and returns a new array
console.log(allHeroes) 
//output - ["thor",'ironman','spiderman','hulk','black widow','captain america',"superman","batman","flash"]

//in push, the elemets or the array is pushed in existing array and in 
//in concat an entire new array is created


//spread operator
const all_new_heroes = [...marvel_heroes,...dc_heroes]
console.log(all_new_heroes)

const another_array = [1,2,3, [4,5,6],7,[6,7, [4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array) //flattens the array to a single level 


console.log(Array.isArray("Hitesh")) //output-false
//it is not a array
console.log(Array.from("Hitesh")) //output- [ 'H', 'i', 't', 'e', 's', 'h' ]
//it converts the string to an array of characters
//it converts to an array however possible
console.log(Array.from({name: "Hitesh"})) //interesting

let score1 = 100
let score2 = 100
let score3 = 100

console.log(Array.of(score1,score2,score3))