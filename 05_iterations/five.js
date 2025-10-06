const coding = ["js","ruby","c++","python","java"]

coding.forEach(function(lang){
    console.log(`I love ${lang}`)
})

coding.forEach((item)=>{
    console.log(`I love ${item}`)
})

function printMe(items) {
    console.log(`I love ${items}`)
}
coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

const myCoding =[
    {
        lang:"js",
        type:"frontend"
    },
    {
        lang:"ruby",
        type:"backend"
    },
    {
        lang:"python",
        type:"data science"
    }
]

myCoding.forEach((item)=>{
    console.log(`${item.lang} is used for ${item.type}`);
})