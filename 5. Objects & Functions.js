// Objects{which holds the values in form of name and value}

const a = {

    name : 'JS',
    developed : 'Brendan Eich',
    in : 1995
}

console.log(a) // {name : 'JS',developed : 'Brendan Eich',in : 1995}
console.log(a.name) // or a[name] to access the elements in object
a.name = 'python' // we can change the value

const b = a; //pass by reference
b.name = 'python';
console.log(a) //{ name: 'python', developed: 'Brendan Eich', in: 1995 }
console.log(b) //{ name: 'python', developed: 'Brendan Eich', in: 1995 }
 
// Because both above objects pointing towards one object so if one changes the others get affected

console.log(Object.keys(a)) // display all keys
console.log(Object.values(a)) // display all values

// Objects values can be accessed by loops also..

// Functions (Exceuting the piece of code whenever we call the function)

// Tradional function

function result (a,b) { // here a,b are called parameters

    console.log('Hello world', (a + b))
}

result(56,89); // Hello world 145  (56,89 are arguments)

function result (a,b=90) { // b is a default value

    console.log(a * b)
}
result(78)

// function expression (assigning a func to a variable)

var a = function() {

        console.log('Hello world')
}
a() // Hello world

// Arrow function (best alternate way for tradtional func)

const c = (a,b)=> {console.log(a + b)};
c(45,78) // 123

// self-invoking function (func call itself after declaring)

(function result () {

    console.log('Hello world')
})()