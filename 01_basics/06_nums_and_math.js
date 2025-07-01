const score = 400

let x = new Number("43")
console.log(x+7);

console.log(x.toString().length)

const OtherNumber = 123.5451

console.log(OtherNumber.toPrecision(1));


// ************* Maths ************

console.log(Math)
console.log(Math.abs(-4.43))  //Modulus 
console.log(Math.round(4.65300))
console.log(Math.random()) // random only provides random values between 0 and 1 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);