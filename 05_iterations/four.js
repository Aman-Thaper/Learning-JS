const myObject = {
    js : 'Javascript',
    cpp : 'C++',
    rb : 'Ruby',
    swift : 'swift by apple'
}

for (const key in myObject) {
    console.log(key);
    console.log(myObject[key]);
}

const programming = ['js','rb','py','java']

for (const key in programming) {
    console.log(key); // will return the index value 
    console.log(programming[key]); // will now return the proper values
}