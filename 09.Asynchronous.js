//  Basically JS is a single-threaded(i.e tasks will be exceuted synchronously(one-by-one)).
//  Due to that sometimes if there are some tasks which takes lot of time will ruin the UI and it takes long time to load the web pages(tasks like API's. network requests, files uploadings etc..). for that sake there is a concept called asynchronous programming which makes easier to perform these tasks without blocking the flow by running the those time taking tasks in different flow and gets result later(i.e after certain time)

// Asynchronous Programming

// Callbacks (One function takes another function as an argument and exceutes only after main function exceution)

// Example-1

function myGreet (name) {

    console.log(`I am learning ${name}`); // I am learning Javascript
}

function myName (callBack) {

    let name = 'Javascript';
    callBack(name);
}
myName(myGreet) // myName func takes myGreet func passed as a argument

// Example-2

function result (result) {
    
    console.log(`The final result is ${result}`);
}

function values (a,b,callBack) {
    
   setTimeout(()=>{
       
        let c = a ** b;
    
        callBack(c)
        
   },3000) // Only after 3 seconds only the result function will exceute because it is passed an argument to main function so it will exceutes after main function exceution (even though callback func is not  time taking task)
}

values(23,4,result) // output :- 'The final result is 279841' after 3 seconds

// Callback Hell

// This create a lot of clumsy while developing so dont prefer this method in asynchronous programming

function task1 (callBack) {
    
    console.log('Task1 is completed');
    console.log('Task2 is started running...');
    callBack()
}

function task2 (callBack) {
    
    console.log('Task2 is completed...');
    console.log('Task3 is started running...');
    callBack()
}

function task3 (callBack) {
    
    console.log('Task3 is completed');
    console.log('Task4 is started running...');
    callBack()
}

function task4 (callBack) {
    
    console.log('Task4 is completed');
    console.log('Task5 is started running...');
    callBack()
}
function task5 (callBack) {
    
    console.log('Task5 is completed');
}

task1(()=>{ // This is how callBack hell looks like
    task2(()=>{
        task3(()=>{
            task4(()=>{
                task5();
                console.log('All tasks finished succesfully..!!')
            })
        })
    })
})

// Promises

// Example-1

let myPrmse1 = new Promise((resolve,reject)=>{
    
    setTimeout(()=>{
        
        resolve('Task1 is completed');
        // console.log('Task2 is started...')
    },4000)
    
})
let myPrmse2 = new Promise((resolve,reject)=>{
    
    setTimeout(()=>{
        
        resolve('Task2 is completed');
        // console.log('Task3 is started...')

    },4000)
    
})
let myPrmse3 = new Promise((resolve,reject)=>{
    
    setTimeout(()=>{
        
        resolve('Task3 is completed')
        // console.log('Task4 is started...')
    },4000)
    
})
let myPrmse4 = new Promise((resolve,reject)=>{
    
    setTimeout(()=>{
        
        resolve('Task4 is completed');
    },4000)
    
})

myPrmse1.then((result)=>{
    
    console.log(result);
    return myPrmse2;
}).then((result)=>{
    console.log(result);
    return myPrmse3;
}).then((result)=>{
    console.log(result)
    return myPrmse4;
}).then((result)=>{
    console.log(result);
    console.log("All tasks finished succesfully...")
})

// The above all tasks exceutes together after 4 sec

// Example-2

function myTask1 () {

    return new Promise((resolve, reject) => {
        
        setTimeout(()=>{

            resolve('Task1 is completed')
        },4000)
    })
}
function myTask2 () {

    return new Promise((resolve, reject) => {
        
        setTimeout(()=>{

            resolve('Task2 is completed')
        },4000)
    })
}
function myTask3 () {

    return new Promise((resolve, reject) => {

        if(false) {

            setTimeout(()=>{
    
                resolve('Task3 is completed')
            },4000)
        }
        reject('Task3 is rejected')
    })
}
function myTask4 () {

    return new Promise((resolve, reject) => {
        
        setTimeout(()=>{

            resolve('Task4 is completed')
        },4000)
    })
}

// chain them
// Every 4 sec each task will exceute
myTask1()
    .then((result)=>{
    console.log(result);
    console.log('Task2 started...');
    return myTask2();
}).then((result)=>{
    console.log(result);
    console.log('Task3 started...');
    return myTask3();
}).then((result)=>{
    console.log(result);
    console.log('Task4 started...');
    return myTask4();
}).then((result)=>{
    console.log(result);
    console.log('All tasks completed one-by-one...');
}).catch((error)=>{

    console.log(error)
}).finally(()=>{

    console.log('Tasks finished')
}) 

// Example-3 (what if promise rejects and how we catch the error)

function myTask1 () {

    return new Promise((resolve, reject) => {
        
        setTimeout(()=>{

            resolve('Task1 is completed')
        },4000)
    })
}
function myTask2 () {

    return new Promise((resolve, reject) => {
        
        setTimeout(()=>{

            resolve('Task2 is completed')
        },4000)
    })
}
function myTask3 () {

    return new Promise((resolve, reject) => {

        if(false) {

            setTimeout(()=>{
    
                resolve('Task3 is completed')
            },4000)
        }
        reject('Task3 is rejected')
    })
}
function myTask4 () {

    return new Promise((resolve, reject) => {
        
        setTimeout(()=>{

            resolve('Task4 is completed')
        },4000)
    })
}

