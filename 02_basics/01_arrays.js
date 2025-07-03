// array

const myarr = [0,1,2,3,4,true,"ABC",null,undefined,{}];

console.log(myarr[5]);


myarr.push(5)
console.log(myarr);
myarr.pop()
console.log(myarr);

console.log(myarr.includes(3));

//Slice and Splice

console.log(myarr)
console.log(myarr.slice(2, 5)); // returns a new array from index 2 to 4
console.log(myarr.splice(2, 5)); // removes elements from index 2 to 6 and returns them
console.log(myarr); // myarr is now modified after splice