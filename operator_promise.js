
//...............................PROMISE OPERATOR............................
// myPromise.then(
//     function(value) { /* code if successful */ },
//     function(error) { /* code if some error */ }
//   );

// "I Promise a Result!"

// "Producing code" is code that can take some time

// "Consuming code" is code that must wait for the result

// A Promise is a JavaScript object that links producing code and consuming code

// JavaScript Promise are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code. 
//Prior to promises events and callback functions were used but they had limited functionalities and created unmanageable code.
//Multiple callback functions would create callback hell that leads to unmanageable code. Promises are used to handle asynchronous operations in JavaScript.

// Syntax:

// let promise = new Promise(function(resolve, reject){
//      //do something
// });
// Parameters

// The promise constructor takes only one argument which is a callback function
// The callback function takes two arguments, resolve and reject
// Perform operations inside the callback function and if everything went well then call resolve.
// If desired operations do not go well then call reject.
// A Promise has four states:


// fulfilled: Action related to the promise succeeded
// rejected: Action related to the promise failed
// pending: Promise is still pending i.e. not fulfilled or rejected yet
// settled: Promise has been fulfilled or rejected
// Example 1: This example shows how to create a basic promise object.


let promise = new Promise(function (resolve, reject) {
    const x = "geeksforgeeks";
    const y = "geeksforgeeks"
    if (x === y) {
        resolve();
    } else {
        reject();
    }
});
 
promise.
    then(function () {
        console.log('Success, You are a GEEK');
    }).
    catch(function () {
        console.log('Some error has occurred');
    });
// Output:

// Success, You are a GEEK
// Promise Consumers: Promises can be consumed by registering functions using .then and .catch methods.

// 1.Promise then() Method: It is invoked when a promise is either resolved or rejected. It may also be defined as a carrier that takes data from promise and further executes it successfully.
// Parameters: It takes two functions as parameters.
// The first function is executed if the promise is resolved and a result is received.
// The second function is executed if the promise is rejected and an error is received. (It is optional and there is a better way to handle error using .catch() method
// Syntax:

// .then(function(result){
//         //handle success
// }, function(error){
//         //handle error
// })
// Example 2: This example shows how the then method handles when a promise is resolved


let promise = new Promise(function (resolve, reject) {
    resolve('Geeks For Geeks');
})
 
promise
    .then(function (successMessage) {
        //success handler function is invoked
        console.log(successMessage);
    }, function (errorMessage) {
        console.log(errorMessage);
    });
// Output:

// Geeks For Geeks
// Example 3: This example shows the condition when a rejected promise is handled by second function of then method


// let promise = new Promise(function (resolve, reject) {
//     reject('Promise Rejected')
// })
 
// promise
//     .then(function (successMessage) {
//         console.log(successMessage);
//     }, function (errorMessage) {
//         //error handler function is invoked
//         console.log(errorMessage);
//     });
// Output:

// Promise Rejected
// 2. Promise catch() Method: It is invoked when a promise is either rejected or some error has occurred in execution. It is used as an Error Handler whenever at any step there is a chance of getting an error.

// Parameters: It takes one function as a parameter.

// Function to handle errors or promise rejections.(.catch() method internally calls .then(null, errorHandler), i.e. .catch() is just a shorthand for .then(null, errorHandler) )
// Syntax:

// .catch(function(error){
//         //handle error
//     })
// Examples 4: This example shows the catch method handling the reject function of promise.


let promise = new Promise(function (resolve, reject) {
    reject('Promise Rejected')
})
 
promise
    .then(function (successMessage) {
        console.log(successMessage);
    })
    .catch(function (errorMessage) {
        //error handler function is invoked
        console.log(errorMessage);
    });

//Output:
// Promise Rejected

function add(a,b){
    return new Promise((resolve,reject)=>{
        if(typeof a!="number" || typeof b!="number"){
            reject(new Error("Both arg must be number"));
        }
        else{
            resolve(a+b);
        }
    })
}
console.log("claculating...............");
add(2,3)
.then((sum)=>{
    console.log(sum);

})
.catch((error)=>{
    console.log("error!")
})

//claculating.............
//error!                               add("a",3) must of same type

//claculating.............
//5                                        add(2,3)


let arr=[1,2,3,4,5,6,7,8,9,10];
const index=arr.findIndex((element)=>element==7);
console.log("index of element 7 is : "+index);

//index of element 7 is : 6

// claculating...............   Aug1.js:354     assynchronous job
// index of element 7 is : 6   Aug1.js:338 
// 5


