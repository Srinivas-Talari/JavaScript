// Data Types :- Type of data we are storing and using in the code;

// 2 Types of Data Types :- 

        //  1. Primitives
        //  2. Non-primitives
        
// Primitive Data Types

let a = 10 //number
let b = 'Artifical Intelligence' //string
let c = true // or false) boolean;
let d = null // null
let e = undefined; // undefined
let f = BigInt(12345678901234567890); //Bigint
let g = Symbol('!@#$%^&*('); // symbol


// Non-primitives Data Types

let h = [1,2,3,'AI','ML'] // Array and DataType is Object
let i = {name :'Js' ,developed :'Bredan Eich', in: 1995} // Object and DataType:Object
let j = new Date() // Date  and Datatype is Object;


// Important Points

// 1. Primitive values are pass by value;
a = 30;
b = a; // b gets a copy of the value 30
a = 40; // This does NOT change b
console.log(b); // Output :- 30 

// 2.Non-primitive values are pass by reference

let obj1 = { name: "Ken" };
let obj2 = obj1;

obj1.name  = 'kim';

console.log(obj1); // output :- kim
console.log(obj2); // output :- kim

// Now obj1 and obj2 both point to the same object in memory (reference).

// Changing obj2.name = "Shin" will also reflect in obj1.


// Operators

// 1.Arithmetic  Operators

let k = 34;

let l = 45;

console.log(k + l) // Addition
console.log(k - l) // subtraction
console.log(k * l) // multiplicaton
console.log(k / l) // division(Gives quotient)
console.log(k % l) //modulues(Gives remainder)
console.log(k ** l) //power
console.log(k++) // (++k) increment
console.log(l--) //(--l) decrement

// 2. Assignment Operators(Assigning a value to a variable)

console.log(k+=34) // similarly with all other operators

// 3. Comparison Operators

console.log(45 == 34) // eqauls to output :- false
console.log(45 != 34) // not equals to, Output :- true
console.log(45 < 56); // less than, Output :- true
console.log(45 > 399) // Greater than, Output :- false
console.log(45 >=56) // greater than or equals to : false
console.log(45 <=566) // less than or equals to : true
console.log(45 === 56) // equal value and equal type : false
console.log(45 === "56") // equal value and equal type : false
console.log(45 === 45) // equal value and equal type : true
console.log(45 !== 56) // not equal value or not equal type : true
console.log(45 !== "56") // not equal value or not equal type : true
console.log(45 !== 45) // not equal value or not equal type : false

// 4. Logical Operators

// And (&&) (if both values are true then it is true, else false)

// Or(||) (if any one of the condition between conditions is true, then it is true, else false )

// Not(!) (if not true means false, not false means true)


let m = 20;

let n = 90;

console.log(m > 12 && n > 34); // both true output : true

console.log(m < 12 && n > 34); // only one condition is true  output : false

console.log(m < 12 || n > 34); // only one condition is true  output : true

console.log(m < 12 || n == 34); // both conditions are false output : false

console.log(!true) // Output :- false

console.log(!false) // Output :- true

// 5. Typeof Operator (let's you know the type of data we are using)

let x = 20;

console.log(typeof x) //number;
console.log(typeof ('AI' + 56)) // string
console.log(typeof('AI' + 89)) // AI89
console.log(typeof('' + 56 + 89)) // string
console.log(89 + 'AI'); // 89AI
console.log(89 + 90 + 'AI') //179AI
console.log(89 + 90 + 'AI' + 456) //179AI456
console.log(('' + 56 + 89))//5689















