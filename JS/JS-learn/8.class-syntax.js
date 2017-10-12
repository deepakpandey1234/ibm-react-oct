
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.sayName = function () {
//     console.log('im ' + this.name);
// }
// Person.prototype.sayAge = function () {
//     console.log('im ' + this.age + " old");
// }





// or (in es6)


class Person {

    constructor(name, age) {
        console.log('Person::constructor');
        this.name = name;
        this.age = age;
    }
    sayName() {
        console.log('im ' + this.name);
    }
    sayAge() {
        console.log('im ' + this.age + " old");
    }
}


// let p=new Person('Nag',33)

class Employee extends Person {
    constructor(name, age, salary) {
        console.log('Employee::constructor');
        super(name, age)
        this.salary = salary;
    }
    saySalary() {
        console.log('i get ' + this.salary);
    }
    askForRaise() {
        return this.salary * 0.02;
    }
}

// let e = new Employee("Nag", 33, 1000.00);

class Boss extends Employee {

    askForRaise() {
        return this.salary * 0.2 + super.askForRaise();
    }

}

let b = new Boss("Nag", 33, 1000.00);




class Abc{
    static staMethod(){
        //..
    }
}


Abc.staVar=12;
