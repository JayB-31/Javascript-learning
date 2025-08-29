function sayMyName(){
    console.log("j");
    console.log("a");
    console.log("y");
    console.log("r");
    console.log("a");
    console.log("j");
}
// sayMyName()

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumber(number1, number2){
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumber(3, 4)

// console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("jayraj"))
// console.log(loginUserMessage())

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "jayraj",
    price: 199
}

function handelObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
// handelObject(user)
handelObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
