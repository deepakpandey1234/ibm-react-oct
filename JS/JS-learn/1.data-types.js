

/*

    types
    ----------

    1. primitives  ==> values

        a. string
        b. number
        c. boolean
        d. undefined
        e. symbol ( from es6 )

    2. references  ==> objects

        how to create obj in .js-lang ?
            
        let ref=new Constructor();

*/

/*

 imp-note:

 all .js object by default extensible & configurable

*/

// let config=new Object();
// config.url="http://"
// config.method="GET"
// config.success=function(){
//     //..
// }

// delete config.method;


// literal style objects



// let config=new Object(); // obj-wrapper
// config.url="http://"
// config.method="GET"
// config.success=function(){
//     //..
// }

// or


let config={
    url:'http://',
    method:'GET',
    success:function(){}
};

//--------------------------------


// let menu=new Array();
// menu.push("biryani");
// menu.push("meals");

// or

// let menu=["",""];

//--------------------------------

// let ssnPattern=new RegExp("\\d{3}-\\d{2}-\\d{4}");
// or
// let ssnPattern=/\d{3}-\d{2}-\d{4}/;
// let ssn="434-54-5657";
// console.log(ssnPattern.test(ssn));

//--------------------------------



// let add=new Function("n1","n2","let r=n1+n2;return r;");

// or

// function  add(n1,n2){
//     let r=n1+n2;
//     return r;
// }

// add.prop1=12;
// add.m=function(){
//     //..
// }

// console.log(add(12,13));


//-----------------------------------------------

// How to access obj's properties ?

/*

    .  ==> valid identifier

    else

    [] 

*/


// let p={
//     name:'nag',
//     'full-name':'Nag N'
// };

// p.name="Nag";
// console.log(p.name);

// p['full-name']="Nagabhushanam";