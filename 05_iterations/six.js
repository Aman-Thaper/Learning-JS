const coding =  ["js","ruby","c++","python","java"]

const values = coding.forEach((item)=>{
    console.log(`I love ${item}`);
    return item
})

console.log(values); // undefined

const myNUMS = [1,2,3,4,5,6,7,8,9,10]

const newNUMS = myNUMS.filter((num)=>{
    return num>5
})

console.log(newNUMS); // [ 6, 7, 8, 9, 10 ]

const newNUMS2 = myNUMS.filter((num)=>num>8)

console.log(newNUMS2); // [ 9, 10 ]

const newNUMS3 = []

myNUMS.forEach((num)=>{
    if(num>5){
        newNUMS3.push(num)
    }
})

console.log(newNUMS3); // [ 6, 7, 8, 9, 10 ]