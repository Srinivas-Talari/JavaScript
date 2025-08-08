// Closures [if we have access of variables of outer function in inner function, even after outer function exceuted,then that is called closure]

// Example-1

function outerFunc () {
    
    let a = 'Javascript';
    
    console.log(a);
    
    function innerFunc (lang) {
        
        console.log(`I am learning ${a} and ${lang}`) // here still we can access variables from outer function
    }
    
    innerFunc("Python")
}

// outerFunc()

// // Example-2

function createCounter () {

    let count = 0;

    return function () {

        ++count;
        console.log(count)
    }
}

const counterResult = createCounter(); // Outer function calling only once

// But if we call 'counterResult' again and again the count changes, because we are actually calling inner function
counterResult() //  1
counterResult() //  2
counterResult() //  3


// Spread Opeartor [will spread  elements in array as an individual elements]

let arr1 = [23,12,90,56,78];

let arr2 = [23,12,90,56,78,100];

console.log(Math.max(...arr1))// 90

console.log([...arr1,...arr2]) //[23,12,90,56,78,23,12,90,56,78,100]

// Rest Parameter [will rest the individual elements as an array]

function result (...arr) {
    
    let sum = 0;
    
    for(let i of arr) {
        
        sum +=i
    }
    console.log(sum);
}

result(23,12,90,56,78,100)


// Destructuring [Accessing the any elements in array or object individually(New way), accessing them through index is old way]

let arr3 = [23,12,90,56,78,100];

let [x,y,i,,s,t] = arr3;

console.log(i)

// // Object Destructuring

let obj = {

    name : 'XYZ',
    height : 120,
    place : {

        place1 : 'ABC',
        place2 : 'KLM',
        place3 : 'GHI'
    }
}

const {name,place : {place2,place3}} = obj;

console.log(place3);

// Curring [Currying is the process of transforming a function with multiple arguments into a sequence of functions, each taking one argument at a time] [Fix some args now, others later]

function result (a) {

    return function (b) {
        
        return function (c) {
            
            return a * b * c
        }
    };
}
const fResult = result(23)(89)(100);

console.log(fResult);

// Prototypes [Every JS object has prototype which will inherit the props and methods to other objects]

// Example-1

let obj1 = {

    name : 'JavaScript',
    getLearn : function() {

        return(`I am learning ${this.name}`)
    }
}

let obj2 = {

    name : 'Python'
}

obj2.__proto__ = obj1; // we created obj1 as prototype

//  student → person → Object.prototype → null [This is called prototype-chain]
console.log(obj1.getLearn());
console.log(obj2.getLearn());

// Example-2

function User (name) { // constructor function

    this.name = name // no method of learn
} 

User.prototype.learn = function() { // but we made it here and attached to User constructer function

    console.log(`I learn ${this.name}`);
}

const r = new User('JS');
const m = new User('Python');

r.learn() // i learn JS
m.learn() // i learn Python

//   Math function & methods

let a1 = 34;
let b1 = -45;
let c1 = 9.5;
let d1 = 9.4;
let e1 = 10.1;

console.log(Math.random() * 10) // gives you random number from 10(10 excluded)
console.log(Math.ceil(e1)); // 11
console.log(Math.ceil(c1)) // 10
console.log(Math.floor(d1)) // 9
console.log(Math.abs(b1)) // 45 remove -ve sign
console.log(Math.trunc(e1)) // remove float value
console.log(Math.pow(a1,b1)) // 1.211849625841612e-69
console.log(Math.sin(a1)) // 0.5290826861200238
console.log(Math.cos(b1)) // 0.5253219888177297
console.log(Math.tan(c1)) // 0.07536423875739406
console.log(Math.sqrt(a1)) // 5.830951894845301
console.log(Math.cbrt(d1)) // 2.11045429449015
console.log(Math.log(e1)) // 2.312535423847214
console.log(Math.max(34,90,23)) // 90
console.log(Math.min(34,90,23)) // 23
console.log(Math.sign(a1)) // 1
console.log(Math.sign(b1)) // -1
console.log(Math.sign(f1)) // 0


// Imports and exports

import {l,n,add} from  './app.js'; //[index.js] importing all statments from app.js file

//  [app.js] exporting all statements to app.js file
// Exporting can be done in 2 ways

//individual  export

export let f = 10;
export let g = 20;
export function add (c,d) {

    console.log(c + d)
}
// Export all at once

 let l = 10;
 let n = 20;
 function add (c,d) {

    console.log(c + d)
}
export  {l,n,add}

// Date

