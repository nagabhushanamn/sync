

// function foo(b) {
//     var a = 10;
//     return a + b + 11;
// }

// function bar(x) {
//     var y = 3;
//     return foo(x * y);
// }

// console.log(bar(7));

//------------------------------------------

// function foo(){}
// function bar(){foo();}
// function baz(){bar()};
// baz();

//------------------------------------------


// function foo(){throw new Error('oops')}
// function bar(){foo();}
// function baz(){bar()};
// baz();


//------------------------------------------

// function foo(){foo()};
// foo();

//------------------------------------------

// function longRunning(){
//     var i=0;
//     while(i<10){
//         console.log("Good Morning");
//         i++;
//     }
// }
// function shortRunning(){
//     console.log('Hello...');
// }

// longRunning();
// shortRunning();

//------------------------------------------


/*

    <button class="odd">button-1</button>
    <button class="even">button-2</button>

*/

// console.log('start...');

// $.on('.odd', 'click', function handler1(e) {
//     console.log('handling event on .odd elements');
// });
// $.on('.even', 'click', function handler2(e) {
//     console.log('handling event on .even elements');
// });

// function longRunning(){
//     var i=0;
//     while(i<10){
//         console.log("Good Morning");
//         i++;
//     }
// }
// console.log('continue with other work..');
// longRunning();

//-----------------------------------------------------


console.log('-start-');


// IO
setTimeout(function(){
    console.log('after IO, consumunt result...');
},2000);


function longRunning(){
    var i=0;
    while(i<10){
        console.log("Good Morning");
        i++;
    }
}
console.log('continue with other work..');
longRunning();