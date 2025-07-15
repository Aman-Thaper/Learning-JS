const User = new Object();    // Creating an object using the Object constructor also singleton

const Jsuser = 
{
    email : 'Aman@some.com',
    fullname : 
    {
        userfullname : 
        {
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

const Users = 
[
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

console.log(Users[3].username); // Accessing property of an object in an array

console.log(Object.entries(Users[0]))

const course = {
    
    courseName: "JavaScript Basics",
    
    duration: "4 weeks",
    
    instructor: 
    {
        name: "John Doe",
        experience: "5 years"
    },
    
    topics: ["Variables", "Functions", "Objects", "Arrays"]

};

const {courseName : cname} = course; // Destructuring assignment

course.courseName = "Advanced JavaScript"; // Modifying property

//console.log(courseName); //Doesnt get modified
console.log(cname);

const {instructor: {name: instructorName}} = course; // Nested destructuring

console.log(instructorName); // Accessing nested property