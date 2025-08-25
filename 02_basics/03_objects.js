// singleton

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "jayraj",
    [mySym]: "mykey1",
    age: 22,
    location: "surat",
    "full name": "jayraj bhatia",
    email: "jaybhatia@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturady"]
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]);

JsUser.email = "jaybhatia9033@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "jaybhatia95@gmail.com"
// console.log(JsUser);


JsUser.greetings = function(){
    console.log("hello Js User");
}
JsUser.greetingsTwo = function(){
    console.log(`hello Js User, ${this.name}`);
}

console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());
