// Dates

let myDate = new Date(2004,4,4,7,0,0,0)

console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log(myDate.toString());
console.log(myDate.toUTCString());
console.log(myDate.toDateString());


let timestamp = Date.now()

console.log(timestamp.toDateString());