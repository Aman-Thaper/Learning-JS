if(true)
{
    console.log("AMAN THAPER")
}

let bal = 501

if (bal>500) console.log("Aman is rich");

let userLoggedIn = false
let hasDebitCard = false

if (userLoggedIn  && hasDebitCard){
    console.log("You have both");
}else if (!(userLoggedIn  || hasDebitCard)){
    console.log("You dont have anything");
}
else{
    console.log("You have one");
}