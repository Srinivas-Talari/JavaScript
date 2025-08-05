// Variables :- It acts as a container by storing  the value  inside it

// Var(ES5) , Let (ES6), Const(ES6)

// 1. var

var a; // Declaration

a = 20; // Initialization

// a is called as a Identifier and '=' is  assignment operator

// Scope

// Block scope :-

var b = 30;

if(true) {

    var b = 40;

    console.log(b);  // Output:- 40
}

    console.log(b);  // Output:- 40

// The above result says var doesn't have a block 

var c = 10;

// Functional Scope :- 

function result () {

        var c = 20;

        console.log(c);
}

console.log(c);  // Output:- 10

result(); // Output:- 20

// The above result says that var has a functional scope

// 2.let

// Important points :-

//                    .let has a block scope;
//                    .With let the value can be re-initialize but not re-declared;   
//    

let d = 20;

// let d = 40; Re-declaration is not possible

d = 50; // Re-initialization is possible;

if(true) {

    let d = 60;

    console.log('Inside',d)  // Output :- Inside 60
}

    console.log('Outside',d) // Inside :- Outiside 50;

let a = 12;

function result () {
    
        let a = 20;
        
        console.log('Inside',a);
}

console.log('Outside',a); //Output :- Outside 12


result(); // Output :- Inside 20

// In the above function there is a block inside the function so let has a block scope

// 3. const

// Important points :-

//                    .const has a block scope;
//                    .With let the value can't be re-initialize and re-declared;   
//                    .While declaring only intialization should happen;

const f = 30;

// f = 40 Not possible we have to initialize the value while declaring;

// const f = 90 throws error because re-declaration can't be done just like in let

// f = 80  re-initialization is not possible with const;

console.log(f);


// Hoisting

// Hoisting is a JS default behaviour which makes the declarations move at the top of the current scope

a = 20;

console.log(a);

var a;

// In the above case the 'var a' declaration moves at the top current scope...

// In let and const case it throws an error 'Cannot access 'a' before initialization'

result();

function result() { // function hoisted without any throwing error but function expression not
    
         a = 30;
        
        console.log(a);

        var a;  // possible

        // let a; and const a; throws an error 'Cannot access 'a' before initialization'
}

// function expression and arrow functions are  not hoisted

    a() // calling function expression before it is declared and it throws an error 'a is not a function'

    var a = (()=>{console.log('Will this hoisted?')})
