let time = new Date();
let hours = time.getHours() // shows hours
let minutes = time.getMinutes() // shows minutes
let seconds = time.getSeconds() // shows seconds
console.log(`${hours} : ${minutes} : ${seconds}`)

// Event Bubbling(Default) and Event Capturing(add 3rd parameter as'false')

//  Event Bubbling : target element to top level
// Event Capturing : top Level to target element

let div = document.getElementById('div');
let btn = document.getElementById('btn')
div.addEventListener('click',()=>{

    alert('Div clicked')
});

btn.addEventListener('click',()=>{

    alert("Button clicked"); // if i click the button, the div also gets displayed automatically after button displayed[i.e first target element then above level elements[i.e div] triggers], this process is called event bubbling[by default parameter is 'false']

    event.stopPropagation(); // this will stop exceuting above event handlers[i.e div], only target element[i.e button]
})

// Event Capturing

div.addEventListener('click',()=>{

    alert('Div clicked')
},true); //  add true paramter

btn.addEventListener('click',()=>{

    alert("Button clicked"); // if i click the button, the div gets displayed before the targeted element[i.e button] [i.e first top level elements triggers], this process is called event capturing[Add 'true' parameter]
    
})

// localStorage

//Store the value permanently even after session is closed or finished
// Others tabs and windows can access this values
// limit :- 5-10MB

localStorage.setItem("name","Javascript");  // set the item
console.log(localStorage.getItem('name')); // get the item
console.log(localStorage.length) // length of the items
localStorage.removeItem('place') // removes the item from the local storage items list

// sessionStorage

//Store the value until session is closed, once closed the items removed from the session storage
// Onlu current tab or window can have access for this items
//limit :- 5-10MB

sessionStorage.setItem("name","Javascript");  // set the item
sessionStorage.setItem("place","ABC");  // set the item
console.log(sessionStorage.getItem('name')); // get the item
console.log(sessionStorage.length) // length of the items
sessionStorage.removeItem('place') // removes the item from the local storage items list

// Shallow and deep copy

// Shallow copy [Only top-level props are copied[i.e values are equal but reference is different], but nested objects are reference to objA]

let objA = {

    name : 'Javascript',
    developed : 'Brendan Eich',
    address: { city: "Hyderabad"}

}

let objB = Object.assign({},objA);

console.log(objA === objB) // Because both are not pointing to same obj and stored in different locations;

console.log(objA.name === objB.name) // true, the values are same

objB.name = 'python'; // only in objB value will changed
objB.address.city = 'Andhra Pradesh' // because it is copied through reference, so in both objects value will be changed
console.log(objA) //{name : 'Javascript',developed : 'Brendan Eich',address:{city: "Andhra Pradesh" }}
console.log(objB); // {name : 'python',developed : 'Brendan Eich',address:{city: "Andhra Pradesh" }}
console.log(objA.name === objB.name) // false, the values are different

// Deep copy
let objC = {   name : 'Javascript',
    developed : 'Brendan Eich',
    address: { city: "Hyderabad"}
        }

let objD = JSON.parse(JSON.stringify(objC));

console.log(objC === objD);

// Pass by values & Pass by Reference

// Primitive values are compared by their values;
// Objects, arrays are compared by their references;

// optional chaining(?.)

const objE = {name :'Javascript',
              address : {country:'USA'},
              getAuthor :function() {console.log('Brendan Eich')}
            };

console.log(objE.name) // Javascript
console.log(objE.address.country) // USA
// console.log(objE.developed.year)// Uncaught TypeError
// instead of throwing error we can make it undefined for safe navigation instead of blocking
console.log(objE?.developed?.year) // undefined
console.log(objE?.year) // undefined
objE.getAuthor() // Brendan Eich
console.log(objE?.getStandardscript?.()); // undefined [when we try to access function which is not there in an object instead of throwing errors which create blockage, just simply give undefined]

// Nullish coalescing (??)

// If the left value is undefined or null automatically it returns the right value
let A = 'Python';

console.log(undefined ?? A); // python

console.log(null ?? 'Javascript') // Javascript

// Object.freeze

let objF = {name : 'Javascript', Author : 'Brendan Eich' , developedIn : 1995};

Object.freeze(objF);

objF.name = 'python'; //  prevents the changing existing value
objF.country = 'USA'; // prevents adding new value
delete objF["Author"]; // prevents deleting existing values
let a = objF.developedIn; // we can access them and assign to other variables
console.log(a) // 1995
console.log(objF) //{name : 'Javascript', Author : 'Brendan Eich' , developedIn : 1995};

