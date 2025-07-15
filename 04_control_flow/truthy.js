let userEmail = []

if (userEmail){
    console.log("Got user email");
}else{
    console.log("Didnt get user email");
}

let userEmail2 = ""

if (userEmail2){
    console.log("Got user email");
}else{
    console.log("Didnt get user email");
}

//Doesnt make sense right .... 

// FALSY VALUES
// false,0,-0,null,NaN, BigInt On,"", undefined

// TRUTHY VALUES
// "0",'false'," ",[],{},function(){}

if (userEmail.length === 0){
    console.log("Empty email");
}

const obj ={}

if (Object.keys(obj).length===0){
    console.log("Empty object");
}

// Nullish Coalescing Operator (??) : null undefined 

let val1 ;

val1 = 5 ?? 10
console.log(val1);

val1 = null ?? 10
console.log(val1);

val1 = null ?? undefined ?? 80085
console.log(val1);

//So basically '??' operator acts as a safety check . acts as fallback


// Terniary Operator

// condition ? true : false

const coldCoffee = 90

coldCoffee<=80? console.log("Less than 80") : console.log("More than 80");