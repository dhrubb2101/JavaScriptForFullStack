// const tinderUser = new Object() //singleton object
const tinderUser = {} //non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email:"some@gmail.com",
    fullname: {
        userfullname:{
            firstName: "Sammy",
            lastName: "Smith"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstName) // Sammy
console.log(regularUser["fullname"]["userfullname"]["firstName"]) // Sammy
console.log(regularUser["fullname"].userfullname.firstName) // Sammy
console.log(regularUser.fullname) // { userfullname: { firstName: 'Sammy', lastName: 'Smith' } }
console.log(regularUser.fullname.userfullname) // { firstName: 'Sammy', lastName: 'Smith' }

const obj1 = {
    1:"a",
    2:"b"
}

const obj2 = {
    3:"a",
    4:"b"
}

const obj6 = {
    5:"a",
    6:"b"
}

//how to merge two objects in javascript
const obj3 = {...obj1, ...obj2} //spread operator
console.log(obj3) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj4 = Object.assign(obj1,obj2) //Object.assign method
console.log(obj3) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj5 = Object.assign({}, obj1,obj2,obj6) //Object.assign method
console.log(obj5) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
//what happens here {}- is considered the target and obj1,obj2,obj6 are considered sources
// so the target is empty and the sources are merged into the target


const users = [
    {
        id: 1,
        email: "H@gmail.com"
    },
    {
        id: 2,
        email: "H@gmail.com"
    },
    {
        id: 3,
        email: "H@gmail.com"
    },
    {
        id: 4,
        email: "H@gmail.com"
    }
];

users[1].email
console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn')) // true