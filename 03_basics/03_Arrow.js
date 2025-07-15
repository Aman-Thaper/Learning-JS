const user = {
    username : "Aman",
    price : 299,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website `);
        console.log(this);
    }
}

user.welcomeMessage()

user.username="Guddu"

user.welcomeMessage()

console.log(this);

// const company = function () {
//     let name = "aman"
//     console.log(this)     //provides a bunch of stuff
//     console.log(this.name); //empty
// }

const company = () => {
    let name = "aman"
    console.log(this);       //doesnt provide a bunch of stuff ,empty
    console.log(this.name); //empty
}

company()

const addTwoNumbers = (num1,num2)=>{
    return num1+num2
}

const addThreeNumbers = (num1,num2,num3)=> (num1+num2+num3)

let x = addTwoNumbers(2,3)
console.log(x)

console.log(addThreeNumbers(2,3,4));