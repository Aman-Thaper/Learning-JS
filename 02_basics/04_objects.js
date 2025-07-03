const User = new Object();    // Creating an object using the Object constructor also singleton

const Jsuser = 
{
    email : 'Aman@some.com',
    fullname : {
        userfullname : {
            firstname : 'Aman',
            lastname : 'Thaper'
        }
    },
    age : 21
}

console.log(Jsuser.fullname.userfullname.firstname)


const obj1 = { 1 : "a" , 2 : "b"}
const obj2 = { 3 : "c" , 4 : "d"}

obj3 = Object.assign({},obj1,obj2)  // {} acts as a empty target which is modified by combining sources
// or for simplicity we can use
obj3 = {...obj1,...obj2}
 
console.log(obj3);

const Users = [
    {
        userid : 123,
        username : "aman"
    },
    {
        userid : 124,
        username : "naman"
    },
    {
        userid : 125,
        username : "kevin"
    },
    {
        userid : 126,
        username : "Johar"
    },
]

console.log(Users[0].userid);

console.log(Object.entries(Users[0]))