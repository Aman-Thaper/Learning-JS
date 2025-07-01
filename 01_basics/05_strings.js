const name = "Aman"
const age = 21


// ``->used for string formatting/ interpolation, along with ${variable} syntax

console.log(`Hello my name is ${name} and my age is ${age}`);

const state = new String('Maharashtra')
console.log(state[0]);

console.log(state.substring(0,11))

const v = new String("       A man    ")
console.log(v.trim());

console.log(state.replace('Mah','Dug'));
console.log(state.includes('rashtra'))

let arr = new Array()
for (let i = 0; i < state.length; i++) {
    arr[i]=state[i];
}

console.log(arr);
console.log(state.split(""));