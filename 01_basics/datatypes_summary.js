// Two types of datatypes 1. primitive 2. non-primitive

// 1. primitive datatypes:- 7 types: string, Number, Boolean, null, undefined, symbol-For special define, BigInt-For large value.

// JavaScript is a dynamically typed language.
// That means you don’t need to declare variable types explicitly. The type is determined automatically at runtime, and a variable’s type can change as the program runs. For example:
// let x = 5;      // number
// x = "hello";    // now it's a string
// In contrast, statically typed languages (like Java, C, or TypeScript) require you to define variable types at compile time, and those types cannot change.

// const score = 100
// const socreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const andotherId = Symbol('123')

// console.log(id === andotherId);


// const bigNumber = 2525523623523532;
// 2. Non-primitive also know as Refrence datatypes
// Array, objects, Functions


// const heros = ["spiderman", "batman", "antman"];
// let myObject = {
//     name: "JAYRAJ",
//     age: 22,
// }


// const myFunction = function(){
//     console.log("hello world");
// }

// console.log(typeof scoreValue);


// +++++++++++++++++++++++++++++++++++++++++++++++++++

// Two types of memory 1. Stack(primitive) 2. Heap(Non-primitive)

let myYoutubeName = "JayB"

let anotherName = "myYoutubeName"
anotherName = "JayB123"

console.log(myYoutubeName);
console.log(anotherName)

let userOne = {
    email: "jaybhatia@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "jayraj@google.com"

console.log(userOne.email);
console.log(userTwo.email);