
/*

    A closure is a function having access to the parent scope,
    even after the parent function has closed.

    // why we need ?

    -> to abstract public behav of any module
    -> while executing func async, to access parent scoped data


*/

// function teach(sub) {
//     console.log('teaching ' + sub);
//     let notes = sub + '-notes';
//     function learn() {
//         console.log('learning with ' + notes);
//     }
//     // learn();
//     console.log('teaching end....');
//     return learn;
// }

// let learnFunc=teach('.js');// teach-context
// learnFunc();


// use-1: to abstract public behav of any module

/*
    e.g
    counter-module

*/

const counter = (function () {
    let count = 0; // private
    // public
    function doCount() {
        count++;
    }
    function getCount() {
        return count;
    }
    let o = {
        inc: doCount,
        get: getCount
    };
    return o;
})();


//use-2: while executing func async, to access parent scoped data


// function init(){
//     let count=0;
//     setInterval(function(){
//         count++;
//         console.log(count);
//     },1000);
// }
// init();