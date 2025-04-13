//there are two ways to define an object in javascript
////1. object literal notation
//2. object constructor notation

//singleton
// when you construct an object using the object constructor notation, it is called a singleton object.
// that is only one such type of object can be created using the object constructor notation.
// this is not the case with object literal notation, where you can create multiple objects using the same object literal notation.
// this is called a singleton object because it is not possible to create multiple objects using the same object constructor notation.


//object literals

// Object.create 
//this is the method through which construct ano object using a constructor
//through this we create a singleton object 
//this is a method of the object constructor notation

const mySym = Symbol("key1")
//we declare symbol like above 
// how to use symbol in keys of an object and then print it up

const Jsuser = {
    "full name": "Hitesh",
    name:"Dhrubb", 
    //here these keys like name,email are kept and treated as strings
    age: 23,
    [mySym]:"mykey1", //this is how we use symbol in the key of an object
    location: "Delhi",
    email:"hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]

}
//we define data in object in key-value pair
//key is the name of the property and value is the value of the property
// console.log(Jsuser.email) //when we use . we can access the value of the property without treating it using string
// console.log(Jsuser["email"])
//why do we treat it as string the reason is say you take a key named full name how will you write it when you want to access it
// console.log(Jsuser["full name"])

// console.log(Jsuser.mySym) //this will not work as it is a symbol and not a string
// we can see it below by using typeof function you'll see it is a string 
// console.log(typeof Jsuser.mySym)
//to access symbol we have to use Jsuser[mySym]
// console.log(Jsuser[mySym])


Jsuser.email = "hitesh@chatgpt.com"
//updating the value of the property
// Object.freeze(Jsuser)
//this will freeze the object and not allow any changes to be made to it
Jsuser.email ="hitesh@microsoft.com"
console.log(Jsuser)

Jsuser.greeting = function(){
    console.log("Hello Js User!")
}
Jsuser.greetingTwo = function(){
    console.log(`Hello Js User!,${this.name}`)
}

console.log(Jsuser.greeting())
console.log(Jsuser.greetingTwo())


