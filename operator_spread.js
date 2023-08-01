   //                                       Hoisting

// JavaScript Declarations are Hoisted
// In JavaScript, a variable can be declared after it has been used.
// In other words; a variable can be used before it has been declared.
// Example 1 gives the same result as Example 2:
// Example 1
// x = 5; // Assign 5 to x
// elem = document.getElementById("demo"); // Find an element
// elem.innerHTML = x;                     // Display x in the element
// var x; // Declare x
// Example 2
// var x; // Declare x
// x = 5; // Assign 5 to x

// elem = document.getElementById("demo"); // Find an element
// elem.innerHTML = x;                     // Display x in the element
// To understand this, you have to understand the term "hoisting".

// Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).
//===============================================================================================================================================================
// The let and const Keywords
// Variables defined with let and const are hoisted to the top of the block, but not initialized.
// Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.
// Using a let variable before it is declared will result in a ReferenceError.

// The variable is in a "temporal dead zone" from the start of the block until it is declared:

// Example
// This will result in a ReferenceError:
// carName = "Volvo";
// let carName;
// Using a const variable before it is declared, is a syntax error, so the code will simply not run.

// Example
// This code will not run.

carName = "Volvo";
const carName;


// JavaScript Initializations are Not Hoisted
// JavaScript only hoists declarations, not initializations.

// Example 1 does not give the same result as Example 2:

// Example 1
// var x = 5; // Initialize x
// var y = 7; // Initialize y

// elem = document.getElementById("demo"); // Find an element
// elem.innerHTML = x + " " + y;           // Display x and y
// Example 2
// var x = 5; // Initialize x

// elem = document.getElementById("demo"); // Find an element
// elem.innerHTML = x + " " + y;           // Display x and y

// var y = 7; // Initialize y
// Does it make sense that y is undefined in the last example?

// This is because only the declaration (var y), not the initialization (=7) is hoisted to the top.

// Because of hoisting, y has been declared before it is used, but because initializations are not hoisted, the value of y is undefined.

// Example 2 is the same as writing:

// Example
// var x = 5; // Initialize x
// var y;     // Declare y

// elem = document.getElementById("demo"); // Find an element
// elem.innerHTML = x + " " + y;           // Display x and y

// y = 7;    // Assign 7 to y
// Declare Your Variables At the Top !
// Hoisting is (to many developers) an unknown or overlooked behavior of JavaScript.
// If a developer doesn't understand hoisting, programs may contain bugs (errors).
// To avoid bugs, always declare all variables at the beginning of every scope.
// Since this is how JavaScript interprets the code, it is always a good rule.
// JavaScript in strict mode does not allow variables to be used if they are not declared.
// The "use strict" Directive
// The "use strict" directive was new in ECMAScript version 5.
// It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.
// The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
// With strict mode, you can not, for example, use undeclared variables.
// All modern browsers support "use strict" except Internet Explorer 9 and lower:
// Directive					
// You can use strict mode in all your programs. It helps you to write cleaner code, like preventing you from using undeclared variables.
// "use strict" is just a string, so IE 9 will not throw an error even if it does not understand it.
// Declaring Strict Mode
// Strict mode is declared by adding "use strict"; to the beginning of a script or a function.
// Declared at the beginning of a script, it has global scope (all code in the script will execute in strict mode):
// Example
// "use strict";
// x = 3.14;       // This will cause an error because x is not declared
// Example
// "use strict";
// myFunction();

// function myFunction() {
//   y = 3.14;   // This will also cause an error because y is not declared
// }
// Declared inside a function, it has local scope (only the code inside the function is in strict mode):

// x = 3.14;       // This will not cause an error.
// myFunction();

// function myFunction() {
//   "use strict";
//   y = 3.14;   // This will cause an error
// }
    

// The "use strict"; Syntax
// The syntax, for declaring strict mode, was designed to be compatible with older versions of JavaScript.
// Compiling a numeric literal (4 + 5;) or a string literal ("John Doe";) in a JavaScript program has no side effects. It simply compiles to a non existing variable and dies.
// So "use strict"; only matters to new compilers that "understand" the meaning of it.
// Why Strict Mode
// Strict mode makes it easier to write "secure" JavaScript.
// Strict mode changes previously accepted "bad syntax" into real errors.
// As an example, in normal JavaScript, mistyping a variable name creates a new global variable.
// In strict mode, this will throw an error, making it impossible to accidentally create a global variable.
// In normal JavaScript, a developer will not receive any error feedback assigning values to non-writable properties.
// In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object, will throw an error.
// Not Allowed in Strict Mode
// Using a variable, without declaring it, is not allowed:
// "use strict";
// x = 3.14;                // This will cause an error

