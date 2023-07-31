//run this file by saving in local file system.
//or run in vs code using Live server.


// 1 - Find the greatest number among three intergers using if-else
var a=prompt("Enter number a : ");
var b=prompt("Enter number b : ");
var c=prompt("Enter number c : ");

if(a>b && a>c){
    console.log("largest number is "+a);
}
else if(b>a && b>c){
    console.log("largest number is "+b);
}
else{
    console.log("largest number is "+c);
}
// 2 - Find the smallest number among three intergers using if-else
var a=23
var b=24
var c=1
if(a<b && a<c){
    console.log("smallest number is "+a);
}
else if(b<a && b<c){
    console.log("smalles tnumber is "+b);
}
else{
    console.log("smallest number is "+c);
}

// 3 - Find the average  among three intergers 
var a=12;
var b=23;
var c=45;
var avg=(a+b+c)/3;
console.log("Average is "+avg);

// 4 - Create an array and prints its elements using for loop

var arr1=[2,3,"aleefa","sita",true,50];
console.log("printing array elements using for loop")
for( t of arr1){
    console.log(t);
}
// 5 - Find the greatest number in the given array
var max=arr1[0];
for(var t=0;t<arr1.length;t++){
    for(var m=t;m<arr1.length;m++){
        if(arr1[m]>max){
            max=arr1[m];
        }
    }
}
console.log("largest element in the array is "+max);
// 6 - Find the smallest number in the given array
var arr=[23,50,87,42,67,80,23,90]
var min=arr[0];
for(var t=0;t<arr.length;t++){
    for(var m=t;m<arr.length;m++){
        if(arr[m]<min){
            min=arr[m];
        }
    }
}
console.log("smallest element in the array is "+min)

// 7 - Find the average  in the given array
var sum=0
for(t of arr){
    sum+=t;
}
var avg=sum/arr.length;
console.log("average  in the given array "+avg);

// 8 - Print the prime numbers for the given range

var n=15;
var count=0;
var number=1;
console.log("the prime numbers for the given range are ");
while(number <= n){
    count=0;
    for(var i=2;i<number;i++){
        if(number%i == 0){
            count=count+1;
        }
    }
    if(count==0){    //  && i>1  9lower limit must not be 1
        console.log(i+" ")
    }
    number++;
}
// 9 - Print if given number is even or odd
var num=25;
if(num%2==0){
    console.log("number is even "+num);
}
else{
    console.log("number is odd "+num);
}
// 10 - find the factorial of the given number

var num=5;
for(var i=num-1;i>=1;i--){

    num=num*i;
}
console.log("factorial of the number is "+num);

// 11 - Write a calculator program 
// using swich case for two operands
// functionalities - 
// Addition
// Sabtraction
// multiplication
// division
// remider
// factorial
// percentage
// // average of two numbers
// print multiplaction table of given number


var a=4;
var b=9;
console.log("functionalities");
console.log("Addition");
console.log("Sabtraction");
console.log("multiplication");
console.log("division");
console.log("remider");
console.log("factorial");
console.log("percentage");
var choice=prompt("Enter yor choice ");
var ch=parseInt(choice);
switch(ch){
    case 1:
        console.log("addition is "+add(a,b));
        break;
    case 2:
        console.log("Sabtraction is "+sub(a,b));
        break;
    case 3:
        console.log("multiplication is "+mult(a,b));
        break;
    case 4:
        console.log("division is "+div(a,b));
        break;
    case 5:
        console.log(" remainder is "+rem(a,b));
        break;
    case 6:
        console.log(" factorial is "+fact(a));
        break;
    case 7:
        console.log("percentage is "+per(a));
        break;
}

function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mult(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}
function rem(a,b){
    return a%b;
}
function fact(a){
    var i=a;
    var n=1;
    while(i>=1){
        
        n*=i;
        i=i-1;
    }
    return n;
}
function per(a){
    return a/100;
}


//output
// largest number is 5
// smallest number is 1
// Average is 26.666666666666668
// printing array elements using for loop
// 2
// 3
// aleefa
// sita
// true
// 50
// largest element in the array is 50
// smallest element in the array is 23
// average  in the given array 57.75
// the prime numbers for the given range are 
// 2 
// 3 
// 5 
// 7 
// 11 
// 13 
// number is odd 25
// factorial of the number is 120
// functionalities
// Addition
// Sabtraction
// multiplication
// division
// remider
// factorial
// percentage
// factorial is 24


// 12 - write the Student database program
// using switch case

// functionalities -
// Display all student details
// display who has the highest marks
// display how many student are failed 
// display their names for fail students.
// display the average marks for all the students
