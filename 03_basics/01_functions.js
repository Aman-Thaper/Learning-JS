function greeting(name) {
    if (!name) {
        console.log("Please provide a name.");
        // Exit the function if no name is provided
    }
    else {
        console.log(`Hello, ${name}!`);
    }
}

function addNums(a,b)
{
    a= Number(a); // Convert to number if it's a string
    b= Number(b); // Convert to number if it's a string
    return a + b;
}


greeting(""); // Calling the function with an argument

addNums(5, 10); // Calling the function with two numbers but it wont show the result
console.log(addNums("5", 10)); // Calling the function and logging the result

function calculateCartPrice(...num)
{
    let total=0;
    for (let i = 0; i < num.length; i++) {
        total = total + num[i];
    }
    return total
}

console.log(calculateCartPrice(200,400))

const user = {
    username : "Aman",
    balance : 4500
}

function handleObjectInfo(anyObject) 
{
    const {username,balance} = anyObject
    
    console.log(`User's name is ${username} and they have a balance of ${balance}`);
}


handleObjectInfo(user)

const newArray = [100,321,231,344]

function getSecondNumber(getArray) {
    if(getArray.length<2){
        return 
    }
    return getArray[1]
}

console.log(getSecondNumber(newArray));