// chain them
// Every 4 sec each task will exceute
myTask1()
    .then((result)=>{
    console.log(result);
    console.log('Task2 started...');
    return myTask2();
}).then((result)=>{
    console.log(result);
    console.log('Task3 started...');
    return myTask3().catch((error)=>{ //this block will catch the error, here only we do catch block so that it wont stop the further tasks
    console.log(error);
    return "Skipping Task3 and continuing"; //continue the chain by returning some value 

});
}).then((result)=>{
    console.log(result);
    console.log('Task4 started...');
    return myTask4();
}).then((result)=>{
    console.log(result);
    console.log('All tasks completed one-by-one...');
}).finally(()=>{
    console.log('Tasks finished') // no matter what happens this will exceute anyways
}) 

// Async & Await

// why not promises?
// [When many .then() chains are used, it becomes harder to read and maintain, especially with nested Promises (sometimes called "Promise hell").]

//why async and await?
// [async/await is syntactic sugar over Promises that makes your code look synchronous, improving readability and maintainability.]

// Example

async function myTask1 () {

    return new Promise((resolve, reject) => {
        
        setTimeout(()=>{

            resolve('Task1 is completed')
        },4000)
    })
}
async function myTask2 () {

    return new Promise((resolve, reject) => {
        
        setTimeout(()=>{

            resolve('Task2 is completed')
        },4000)
    })
}
async function myTask3 () {

    return new Promise((resolve, reject) => {

        if(false) {

            setTimeout(()=>{
    
                resolve('Task3 is completed')
            },4000)
        }
        reject('Task3 is rejected')
    })
}
async function myTask4 () {

    return new Promise((resolve, reject) => {
        
        setTimeout(()=>{

            resolve('Task4 is completed')
        },4000)
    })
}

async function runAllTasks () {
 
try {

    let result1 = await myTask1();

    console.log(result1);

    let result2 = await myTask1();

    console.log(result2)

    let result3 = await myTask1();

    console.log(result3)

    let result4 = await myTask1();

    console.log(result4);

    }

    finally {

    console.log('Operation Over...')
}

}

runAllTasks()
//in above code once Task 3 rejected, it will stop exceution by that task4 will not exceute

// Example-2 [this wont stop exceuting remaining tasks if any this rejected ]

async function myTask1 () {

    return new Promise((resolve, reject) => {
        
        setTimeout(()=>{

            resolve('Task1 is completed')
        },4000)
    })
}
async function myTask2 () {

    return new Promise((resolve, reject) => {
        
        setTimeout(()=>{

            resolve('Task2 is completed')
        },4000)
    })
}
async function myTask3 () {

    return new Promise((resolve, reject) => {

        if(false) {

            setTimeout(()=>{
    
                resolve('Task3 is completed')
            },4000)
        }
        reject('Task3 is rejected')
    })
}
async function myTask4 () {

    return new Promise((resolve, reject) => {
        
        setTimeout(()=>{

            resolve('Task4 is completed')
        },4000)
    })
}

try {

     let result1 = await myTask1();

        console.log(result1);
}catch(error) {

    console.log(error)
}
try {

     let result2 = await myTask2();

        console.log(result2);
}catch(error) {

    console.log(error)
}
try {

     let result3 = await myTask3();

        console.log(result3);
}catch(error) {

    console.log(error)
}
try {

     let result4 = await myTask4();

        console.log(result4);
}catch(error) {

    console.log(error)
}
finally {

    console.log("All tasks completed succesfully...")
}

// Promises methods

//  1. Promise.resolve(value)
// Creates a resolved promise with the given value.

Promise.resolve("Hello").then(console.log); // Output: Hello

//  2. Promise.reject(reason)
// Creates a rejected promise with the given reason.

Promise.reject("Error").catch(console.error); // Output: Error

//  3. Promise.all(iterable)
// Waits for all promises to be fulfilled. If any promise rejects, the whole thing rejects.

const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3]).then(console.log); // Output: [1, 2, 3]

//  4. Promise.allSettled(iterable)
// Waits for all promises to settle (either fulfilled or rejected) and returns their results.


const c1 = Promise.resolve(1);
const c2 = Promise.reject("Error");
const c3 = Promise.resolve(3);

Promise.allSettled([c1, c2, c3]).then(console.log);
/*
[
  { status: 'fulfilled', value: 1 },
  { status: 'rejected', reason: 'Error' },
  { status: 'fulfilled', value: 3 }
]
*/
// 5. Promise.race(iterable)
// Returns the result of the first promise to settle (fulfilled or rejected).

const t1 = new Promise(res => setTimeout(() => res("1st done"), 100));
const t2 = new Promise(res => setTimeout(() => res("2nd done"), 200));

Promise.race([t1, t2]).then(console.log); // Output: "1st done"

// 6. Promise.any(iterable)
// Returns the result of the first fulfilled promise. Ignores rejections. If all reject, it throws an AggregateError.

const s1 = Promise.reject("Fail 1");
const s2 = Promise.resolve("Success");
const s3 = Promise.reject("Fail 2");

Promise.any([s1, s2, s3]).then(console.log); // Output: "Success"



// Check Promise Methods with async and await

// 1. Promise.all()
// Runs multiple async tasks in parallel and waits for all to finish.

const results = await Promise.all([task1(), task2(), task3()]);


// 2. Promise.race()
// Returns result of the first settled promise (resolved or rejected).

const first = await Promise.race([task1(), task2()]);

//3. Promise.allSettled()
// Waits for all to finish — returns success & error status for each.

const allResults = await Promise.allSettled([task1(), task2(), task3()]);


//  4. Promise.any()
// Returns the first successfully resolved Promise (ignores rejections).

const result = await Promise.any([fail1(), success1(), fail2()]);


























