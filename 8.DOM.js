// Document Object Model (When the website loads the elements in the page form as a tree-like strcuture which we can do CRUD operations by accessing the elements and make website dynamic)

document // shows whole document
document.head // shows head section
document.body // shows body section
document.documentElement // shows whole content between html tags
document.childNodes // [<!DOCTYPE html>, html]

let div = document.getElementById('div');
let h1 = document.getElementById('h1');
let h2 = document.getElementById('h2');
let p = document.getElementById('p');
console.log(div.childNodes) // [text, h1, text, p, text, h2, text]
console.log(div.childNodes.length) // 7 
console.log(div.firstChild); // text (Because the space also treated as a element)
console.log(div.lastChild); // text (Because the space also treated as a element)
console.log(div.firstElementChild) // <h1>Heading-1</h1> (first element Child)
console.log(div.lastElementChild) //  <h2>I am heading-2</h2>(last element Child)
console.log(div.children) // [h1, p, h2]
console.log(div.children.length) // 3
console.log(div.childNodes[0] === div.firstChild) // true
console.log(div.childNodes[div.childNodes.length-1] === div.lastChild) // true
console.log(h1.nextSibling) // text
console.log(h2.previousSibling) // text
console.log(h1.nextElementSibling) // p
console.log(h2.previousElementSibling) // p
console.log(h1.previousElementSibling) // null
console.log(h2.nextElementSibling) // null
console.log(h1.parentElement) // div#div
console.log(h2.parentElement) // div#div
console.log(h1.parentNode) // div#div
console.log(h1.nodeName) // H1
console.log(p.nodeName) // P
console.log(p.nodeValue) // null
console.log(h1.nodeType) // 1
console.log(document.DOCUMENT_NODE) // 9
console.log(h1.textContent = 'Hi i am Javascript') // inserts content in between tags
// hidden property used to hide the complete element

// Table navigation

let table = document.body.firstElementChild.lastElementChild;

console.log(table.rows) // [tr, tr, tr, tr]
console.log(table.caption) //<caption>Bio-Data</caption>
console.log(table.tHead) // shows head section of table
console.log(table.tBodies) // collection of <tBody> Elements
console.log(tbody.rows) // collection of <tr> elements
console.log(table.tFoot) // reference to <Foot>
console.log(tr.cells) // collection of td and th 
console.log(tr.sectionRowIndex) // index of tr  inside enclosing element
console.log(tr.rowIndex) // row number starting from 0
console.log(tr.cellIndex) // no of cells inside enclosing <tr>

//Searching the DOM

document.getElementById('h1').style.color = 'red' // by id selector we access ele
document.getElementsByClassName('class')[index] // by class selector we access ele according to the index
document.getElementsByTagName(p)[index] // by tagname we access ele according to the index
document.querySelector('.class') // selects the first element
document.querySelectorAll('#id') // selects the all the elemets on the name of  given selectors

// Mactches, closests, contains

let span = document.getElementById('span');

console.log(h1.matches('#h1')) // Checks if the current element matches the specified CSS selector.
console.log(span.closest('#h1')); // h1#h1
console.log(span.closest('#div')); //div#div
console.log(div.contains(h2)) // true
console.log(h2.contains(div)) // false
console.log(h1.contains(span)) // true

// innerHTML, outerHTML

console.log(h2.innerHTML) // will show content inside tags
console.log(h2.outerHTML) // will show complete element(tags + attributes + content)

//Attributes

h1.setAttribute('class','classHeading'); // sets the attribute for an ele
console.log(h1.getAttribute('id') )// gets the attribute from an ele
console.log(h1.attributes) // shows all the attributes
console.log(h1.hasAttributes()) // true
h1.removeAttribute('class') // remove the attribute from the ele
console.log(h1.dataset) // {head: 'headingDataAttribute'} (custom attributes)

// Insertion Methods

let h3 = document.createElement('h3');

let h3Text = document.createTextNode('I am Heading-3');

h3.append(h3Text);

div.append(h3) //  it adds at the end
div.prepend(h3) // it adds at the first
div.before(h3) // it adds before div
div.after(h3) // it adds after div

let h4 = document.createElement('h4');
h4.textContent = 'i am h4';
h4.className = 'h4';

// we create a element seperately and pass the element [ele.insertAdjacentElement]

div.insertAdjacentElement('beforeend',h4) // it adds just before end of the div
div.insertAdjacentElement('beforebegin',h4) // it adds before the div element
div.insertAdjacentElement('afterbegin',h4) // it adds just after the start of div
div.insertAdjacentElement('afterend',h4) // it adds after the end of the div tag

// here we create element, inside as a parameter [ele.insertAdjacentHTML]
div.insertAdjacentHTML('beforeend',' <h4 class="h4">i am h4</h4>') // it adds just before end of the div
div.insertAdjacentHTML('beforebegin',' <h4 class="h4">i am h4</h4>') // it adds before the div element
div.insertAdjacentHTML('afterbegin',' <h4 class="h4">i am h4</h4>') // it adds just after the start of div
div.insertAdjacentHTML('afterend',' <h4 class="h4">i am h4</h4>') // it adds after the end of the div tag


// changing HTML classes

h1.classList.add('heading-1') // we change the class from classList;
h1.classList.remove('heading-1') // remove the class from classList;
h1.classList.toggle('heading-1') // adds class if it doesn't exist , otherwise removes it
console.log(h1.classList) // to check the classes list
console.log(h1.classList.contains('heading-1')) // true

// Check the browser events (mouse,keyborad) eg:- onclick,ondblclick

// Event Listeners :- 

// Add Event Listener

h1.addEventListener('click',()=>{

    h1.classList.add('heading-1')
})

// Remove event listener

h1.removeEventListener('click',()=>{

    h1.classList.add('heading-1')
})





