//Copy and Save file ,Uncomment each code one by one then run in browser and learn how it is going to work.

  // var n=16;
// if(n<12){
//     console.log("Good morning");
// }else if (n>=12 && n<16){
//     console.log("Good Afternoon");
// }
// else if(n>=16 && n<=20){
//     console.log("Good eveing");
// }
// else{
//     console.log("Good night");
// }

//output
//Good morning     --3
//Good eveing      --16


// var inp=prompt("Enter a number");           //need to write html
// console.log(inp);

// if(inp%2==0){
//     console.log("Even nimber"+inp);
// }
// else{
//     console.log("odd number"+inp)
// }

// var num=2;

//     switch(num){
//         case 1:
//             console.log("Sunday");
//             break;
//         case 2:
//             console.log("Monday");
//             break;
//         case 3:
//             console.log("Tuesday");
//             break;
//         case 4:
//             console.log("Wednesday");
//             break;
//         case 5:
//             console.log("Thursday");
//             break;
//         case 6:
//             console.log("Friday");
//             break;
//         case 7:
//             console.log("Saturday");
//             break;
//         default:
//             console.log("enter valid date");
        
//     }


// var num=prompt("Enter any number");
// var i=0;
// do{
//     console.log("hello"+i);
//     i=i+1;
// }while(i<num)

//output when input 6
// hello0
// hello1
// hello2
// hello3
// hello4
// hello5

//output            when we print   ("hello")
//10 hello


// var num=prompt("Enter any number to print multiplication table using do while loop");
// var i=1;
// do{
//     console.log(num+" * "+i+" = "+num*i);
//     i=i+1;
// }while(i<=10)

//output     input-12
// 12 * 1 = 12
// 12 * 2 = 24
// 12 * 3 = 36
// 12 * 4 = 48
// 12 * 5 = 60
// 12 * 6 = 72
// 12 * 7 = 84
// 12 * 8 = 96
// 12 * 9 = 108
// 12 * 10 = 120


//print array elements line by line 
// var num=prompt("Enter any number to print multiplication table using for loop");
// for(var i=1;i<=10;i++){
//     console.log(num+" * "+i+" = "+num*i);
// }

// var arr=[10,20,30,"aleefa"];
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }


//print array elements line by line default nature of console.log()
// 10
// 20
// 30
// aleefa


//print array elements in single line

// var str="";
// var arr=[10,20,30,"aleefa"];
// for(var i=0;i<arr.length;i++){
//     str+=arr[i]+" "
// }
// console.log(str)

// 10 20 30 aleefa 

//***********************NOTE************/
//for loop variant USE of keyword

// var arr=[10,20,"siri","aleefa",90,'TRUE'];
// for(var i of arr){   
//     console.log(i);
// }

// output
// 10
// 20
// siri
// aleefa
// 90
// TRUE

// var num=10;
// num="aleefa";
// num=[10,20,30];
// if(true){
//     console.log(num);
// }

//var access through out file,let in that block

// if(true){
//     var n=999;
// }
// console.log(n);



// if(true){
//     let n1=888;
    
// }
// console.log(n1);

//output
// ReferenceError: n1 is not defined
