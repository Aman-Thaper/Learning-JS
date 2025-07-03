//singleton
//Constructor


//Object Literal
const mySymb = Symbol('Key1')
const person = {
    name: 'John',
    age: 30,
    [mySymb]: 'Symbol Value', //syntax to use as a symbol key 
}

console.log(person.name);
console.log(person['age']);
console.log(person)
console.log(person[mySymb]); // Accessing symbol property

person.name = 'Doe'; // Modifying property
console.log(person.name);

//Object.freeze(person); // Freezing the object

//person.name = 'Smith'; // This will not work because the object is frozen
//console.log(person.name); // Still 'Doe'

person.greeting = function() {
    console.log(`Hello, my name is ${this.name}`);
}

console.log(person.greeting()); // Calling the method