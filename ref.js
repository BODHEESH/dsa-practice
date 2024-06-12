//DOM 

//BOM


// WAYS TO ACESS DOM 1.byID (unique and best method) 2.byClassname 3. byCssSelectors (querySelectors) 4. byName 5.byTags

// what all changes js can do with dom  ?

// it can change remove or create a HTML element
// it can change CSS props.
// it can change element atributes and  create events.

// querySelectors

// js working and execution of code 

// hoisting 

// scope scopechain lexical environment 

// shadowing


// for in and for of loops

// block is used to for multiple statements which consider as a single statement.

// closure 

// first-class Function

// A programming language is said to have First-class functions when functions in that language are treated like any other variable.
// For example, in such a language, a function can be passed as an argument to other functions, 
//can be returned by another function and can be assigned as a value to a variable.

// call back function

// What is event listener in JS?
//An event listener is a procedure in JavaScript that waits for an event to occur. 
//The simple example of an event is a user clicking the mouse or pressing a key on the keyboard.

// when an event is over we must use garbage collector and remove that pariticular eventlistener, because it consumes more memory
// consumption.

// MutationObserver is a Web API provided by modern browsers for detecting changes in the DOM.
// With this API one can listen to newly added or removed nodes, attribute changes or changes in the text content of text nodes.


// ignition interpretor of v8
// turbofan compiler of v8

// js engine working

// mark and sweep algorithm

// trust issue with setTimeout

// prototype and prototype chain


//Every object in JavaScript has a built-in property, which is called its prototype. 
//The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. 
//The chain ends when we reach a prototype that has null for its own prototype.

//Note: The property of an object that points to its prototype is not called prototype.
// Its name is not standard, but in practice all browsers use __proto__.
// The standard way to access an object's prototype is the Object.getPrototypeOf() method.

const myDate = new Date();
let object = myDate;

do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object);

// Date.prototype
// Object { }
// null

// event delegation
// event capturing and event bubbling

// call apply and bind 