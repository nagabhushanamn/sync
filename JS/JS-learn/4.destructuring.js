


// array destructuring

// let salaries = [1000, 2000, 3000];


// let min = salaries[0];
// let avg = salaries[1];
// let max = salaries[2];

// let [min,avg,max]=salaries;

// let [min,,max]=salaries;


// let salaries = [1000, 2000];
// let [min,avg,max]=salaries;
// let [min, avg, max = 4000] = salaries;

// let arr = [100, 200, [300, 400]];

// let [min, avg, [max1, max2]] = arr;

// let arr = [10, 20];

// let a, b;

// [a, b] = arr;


// object destructuring


let person = {
    name: 'nag', age: 32
};

// let name=person.name;
// let age=person.age;

// let {name,age}=person;

// let {name:myName,age:myAge}=person;

let myName;
let myAge;

({ name: myName, age: myAge } = person);