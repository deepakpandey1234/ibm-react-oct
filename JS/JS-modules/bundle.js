(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){


let greet=require('ibm-nag-greet');
greet.greet('es');
},{"ibm-nag-greet":2}],2:[function(require,module,exports){


// var myApp = myApp || {};
// (function () {
//     myApp.mod2.doWork();
//     myApp.mod3.doWork();
//     var o = {
//         doWork: function () {
//             console.log('im mod1');
//         }
//     };
//     myApp.mod1 = o;
// })();

//--------------------------------------



console.log('-mod1.js-');

var message = "Hello...";
function sayHi() {
    console.log(message);
}
function sayName() {
    console.log('im mod1');
}
function sayAge() {
    console.log('im 1');
}

let en = require('./mod2');
let es = require('./mod3');

function greet(lang) {
    if (lang === 'en') {
        en();
    }
    if (lang === "es") {
        es();
    }
}

// sayHello();
module.exports = {
    greet,
    sayName
};
},{"./mod2":3,"./mod3":4}],3:[function(require,module,exports){

// var myApp = myApp || {};
// (function () {
//     var o = {
//         doWork: function () {
//             console.log('im mod2');
//         }
//     };
//     myApp.mod2=o;
// })();

//-----------------------------------

function greet(){
    console.log('Hello..');
}

module.exports=greet;
},{}],4:[function(require,module,exports){

// var myApp = myApp || {};
// (function () {
//     var o = {
//         doWork: function () {
//             console.log('im mod3');
//         }
//     };
//     myApp.mod3=o;
// })();

//-----------------------------------


function greet(){
    console.log('Ola..');
}

module.exports=greet;
},{}]},{},[1]);