// we can assign entire obj to another variable, even though we can't perform any CUD operations from copy

// Object.seal

let objG = {name : 'Javascript', Author : 'Brendan Eich' , developedIn : 1995};

Object.seal(objG);

objG.name = 'python'; //  allows only  changing existing value
objG.country = 'USA'; // prevents adding new value
delete objG["Author"]; // prevents deleting existing values
let b = objG.developedIn; // we can access them and assign to other variables
console.log(b) // 1995
console.log(objG) //{name : 'Javascript', Author : 'Brendan Eich' , developedIn : 1995};

// we can assign entire obj to another variable, even though we can't perform any CD operations from copy


// Set 

// const fruits = new Set(['apple','mango','grapes']); // create a set
// console.log(fruits,typeof(fruits)) // { 'apple', 'mango', 'grapes' } object
// console.log(fruits instanceof (Set)) // true
// clear()	Removes all the elements from a Map
//console.log(fruits.has('apple')) //true
// console.log(fruits.size) // 3


// const nums = new Set();

// nums.add(1);
// nums.add(2);
// nums.add(1);
// console.log(nums) // { 1, 2 } if we add same values, it will take only first value

// Map 

const fruits = new  Map ([
    
    ['apple',500],
    ['grapes',600],
    ['banana',700],
    ['guava',800],
    ]);

console.log(fruits.size)//  4
console.log(fruits.has('mango')) // false
console.log(fruits.get('grapes')) // 600
fruits.delete('banana'); // { 'apple' => 500, 'grapes' => 600, 'guava' => 800 } [banana deleted]
fruits.set('watermelon',1000); // { 'apple' => 500, 'grapes' => 600, 'guava' => 800,   'watermelon' => 1000}[new item added]
console.log(fruits);
console.log(fruits.keys()) // { 'apple', 'grapes', 'guava', 'watermelon' }
console.log(fruits.values()) //  {500, 600, 800, 1000 }

let z = fruits.entries();
for( i of z) {
    
    console.log(i) // [ 'apple', 500 ][ 'grapes', 600 ][ 'guava', 800 ][ 'watermelon', 1000 ]}
}
console.log(fruits.clear()) // clear all elements in fruits

// Set
const Fruits = new Set(['apple','mango','grapes']);

console.log(Fruits.size) // 3
console.log(Fruits.has('mango')) // true
Fruits.add('mango') // if we add same values it will take first value only
Fruits.add('orange'); // { 'apple', 'mango', 'grapes', 'orange' }

console.log(Fruits.values()) // { 'apple', 'mango', 'grapes', 'orange' }

// A Set has no keys, so keys() returns the same as values().

let d = Fruits.entries();

for(i of d){
    
    console.log(i); // [ 'apple', 'apple' ][ 'mango', 'mango' ][ 'grapes', 'grapes' ][ 'orange', 'orange' ]}
}
console.log(fruits.clear()) // clear all elements in fruits

// Set [Logic Methods]

const S = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

console.log(S.union(B)) // { 'a', 'b', 'c', 'd' }
console.log(S.intersection(B)) //{ 'b', 'c' }
console.log(S.difference(B)) // { 'a' } remove common elements and return remaining elements in set A
console.log(S.isDisjointFrom(B)) // false [return true if no elements are of set A are not present in set B]
console.log(S.isSubsetOf(B)) // false [return true if all elements in set A are present in set B]
console.log(S.isSupersetOf(B)) // false [return true if all elements in set B  are present in set A]
console.log(S.symmetricDifference(B)) // { 'a', 'd' } remove common elements and return remaining elements in both sets;

// JSON → JavaScript Object Notation

// A light-weight way to transfer and  store the data

// Rules:[name/value pair, keys should be in "",Values → string, number, boolean, null, array, object,No functions allowed,no comma at last];

let data = {
  "name": "John",
  "age": 30,
  "isStudent": false,
  "skills": ["JS", "HTML", "CSS"],
  "address": { "city": "Hyderabad", "pin": 500001 }
}

// JSON.stringify() → Object → JSON string

let Obj = { name: "John", age: 25 };
let jsonString = JSON.stringify(Obj);
console.log(jsonString); // '{"name":"John","age":25}'
console.log(typeof jsonString); // string


// JSON.parse() → JSON string → Object

let str = '{"name":"John","age":25}';
let jsObj = JSON.parse(str);
console.log(jsObj.name); // John
console.log(typeof jsObj); // object


// JSON → universal data exchange format (language independent)









