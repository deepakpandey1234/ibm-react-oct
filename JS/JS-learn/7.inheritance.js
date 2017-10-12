


/*

how to implement inheritance .js-lang?

--> using prototypes

obj ==> parent-obj(prototype)

*/


function Person(name, age) {
    this.name = name;
    this.age = age;
    // this.sayName=function(){
    //     console.log('im '+this.name);
    // }
    // this.sayAge=function(){
    //     console.log('im '+this.age+" old");
    // }
}
Person.prototype.sayName = function () {
    console.log('im ' + this.name);
}
Person.prototype.sayAge = function () {
    console.log('im ' + this.age + " old");
}

let p1 = new Person("Nag", 33);
let p2 = new Person("Ria", 2);

