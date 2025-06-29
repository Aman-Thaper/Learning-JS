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