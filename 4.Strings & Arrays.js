//Strings [A set of chars is called string]

let a = 'Hello world';
let b = 'AI'

a[0] // with index values we access the chars
a[1] = 't' // we can't change the value;
console.log(a) // Hello world
console.log(a.length) // 11
console.log(a[8]) // r
console.log(a.indexOf('r')) // 8
console.log(a.search('r')) // 8
console.log(a.toUpperCase()); // HELLO WORLD
console.log(a.toLowerCase()); // converts into lower case
console.log(a.charAt(6)) // w
console.log(a.charCodeAt(6)) // 119
console.log(a.split('')) // ['H', 'e', 'l', 'l','o', ' ', 'w', 'o','r', 'l', 'd']
console.log(a.trim())   //remove spaces in start trimStart() and end trimEnd()
console.log(a.padStart(18,0)) // 0000000Hello world
console.log(a.padEnd(20,1)) // Hello world111111111
console.log(a.concat(b)) // Hello worldAI
console.log(a.includes('z')) // false
console.log(b.includes('I')) // true
console.log(a.startsWith('H')) // true
console.log(b.endsWith('A')) // false
console.log(a.repeat(4)) //Hello worldHello worldHello worldHello world
console.log(a.match('l')) // 2
console.log(a.valueOf()) // Hello world

// String Interpolation (Making expression integrate inside the strings)

let name = 'Javascript';
let author = 'Brendan Eich';
let year = 1995;

console.log(`${name} developed by ${author} in ${year}`) // `` let you add '' and "" in a string

//**

// Both slice and substring are same, but slice accepts negitive values but substring treats as a 0

let c = 'Helloworld';
console.log(a.slice(2,7)); // first value is starting and second value is ending(not included)// llowo 
console.log(c.substring(2,7)) // llowo  
console.log(c.slice(-7,-2)) // lowor
console.log(c.slice(7)) // rld
console.log(c.substring(7)) // rld
console.log(c.substr(2,7)) //lloworl
console.log(c.substr(5,10)) //world

// Checkout remaining str methods in W3 Schools

// Arrays

// Holding multiple values in one container of any data types

let arr = [1,2,3,4,'AI','ML',true];
let a = [1,2,3,4,'AI','ML',true];
arr[0] // access every ele in arr by index
arr[3] = 'ABC' // we can change the value in array
console.log(arr) // [1,2,3,'ABC,'AI','ML',true]
arr.push(100) //[1,2,3,4,'AI', 'ML',true, 100] return array
console.log(arr.pop()) // last ele removed and return popped ele
arr.unshift('DSA') // [ 'srinivas', 1, 2, 3, 4, 'AI', 'ML', true ]
console.log(arr.shift()) //  first ele removed and returned shifted ele
console.log(arr.join('-')) // 1-2-3-4-AI-ML-true
console.log(arr.concat(a)) // [1,2,3,4,'AI','ML',true,1,2,3,4,'AI','ML',true]


let d = [23,563,233,12,233,8,67]; 
let z = d.IndexOf(233) //  2
let x = d.lastIndexOf(233) //  4
let e = d.entries(); // entries

for(let i of e) {
    
    console.log(i) //[ 0, 23 ][ 1, 563 ][ 2, 233 ][ 3, 12 ][ 4, 8 ][ 5, 67 ]}

}

let f = d.find(findEle);

function findEle (e) {

    return e > 200
}

console.log(f) // 563

let g = d.findIndex(findEle) // 1
let h = d.findLast(findEle) // 233
let i = d.findLastIndex(findEle) // 2

// Sort

function ascending (a,b) {

    return a - b // b-a for descending order
}

let s = [23,563,233,12,233,8,67]; 

let t = s.sort(ascending);

console.log(t)

// Map, filter, reduce

let r = [23,563,233,12,233,8,67];

let v = r.map((e)=>{  // callback function

    return e + 1
})

console.log(v) // [24, 564, 234, 13,234,9,68]  // returns a new function

let p = [23,563,233,12,233,8,67];

let l = p.filter((e)=>{

    return e % 2 == 0
})

console.log(l) // [12,8] // return a new function

let a = [23,563,233,12,233,8,67];

let j = a.reduce((e,f)=>{

    return e + f
})

console.log(j) // 1139 return a new function

// Checkout remaining methods in W3 schools




