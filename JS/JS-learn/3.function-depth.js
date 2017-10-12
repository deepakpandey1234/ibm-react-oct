

/*

    how to create function-obj ?

    2 ways

    1. function declaration

        -> function-obj will get created at context-creation phase
        -> always get hoisted func-obj
        -> Named function

    2. function expression

        -> function-obj will get created at context-execution phase
        -> anonmous function


*/

//-------------------------------------------------

// 1. function declaration

// console.log(add(12,13));

// function add(n1,n2){
//     return n1+n2;
// }

// console.log(add(12,13));

//-------------------------------------------------


// 2. function expression

// console.log(add(12,13));
// let add=function(n1,n2){
//     return n1+n2;
// }
// console.log(add(12,13));

//-------------------------------------------------



// function reflec(a,b){
//     console.dir(arguments);
//     return arguments[0];
// }

// console.log(reflec(12,13));

//-------------------------------------------------

// e.g

// function sum(){
//     let len=arguments.length,
//         result=0,
//         i=0;
//     while(i<len){
//         result+=arguments[i];
//         i++
//     }    
//     return result;
// }

//-------------------------------------------------


// quiz

// function getFood(){
//     return "No Food";
// }
// function getFood(pay){
//     if(arguments.length===0)return "No Food";
//     return "Biryani";
// }

// console.log(getFood());

//-------------------------------------------------

// function default param ( from ES6 )

// function func(a=1, b=2) {

//     // if(!a){
//     //     a=1;
//     // }
//     // if(!b){
//     //     b=2;
//     // }

//     // a = a || 1;
//     // b = b || 2;

//     console.log(a);
//     console.log(b);
// }

// func(undefined, 20);

//------------------------------------

// function rest param

// function func(a,...rest){
//     console.log(a)
//     console.log(Array.isArray(rest));
//     console.log(rest)
// }
// func(1,2,3,4,5);

//------------------------------------

// function as values

// function sayHello(){
//     console.log('hello...');
// }
// // sayHello();

// let greet=sayHello;
// greet();

//------------------------------------

// function as arg

// function greet(f) {
//     if (f) { f(); return };
//     console.log('hello');
// }
// greet();
// greet(function () { console.log('ola..') });


// e.g

// let nums=[1,3,5,7,9,2,4,6,8,10];
// nums.sort(function(a,b){return b-a;});
// console.log(nums);


//------------------------------------

// function as return value

// function teach() {
//     console.log('teach...');
//     let learn = function () { console.log('leanr..') }
//     return learn;
// }

// let learnFunc=teach();
// learnFunc();
// learnFunc();