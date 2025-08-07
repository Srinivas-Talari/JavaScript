// Conditional Statements

let s = 20;

if(s <= 13) {

    console.log('Yes'); // if condition is true exceute this block
}
else if(s % 2 == 0) {

        console.log('Yeah') // This block exceutes only if block condition is false
}
else {

    console.log('No') // if above all conditions are false then it will exceute this block
}

// Switch Case

// (instead of using many else if conditions, switch case is best if we have many conditions)

//Example

let a = 'saturday';

switch(a) {
    
    case 'sunday':
        result = 'Yes it is sunday';
        break
     case 'monday':
        result = 'Yes it is monday';
        break
     case 'tuesday':
        result = 'Yes it is tuesday';
        break
     case 'wednesday':
        result = 'Yes it is wednesday';
        break
     case 'thursday':
        result = 'Yes it is thursday';
        break
    case 'friday' :
        result = 'Yes it is friday';
        break
    default : 
            result = 'It is saturday';
}

console.log(result);

// Another example

let b = 'sunday';

switch(true) {
    
    case  b ="sunday":
        console.log('Yes it is sunday');
        break
     case b =  'monday':
        console.log('Yes it is monday');
        break
     case b = 'tuesday':
        console.log('Yes it is tuesday');
        break
     case b = 'wednesday':
        console.log('Yes it is wednesday');
        break
     case b = 'thursday':
        console.log('Yes it is thursday');
        break
    case  b = 'friday' :
        console.log('Yes it is friday');
        break
    default : 
        console.log(' it is Saturday');
}

// Loops

// for,for-in, for-of, for-each

// for loop

let arr1 = [1,2,3,4,5,6,7,8,9,10];

for (let i=0;i<=arr1.length-1;i++) {

    console.log(arr1[i]) // 1,2,3,4,5,6,7,8,9,10(in vertical way)
}

// for-in loop (gives keys of the array)

let arr2 = [1,2,3,4,5,6,7,8,9,10];

for(i in arr2) {

    console.log(i)
}

// for-of loop (gives values of the array)

let arr3 = [1,2,3,4,5,6,7,8,9,10];

for(i of arr3) {

    console.log(i)
}

// forEach(one more way to for loop)

arr3.forEach((e)=>{

    console.log(e)
})

let arr4 = [345,567,34545,456,789];

console.log(Array.isArray(arr4)) // true (Best way to check the array type)
console.log(arr4 instanceof Object); // true
console.log(arr4 instanceof Array); // true
console.log(typeof []) // object
console.log(typeof {}) // object


// While Loop

let i = 9;

while(i <= 20) {

    console.log('Hello world',i);
    i++;
}

// do while Loop (Atleast to run loop for one time)

let h = 51;

do {

    console.log('Hello world');
    h++;
}while(h<=50)







