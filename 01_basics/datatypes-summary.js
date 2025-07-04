// Primitive
// 7 types : String,Number,Boolean,null,undefined,symbol,bigint

const id = Symbol('123')
const id2 = Symbol('123')

console.log(id===id2); //not equal as symbol created unique value even though value maybe passed same

// Reference (Non Primitive)

// Array ,Objects,Functions

const heros = ["Ironman","Thor","Rogers"] //arrays

let Obj = {
    name : "Aman Thaper",
    age : 22
}

const myFunction = function(){
    console.log("Function calling worked")
}

console.table(heros)
console.log(Obj);
myFunction()

//******************* 

// Stack (Primitive) , Heap (Non-Primitive)

let userOne = "Aman"
let userTwo = userOne
userTwo = "John"
console.log(userOne);
console.log(userTwo);


let Account = {
    name : "Aman",
    age : 21
}

let Account2 = Account

Account2.name = "Jake"

console.log(Account.name);  
console.log(Account2.name);