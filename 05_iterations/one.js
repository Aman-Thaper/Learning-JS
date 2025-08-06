for (let index = 0; index <= 10; index++) {
    const element = index;
    console.log(element);
    
}


for (let i = 0; i <= 5 ; i++) {
    console.log(`Outer loop : ${i}`)
    for (let j = 0; j <=5 ; j++) {
        console.log(`Outer loop : ${i} and Inner loop : ${j} ` )
        if (j === 4) {
            console.log("Hehe lucky number 4");
        }
    }
    
}

let myArray = ["ironman","captain america","thor"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);    
}

// break and continue

for (let index = 1; index <= 20; index++) {
    if (index==5) {
        console.log("5 detected");
        continue
        //break
    }
    console.log(`Value of i is ${index}`);
}