// Objects are variables too.
// Using an object, without declaring it, is not allowed:
// "use strict";
// x = {p1:10, p2:20};      // This will cause an error

// Deleting a variable (or object) is not allowed.
"use strict";
let x = 3.14;
delete x;                                                                 // This will cause an error

// Deleting a function is not allowed.

"use strict";
function x(p1, p2) {};
delete x;                // This will cause an error 

// Duplicating a parameter name is not allowed:

"use strict";
function x(p1, p1) {};   // This will cause an error

// Octal numeric literals are not allowed:

"use strict";
let x = 010;             // This will cause an error

// Octal escape characters are not allowed:

"use strict";
let x = "\010";            // This will cause an error

// Writing to a read-only property is not allowed:

"use strict";
const obj = {};
Object.defineProperty(obj, "x", {value:0, writable:false});

obj.x = 3.14;            // This will cause an error

// Writing to a get-only property is not allowed:

"use strict";
const obj = {get x() {return 0} };

obj.x = 3.14;            // This will cause an error

// Deleting an undeletable property is not allowed:

"use strict";
delete Object.prototype; // This will cause an error

// The word eval cannot be used as a variable:

"use strict";
let eval = 3.14;         // This will cause an error

// The word arguments cannot be used as a variable:

"use strict";
let arguments = 3.14;    // This will cause an error

// The with statement is not allowed:

"use strict";
with (Math){x = cos(2)}; // This will cause an error

// For security reasons, eval() is not allowed to create variables in the scope from which it was called.
// In strict mode, a variable can not be used before it is declared:
"use strict";
eval ("x = 2");
alert (x);      // This will cause an error

// In strict mode, eval() can not declare a variable using the var keyword:

// "use strict";
// eval ("var x = 2");
// alert (x);    // This will cause an error
// eval() can not declare a variable using the let keyword:
// eval ("let x = 2");
// alert (x);        // This will cause an error
// The this keyword in functions behaves differently in strict mode.
// The this keyword refers to the object that called the function.
// If the object is not specified, functions in strict mode will return undefined and functions in normal mode will return the global object (window):
// "use strict";
// function myFunction() {
//   alert(this); // will alert "undefined"
// }
// myFunction();

a=10;
var a;
console.log(a); 
//no error as var is global declaration.
//10

let b=20;
b=300;
console.log(b);

//300 .no error

// c=20;
// let c;
// console.log(c);

//Aug1.js:274 Uncaught ReferenceError: Cannot access 'c' before initialization

// const d=10;
// d=20;
// console.log(d);

// Aug1.js:282 Uncaught TypeError: Assignment to constant variable.
//     at Aug1.js:282:2
// (anonymous) @ Aug1.js:282

// "use Script";
// e=10;
// let e;
// console.log(e);


//COMBINE TWO ARRAYS .......................SPREAD OPERATOR................... 
const fruit=["mango","apple"];
const fru=["orange","pine apple"];
const allf=[...fruit,...fru];
console.log(allf);
//output
// (4) ['mango', 'apple', 'orange', 'pine apple']
// 0: "mango"
// 1: "apple"
// 2: "orange"
// 3: "pine apple"
// length: 4
// [[Prototype]]: Array(0)


// The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. 
// In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.

// A better way to concatenate arrays
// Array.prototype.concat() is often used to concatenate an array to the end of an existing array. Without spread syntax, this is done as:
// let arr1 = [0, 1, 2];
// const arr2 = [3, 4, 5];
// /Append all items from arr2 onto arr1
// arr1 = arr1.concat(arr2);
// With spread syntax this becomes:
// let arr1 = [0, 1, 2];
// const arr2 = [3, 4, 5];

// arr1 = [...arr1, ...arr2];
// arr1 is now [0, 1, 2, 3, 4, 5]




// Spread syntax (...)
// The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.
// Spread syntax looks exactly like rest syntax. In a way, spread syntax is the opposite of rest syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element. See rest parameters and rest property.


// myFunction(a, ...iterableObj, b)
// [1, ...iterableObj, '4', 'five', 6]
// { ...obj, key: 'value' }
// Description
// Spread syntax can be used when all elements from an object or array need to be included in a new array or object, or should be applied one-by-one in a function call's arguments list. There are three distinct places that accept the spread syntax:

