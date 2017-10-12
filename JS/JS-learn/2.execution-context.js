

/*

 Execution-Context/scope

  memory/stack-frame with given args & locals

  2 phases
  ---------

  a. creation phase

     all variables declared with 'var' keyword, will get hoisted
     with default value(undefined) to top.

  b. execution phase

    instruction will het in seq.


   -------------------------------------
   
   every .js-runtime has one global-context by default.

   global-context executed by global-obj

   global-obj

   browser-envi : window
   Node.js      : process

   ---------------------------------------------------


   every function invocation creates new-context 
   which is child of in-which context 
   that function has declared

*/

// var v=12;
// console.log(v);

// ---------------------------------------------------

// var v=12;
// function f1(){
//     console.log(v);
//     var v=13;
// }
// f1(); // f1-context ==> global-context

// ---------------------------------------------------

// Quiz

//var v=12;
// function f1(){
//     function f2(){
//         console.log(v);
//     }
//     f2(); // f2-context ==> f1-context
//     //var v=13;
// }
// f1();  // f1-context ==> global-context


// ---------------------------------------------------


// var v = 100;
// {
//     var v = 200;
// }
// console.log(v);

// ---------------------------------------------------

// var v=12;
// var v=13;

// ---------------------------------------------------

/*

  problems with 'var' keyword

  --> variables always get hoist
  --> no block-scope
  --> can re-declare same variable within context

  soln:

  using 'let' & 'const' keywords ( from ES6 version )

*/

// ---------------------------------------------------

// console.log(v);
// let v = 12;

// ---------------------------------------------------

// let v = 100;
// {
//     let v = 200;
// }
// console.log(v);

// ---------------------------------------------------

// let v=12;
// let v=13;

// // ---------------------------------------------------

// const config={
//     url:'htp://',
//     method:'GET'
// };

// // config=null;
// config.method="POST";