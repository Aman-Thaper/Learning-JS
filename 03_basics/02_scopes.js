let a = 300

if (true) {
    let a = 10 //If i just write a=10 then it will also change the global value as it is initialised globally
    console.log(`INNER VALUE OF a : ${a}`);
}

console.log(`OUTER VALUE OF a : ${a}`);

let val = 5

if (true)
{
    val=val+2
}

console.log(val);



console.log(addone(5)); //no error here

function addone(num) {
    return num+1
}


addTwo(5) // error here because of difference in function declaration
const addTwo = function(num) {
    return num+2
}