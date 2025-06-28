let score = "44a"

console.log(typeof(score));

let valueInNumber = Number(score)

console.log(typeof(valueInNumber));
console.log(valueInNumber);

//"33"->33
//"3eda"->NaN
// true -> 1 | false -> 0 and vice versa

let isLoggedin=1

console.log(Boolean(isLoggedin));  // 1-> true 

/*
OPERATIONS
*/

str1 = "Aman"
str2 = "Thaper"

str3 = str1 + str2
console.log(str3);

let gameCounter = 100
let a = ++gameCounter  //prefix  this adds +1 before only so when assigning value it will get the updated value  -- MDN read
gameCounter = 100
let b = gameCounter++  //postfix  this will add +1 after assigning it the currect value
console.log(a) //101
console.log(b) //100