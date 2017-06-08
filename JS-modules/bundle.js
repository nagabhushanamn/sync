(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

let syncGreet=require('sync-greet');

syncGreet.greet('en');
syncGreet.greet('es');

},{"sync-greet":2}],2:[function(require,module,exports){

// var app = app || {};

// (function () {

//     app.mod2.doGreet();
//     app.mod3.doGreet();

//     var greetLib = {
//         doGreet: function () {
//             console.log('Good Morning...');
//         }
//     };

//     app.mod1 = greetLib;

// })();

//-----------------------------------------

console.log('-mod1.js-');

let en = require('./mod2');
let es = require('./mod3');

let message = "Hello.."
function sayHello() {
    console.log(message);
}

function greet(lang) {
    if (lang === "en") {
        en();
    }
    if (lang === 'es') {
        es()
    }
}

module.exports = {
    sayHello,
    greet
};
},{"./mod2":3,"./mod3":4}],3:[function(require,module,exports){

// var app=app||{};

// (function () {

//     var greetLib = {
//         doGreet: function () {
//             console.log('Good Noon...');
//         }
//     };

//     app.mod2=greetLib;
    
// })();


////////////////////////////////////////




function greet(){
    console.log('Hello..');
}

module.exports=greet;
},{}],4:[function(require,module,exports){

// var app = app || {};

// (function () {

//     var greetLib = {
//         doGreet: function () {
//             console.log('Good Evening...');
//         }
//     };

//     app.mod3 = greetLib;

// })();

//---------------------------------------------



function greet(){
    console.log('Ola..');
}

module.exports=greet;
},{}]},{},[1]);
