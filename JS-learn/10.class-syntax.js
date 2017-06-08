

// ES5



function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayName = function () {
    console.log('im ' + this.name);
}
// let p1 = new Person('Nag', 32);
// let p2 = new Person('Ria', 2);


function Employee(name, age, salary) {
    Person.call(this, name, age);
    this.salary = salary;
}
Employee.prototype = Person.prototype;
Employee.prototype.saySalary = function () {
    //..
}

let e = new Employee('Nag', 32, 1000)



// Es6

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     sayName() {
//         console.log('im ' + this.name);
//     }
// }


// // let p1 = new Person('Nag', 32);
// // let p2 = new Person('Ria', 2);

// class Employee extends Person {
//     constructor(name, age, salary) {
//         let a = 12;
//         super(name, age)
//         this.salary = salary;
//     }
//     askForRaise() {
//         return this.salary * 0.02;
//     }
// }

// class Boss extends Employee {
//     askForRaise() {
//         return super.askForRaise + this.salary * 0.2;
//     }
// }

// let e = new Employee('Nag', 32, 1000)


// class Abc {
//     static staMethod() {
//         //..
//     }
// }


// Abc.staVar = 12;

