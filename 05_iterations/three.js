//for of

const arr = [1,2,3,4,5]

for (const i of arr) {
    console.log(i);
}

// Maps

const map = new Map()

map.set('IN','India')
map.set('USA','United States of America')
map.set('PAK','Pakistan')
// map.set('IN','India')

console.log(map);

for (const [i,j] of map) {
    console.log(j);
}