// Function arguments list (myFunction(a, ...iterableObj, b))
// Array literals ([1, ...iterableObj, '4', 'five', 6])
// Object literals ({ ...obj, key: 'value' })
// Although the syntax looks the same, they come with slightly different semantics.

// Only iterable objects, like Array, can be spread in array and function parameters. Many objects are not iterable, including all plain objects that lack a Symbol.iterator method:
// const obj = { key1: "value1" };
// const array = [...obj]; // TypeError: obj is not iterable
// On the other hand, spreading in object literals enumerates the own properties of the object. For typical arrays, all indices are enumerable own properties, so arrays can be spread into objects.

// const array = [1, 2, 3];
// const obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }
// When using spread syntax for function calls, be aware of the possibility of exceeding the JavaScript engine's argument length limit. See Function.prototype.apply() for more details.

// Examples
// Spread in function calls
// Replace apply()
// It is common to use Function.prototype.apply() in cases where you want to use the elements of an array as arguments to a function.

// function myFunction(x, y, z) {}
// const args = [0, 1, 2];
// myFunction.apply(null, args);
// With spread syntax the above can be written as:
// function myFunction(x, y, z) {}
// const args = [0, 1, 2];
// myFunction(...args);
// Any argument in the argument list can use spread syntax, and the spread syntax can be used multiple times.

// function myFunction(v, w, x, y, z) {}
// const args = [0, 1];
// myFunction(-1, ...args, 2, ...[3]);
// Apply for new operator
// When calling a constructor with new, it's not possible to directly use an array and apply(), because apply() calls the target function instead of constructing it, which means, among other things, that new.target will be undefined. However, an array can be easily used with new thanks to spread syntax:

// const dateFields = [1970, 0, 1]; // 1 Jan 1970
// const d = new Date(...dateFields);
// Spread in array literals
// A more powerful array literal
// Without spread syntax, to create a new array using an existing array as one part of it, the array literal syntax is no longer sufficient and imperative code must be used instead using a combination of push(), splice(), concat(), etc. With spread syntax this becomes much more succinct:

// const parts = ["shoulders", "knees"];
// const lyrics = ["head", ...parts, "and", "toes"];
// //  ["head", "shoulders", "knees", "and", "toes"]
// Just like spread for argument lists, ... can be used anywhere in the array literal, and may be used more than once.

// Copy an array

// const arr = [1, 2, 3];
// const arr2 = [...arr]; // like arr.slice()

// arr2.push(4);
// //  arr2 becomes [1, 2, 3, 4]
// //  arr remains unaffected
// Note: Spread syntax effectively goes one level deep while copying an array. Therefore, it may be unsuitable for copying multidimensional arrays. The same is true with Object.assign() — no native operation in JavaScript does a deep clone. The web API method structuredClone() allows deep copying values of certain supported types.

// const a = [[1], [2], [3]];
// const b = [...a];

// b.shift().shift();
// // 1

// // Oh no! Now array 'a' is affected as well:
// console.log(a);
// // [[], [2], [3]]
// A better way to concatenate arrays
// Array.prototype.concat() is often used to concatenate an array to the end of an existing array. Without spread syntax, this is done as:

// let arr1 = [0, 1, 2];
// const arr2 = [3, 4, 5];

// // Append all items from arr2 onto arr1
// arr1 = arr1.concat(arr2);
// With spread syntax this becomes:

let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

arr1 = [...arr1, ...arr2];
// arr1 is now [0, 1, 2, 3, 4, 5]
// Array.prototype.unshift() is often used to insert an array of values at the start of an existing array. Without spread syntax, this is done as:

const arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

// //  Prepend all items from arr2 onto arr1
// Array.prototype.unshift.apply(arr1, arr2);
// console.log(arr1); // [3, 4, 5, 0, 1, 2]
// With spread syntax, this becomes:

let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

arr1 = [...arr2, ...arr1];
// console.log(arr1); // [3, 4, 5, 0, 1, 2]
// Note: Unlike unshift(), this creates a new arr1, instead of modifying the original arr1 array in-place.

// Spread in object literals
// Shallow-cloning (excluding prototype) or merging of objects is possible using a shorter syntax than Object.assign().

const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };

const clonedObj = { ...obj1 };
// { foo: "bar", x: 42 }

const mergedObj = { ...obj1, ...obj2 };
{ foo: "baz", x: 42, y: 13 }

