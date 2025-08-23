// string in javascript

const name = "jayraj"
const RepoCount = 50
// console.log(name + RepoCount + "value");

// console.log(`hello my name is ${name} and my repo count is ${RepoCount}`);

const gameName = new String('valorant-jayraj-bhatia')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('l'));

const NewString = gameName.substring(0, 4);
console.log(NewString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);


const newSringOne = "     jayraj.     "
console.log(newSringOne);
console.log(newSringOne.trim());


const url ="https://jayraj.com/jayraj%20bhatia"

console.log(url.replace('%20', '-')) 

console.log(url.includes('jayraj'));


console.log(gameName.split('-'));
