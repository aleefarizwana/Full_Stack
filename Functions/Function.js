//Uncomment code and try to run to know how js functions are used.

//Corresponding js file has different types of functions avaliable in js in es6 (ecmascript v6).


//Types of Funtions in Java Script

//A Function in js is First class of object or citizen

//If any programming language has the ability to treat functions as values, to pass them as arguments and to return a function from another function then it is said that  programming language has First Class Functions and the functions are called as First Class Citizens in that programming language.
//Functions are very important and powerful in JavaScript. JavaScript has all those abilities or features that are required to be a language having First Class Functions, hence functions are treated as First Class Citizens. 

// 1. Ability to treat functions as values: Functions in JavaScript can be treated as values, i.e. a function can be stored as a value in a variable.
//================================================
// Javascript
//   var greet = function() {
//     console.log("Welcome to GeeksforGeeks!");
//   }
//   greet();
// Output:

// Welcome to GeeksforGeeks!
// In the above example, a function is stored in a variable greet, and the variable with parenthesis, i.e. greet() calls the body of the function and shows the output in the console. Anonymous function is used in the places where that function is used as a value.


// 2. Ability to pass a function as arguments: Functions in JavaScript also has the ability to be passed as arguments to another function. Let’s see an example-
//================================================
// Javascript
// function teacher(){
//     return "Teacher";
// }
  
// function student(){
//     return "Student";
// }
  
// function greet(user){
//     console.log("Welcome", user());    
// }
  
// // Prints "Welcome Teacher"
// var message = greet(teacher);
  
// // Prints "Welcome Student" 
// var message = greet(student);
// Output:

// Welcome
// Teacher
// Welcome
// Student
// In the above example, when we pass the argument in function greet() as teacher, it passes the body of function teacher() and returns the string “Teacher” but when we pass the argument in function greet() as student, it passes the body of function student() and returns the string “Student”.

// 3. Ability to return a function from another function: Now, let’s see an example of returning a function from another function in JavaScript-
//================================================
// Javascript
// var greet = function(){
//     return function(){
//     console.log("Welcome to GeeksforGeeks!");
//     }
// }
// greet()();
// Output:

// Welcome to GeeksforGeeks!
// Here, we use the double parentheses to invoke the returned function, hence we use greet()(). Single parenthesis will call the function itself without invoking its returned function. We can also do it by storing the function in a variable like this-

// var func = greet();
// func();
// Functions that return a function are called Higher Order Functions.
                                           //=========================
// As we can see JavaScript has all the required abilities and features to be a programming language having First Class Functions and hence the functions in JavaScript are called as First Class Citizens.



////ANONYMOUS FUNCTION

// let fun = function(){
//     let a=10;
//     console.log(a);
// }
// console.log(fun+" wat is inside variable");
// console.log(fun()+ " calling variable");

// output
// function(){
//     let a=10;
//     console.log(a);
// } wat is inside variable
// 
// undefined calling variable

// //ARROW FUNCTION 
// let fun1=(param1,param2)=>{
//     //
// }
// fun();

//IIFE FUNCTION  : IMMEDIATELY IINVOKED FUNCTION EXPRESSION
//called immediately after creation of 
// ((param1,param2)=>{

// })(arg1,arg2)

// ((a,b)=>{
//     let c=a+b;
//     console.log(c,"output from IIFE");
// })(2,3)

//5 'output from IIFE'              Function.js:25


//rest operator
// function fun(...para){
//     console.log(para,"these are all arg in para")
// }
// fun(2,3,12,5,7,8);

//output
//>(6) [2, 3, 12, 5, 7, 8] 'these are all arg in para'

//expand drop down to get whole output
//output
// (6) [2, 3, 12, 5, 7, 8]
// 0: 2
// 1: 3
// 2: 12
// 3: 5
// 4: 7
// 5: 8
// length: 6
//> [[Prototype]]: Array(0) 'these are all arg in para'

//func arg to other fun
// function addition(a,b){
//     let c=a+b
//     return c;
// }

// function calc(a,b,add,sub){  //add variable storing  function body
//     return add(a,b),sub(a,b);
// }
// console.log(calc(2,3,addition,subtraction));

//addition func going inside variable add
//2 going inside variable a

//first in log,calling calc fun it again calls add func,add func returned
//the sum will be in line no 71(return 5)

//output
//5 'Summation function working inside calc function'


// function subtraction(a,b){
//     return a-b;
// }
// function calc(a,b,sub){
//     return sub(a,b);
// }
// console.log(calc(2,3,subtraction),"Subtraction function working inside calc function");

//output
//-1 'Subtraction function working inside calc function'
