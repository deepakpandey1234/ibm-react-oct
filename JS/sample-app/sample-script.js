

// #1

// function foo(b) {
//   var a = 10;
//   return a + b + 11;
// }

// function bar(x) {
//   var y = 3;
//   return foo(x * y);
// }

// console.log(bar(7));

// #2

// function foo(){}
// function bar(){foo()}
// function baz(){bar()}
// baz();

// #3


// function foo() { throw new Error('oops') }
// function bar() { foo() }
// function baz() { bar() }
// baz();


// #4

// function foo(){
// foo();
// }
// foo()

//#5


// function longRunning() {
//     var i = 0;
//     while (i < 10) {
//         console.log('leave me.......');
//         i++;
//     }
// }

// function shortRunning() {
//     console.log('bing...');
// }

// longRunning();
// shortRunning();

//-----------------------------------------

// on event , how js functions are executing ?



/*

<button class="veg"> Veg </button>
<button class="nonveg"> NonVeg </button>

*/

// console.log('welcome..');

// $.on('.veg','click',function vegHandler(){
//     console.log('handling click event on .veg elements');
// });

// $.on('.nonveg','click',function nonVegHandler(){
//     console.log('handling click event on .veg elements');
// });

// console.log('cont..with other work..');

// function longRunning() {
//     var i = 0;
//     while (i < 10) {
//         console.log('leave me.......');
//         i++;
//     }
// }
// longRunning();


//-------------------------------------

// console.log('welcome..');

// setTimeout(function timeout(){
//     console.log('after timeout..');
// },1000);

// console.log('cont..with other work..');

// function longRunning() {
//     var i = 0;
//     while (i < 1000) {
//         console.log('leave me.......');
//         i++;
//     }
// }
// longRunning();

