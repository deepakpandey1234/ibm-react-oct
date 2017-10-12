

/*

    'this' ==> current execution-context's owner

*/

// let pName="Global";

// let person={
//     pName:'Nag',
//     sayName:function(){
//         // let pName="Local";
//         console.log('im '+pName); // context's hirerarchy data
//         console.log('im '+person.pName); // obj's  data
//         console.log('im '+this.pName); // context owner's  data
//     }
// };

// // person.sayName();

// let oldPerson=person;
// person={pName:'Abc'};

// oldPerson.sayName();

//----------------------------------------------------



// function-binding

// a. static 
// b. dynamic


// ------------------------------------------------------


//a.static-function binding

// let p1={name:'Nag',sayName:function(){console.log('im '+this.name)}};
// let p2={name:'Abc',sayName:function(){console.log('im '+this.name)}};


// function sayNameForAll() {
//     console.log('im ' + this.name);
// }
// let p1 = { name: 'Nag', sayName: sayNameForAll };
// let p2 = { name: 'IBM', sayName: sayNameForAll };

// sayNameForAll(); // im ?? // function-invocation ( this ==> global-obj)
// p1.sayName(); // im Nag   // method-invocation   ( this ==> invker-obj)
// p2.sayName(); // im IBM


// ------------------------------------------------------

// dynamic function-binding


let greetLib = {
    name: 'greet-lib',
    sayName: function (message,from) {
        console.log(message + ' im ' + this.name +": "+from);
    }
}

//----------------------------------------

let p = { name: 'Nag' };
let e = { name: 'IBM' };

//----------------------------------------

// greetLib.sayName();


// way-1
// greetLib.sayName.call(p,'Hello','CHN');
// greetLib.sayName.call(e,'Dude',"Universe");

// way-2
// greetLib.sayName.apply(p,['Hello','CHN']);
// greetLib.sayName.apply(e,['Dude',"Universe"]);

// way-3
// let newF=greetLib.sayName.bind(p,"Hello","CHN");
// newF();
// newF();

// let newFF=greetLib.sayName.bind(e);
// newFF('hi','IND');
// newFF('hey','World');


//------------------------------------



function Person(name,age){
    this.name=name;
    this.age=age;
    this.sayName=function(){
        console.log('im '+this.name);
    }
}

let p1=new Person("Nag",33);
p1.sayName();


//----------------------------------------


// in .js-lang, we can call function in 4 ways

/*

    1. function invocation  ( this ==> global-obj)
    2. method-invocation    ( this ==> invoker-obj)
    3. call/apply/bind invocation ( this ==> arg-obj)
    4. constructor-invocation ( this ==> new-obj)

*/

