// Dates 

let myDate = new Date();
// s// Output - object

let myCreatedDate = new Date(2023, 0, 23) // January is 0, February is 1, March is 2, and so on
let myCreatedDate1 = new Date(2023, 0, 23, 5, 3) // January is 0, February is 1, March is 2, and so on
let myCreaatedDate2 = new Date("01-14-2023")
// console.log(myCreatedDate.toDateString()) // Output - 2023-01-22T18:30:00.000Z
// console.log(myCreatedDate1.toLocaleString()) // Output - 2023-01-22T18:30:00.000Z
// console.log(myCreaatedDate2.toLocaleString()) // Output - 2023-01-14T18:30:00.000Z

let myTimeStamp = Date.now()    // Output - 1674400000000
// console.log(myTimeStamp); // Output - 1674400000000

// console.log(myCreaatedDate2.getTime()); //output - 
//to get date in miliseconds with the starting point being taken as a ribitary date of 1st jan 197-

// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getFullYear());

//`${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday: "long",
})