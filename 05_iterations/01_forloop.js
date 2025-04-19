// for LOOP 

for (let  i= 0; i < 10; i++) {
    const element = i;
    // console.log(element)
    if(element == 5){
        // console.log("5 is best number")
    }
    // console.log(element)

    
}


//press CTRL-D to and then delete to change a word multiple times at once 
// First step : variable gets initialized when it enters the for loop
// Second step : condition gets checked, if it is true then it will enter the loop and if it is false then it will exit the loop
// Third step : it will execute the code inside the loop and then it will go to the last step where just before reaching end of the loop, it will execute the last step which is incrementing the variable by 1

//==========================================================================================================================================================================================================================

for (let i = 0; i < 10; i++) {
    // console.log(`Outer Loop value ${i}`)
    for (let j = 0; j < 10; j++) {
        // console.log(`Inner Loop value ${j} and Outer Loop value ${i}`)
        // console.log(i + '*' + j + '=' + i * j)        
    }
    
}

//===========================================================================================================================================================================================================================
//loops in array

// let myArray = ["batman","Flash","Aquaman","Wonder woman"]
// console.log(myArray.length)
// for (let  index = 0;  index < myArray.length;  index++) {
//     const element = myArray[ index];
//     console.log(element)
    
// }

//===========================================================================================================================================================================================================================
//break and continue in loop

//break in for loop
// for (let index = 1; index <= 20; index++) {
//     if(index==5){
//         console.log(`Detected 5`)
//         break;
//     }
//     console.log(`Value of i is ${index}`)
// }

//=================================================================

// continue in for loop
for (let index = 1; index <= 20; index++) {
    if(index==5){
        console.log(`Detected 5`)
        continue ;
    }
    console.log(`Value of i is ${index}`)
}