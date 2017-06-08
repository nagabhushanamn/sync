console.log('-app.js-');


// var app=app||{};

// // good mng
// app.mod1.doGreet();

//--------------------------------------------

// let mod1=require('./pack1');
// // mod1.sayHello();
// mod1.greet('en');
// mod1.greet('es');

//--------------------------------------------

// let syncGreet=require('sync-greet');

// syncGreet.greet('en');
// syncGreet.greet('es');


//--------------------------------------------


// import {name,age} from './pack1/mod1';
// import {name as myName,age as myAge} from './pack1/mod1';
// import * as personDet from './pack1/mod1';

// import {person} from './pack1/mod1';
// person.name="Naga";

import MainComponent, { Comp1, Comp2 } from './pack1/mod1';