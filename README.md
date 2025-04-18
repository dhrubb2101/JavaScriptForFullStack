# JavaScriptForFullStack

Javascript Execution Context

1st step - Global execution context which is kept inside this keyword
-global EC of browser is known as window object which is know as this keyword in node js environment

-js is single-threaded

-Global Execution Context
-Function Execution Context
-Eval Execution Context - comes in picture when using Mongoose

how things get executed in javascript
javascript code gets executed in two phases
-javascript code -{} (take this symbol as js code)

First phase is Memory Creation Phase or Creation Phase - memory allocation for variables,
Second phase is Execution Phase

Example:-

let val1 = 10
let val2 = 5
function addNum(num1,num2){
let total = num1 + num2
return total

let result1 = addNum(val1,val2)
let result2 = addNum(10,0)
}

//if you're able to tell anybody how this code is being executed that means you know javascript.

Step1: Global Execution

- It is allocated in this keyword
  -Memory Phase - all variables are collected and stored
  Val1- undefined (at first in all variables,undefined is stored)
  Similarly for Val2- undefined

for line-3
for addNum - inside it goes function definition

for line-7
for result1 & result2 - both get undefined all like before

this is cycle 1

this is Memory allocation phase

now comes Execution Phase

- Take val1 then Val2 and 10 & 5 are stored in the variables
  -val1-10
  -val2-
- for execution phase there's nothing to do with function we move ahead
  -addNum makes itself a new execution context
  which includes (new variable environment + execution thread)
  Therefore again for this function AddNum (memory phase + execution phase happens again) and for any n number function the same steps as mentioned above will happen again just like above.

Create a memory creation phase again
where you give
val1-undefined
val2-undefined
total -undefined

Now we go to Execution Context
Here the execution takes place
and values are allocated to
num1 = 10
num2 = 5
for total = 15

Total gets returned to Global Execution Context as for any function they return their output to zglobal Execution Context

After the work is done, Global Execution Context gets deleted as well, that is the value gets deleted.

-for result1 & result2 they get the value after execution of creation of new variable environment and execution thread and they both have their memory and execution phase and similarly total recieved finally will go to global execution context.

//===============================================

Call-stack

if a function is being executed first it comes in global execution context the function gets executed

If a nested function is executed say function 1 has a nested function 2 and it has a nested funtioon 3 within it
