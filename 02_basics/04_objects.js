// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isloggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "jaybhatia@gmail.com",
    fullname: {
        userfullname: {
            firstName: "jayraj",
            lastName: "Bhatia"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = { obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2} // spread operator important
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "j@gmail.com",
    },
    {
        id: 1,
        email: "b@gmail.com",
    },
    {
        id: 2,
        email: "s@gmail.com",
    },
]
users[1].email
console.log(tinderUser);


console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // in company if you want value and its not there you can check it with this method.
