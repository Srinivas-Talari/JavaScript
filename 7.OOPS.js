// Object-Oriented Programming (OOP) is a programming paradigm that organizes code around objects, which are instances of classes. It focuses on using real-world entities like data (attributes) and behaviors (methods) to design programs.

let obj1 = {name : 'js', 
            developer : 'Brendan Eich',
            in : 1995,
            getLang : function() {

                return(`Programming language is ${this.name}`)
            }
           }

// console.log(obj1 === Object.getPrototypeOf(obj1)) // "false", because object and prototypes are 2 different objects and takes two diff allocations

let obj2 = {

    name : 'python',
    developer :'Guido Van Rossum' // 
}

obj2.__proto__ = obj1; // creating prototype

console.log(obj2.name); // python
console.log(obj2.getLang()) // "Programming language is python"(Even though obj2 doesn't have a method it borrows from a obj1, its like inheriting from the parent to child)


// Classes & Objects

// Class : Class is a blue-print of the objects
//Object : Objects are the instances of the class

class Human {   // class

    constructor(name,weight,height) { // constructor method called automatically by 'new'
        this.name = name;
        this.weight = weight;
        this.height = height
    }
    getName() { // getters

        return `My name is ${this.name}`  // here 'this' represents Human
    }

    setSalary (salary) { // setters

        return ` Name:-${this.name}, Salary:-${salary}`
    }
}

const abc = new Human ('naresh',75,5.7);
console.log(abc.getName()) // My name is naresh
console.log(abc.setSalary(1000000)) //  Name:-naresh, Salary:-1000000

// Inheritance and extends keywords

class Teacher {

    constructor(name,id,height) {

            this.name = name;
            this.id = id;
            this.height = height;
    }

    getAttendance() {

        return `${this.name} has got attendance`
    }
}

class Student extends Teacher {  
    // Child class(Student) inherits props and methods from parent class(Teacher)
    // If we dont create a constructor, then it automatically takes constructor from parent class
    // If we create a constructor in child, use 'super()'  to call parent class constructor
    // if we have same method which has in parent class, the parent class methods gets overwritten if i call the child class method

    constructor(name,id,height,subjects){

        super(name,id,height)

        this.subjects = subjects
    }

    getSubjects() {

        return `${this.name} has to study ${this.subjects} subjects`
    }

    getAttendance() { // same method as in parent class and it is overriding

        return `ID:${this.id} has got attendance`
    }
        
}

let a = new Student('ABC',7456,7,10);
console.log(a.name) // 'ABC'
console.log(a.getAttendance()) // ABC has got attendance
console.log(a.subjects); // 10
console.log(a.getSubjects()) // ABC has to study 10 subjects
console.log(a.getAttendance()) // ID:7456 has got attendance


// super.method() (This makes do not override the parent method and along with the parent method if we want to add additonal functionality)

class Parent {
  greet() {
    console.log("Hi from parent");
  }
}

class Child extends Parent {

    greet() {

        super.greet(); // parent
        console.log('Hi from child ') // child
    }
}

const obj = new Child();
obj.greet();

// static(Makes props and methods belongs to only class but not for objects)

class MyClass {
  static myStaticProp = 'Hello'; 

  static myStaticMethod() {
    return 'This is static method';
  }

  instanceMethod() {
    return 'This is instance method';
  }
}

const d = new  MyClass();

console.log(d.myStaticProp); // undefined 
console.log(d.myStaticMethod); // undefined
console.log(d.instanceMethod());

// To access them

console.log(MyClass.myStaticProp); // Hello
console.log(MyClass.myStaticMethod()) // This is instance method


// Call(), Apply(), Bind()

// All 3 methods (call, apply, bind) are used to borrow a function from one object and execute it in the context of another object (i.e., set this manually).

const obj3 = {

    name : 'Python',
    author : 'Guido van Rossuum',
    getDetails : function (year) {

        return `${this.name} is developed by ${this.author} in ${year}`
    }
}

const obj4 = {name : 'JS',author : 'Brendan Eich'}

// this will call the method from obj3 to obj4 [arguments are taken in call() normally]

console.log(obj3.getDetails.call(obj4,1995))  // 'JS is developed by Brendan Eich in 1995'

// this will apply the method from obj3 to obj4 [arguments are taken in call() in form of array]


console.log(obj3.getDetails.apply(obj4,[1995])) // 'JS is developed by Brendan Eich in 1995'

// Bind(it binds the object and method together)
// Even though getDetails is from obj3, we're using it with obj4's data, because bind() permanently sets this to obj4.

let result = obj3.getDetails.bind(obj4,1995);
console.log(result()) // 'JS is developed by Brendan Eich in 1995'



