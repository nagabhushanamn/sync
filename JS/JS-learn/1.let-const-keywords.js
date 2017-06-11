// "use strict"


/*

    Execution Context / scope
    --------------------------

    memory/stack-frame with args & locals to execute instruction

    phase-1 : creation

        --> all variables declared with 'var' keyword
           any-where will get hoisted to top with default value 'undefined'

    phase-2 : execution

        --> istructions execute in seq.


    --------------------------------------

    .js-runtime always has one global-context & global-obj by default

    global-obj  ==> .js activation obj

    browser ==> window
    node.js ==> process

    --------------------------------------

    every func-invocation also creates new-context 
    which is child of in-which func has deeclared


*/


// var v=12;
// console.log(v);


// var v = 12;
// function func() {
//     console.log(v);
//     var v = 13;
// }
// func(); // func-context ===> global-context



// var v = 12;
// function f1() {
//     function f2() {
//         console.log(v);
//     }
//     //f2(); // f2-context ==> f1-context
//     var v = 13;
//     return f2;
// }

// var f2Func = f1(); // f1-context ==> global-scope
// f2Func(); //f2-context ==> f1-context

//----------------------------------------------------------

// var i = 100;
// {
//     var i = 200;
// }
// console.log(i);

//----------------------------------------------------------

// var i=12;
// var i=13;

//----------------------------------------------------------

// problems with 'var' keyword

/*

    ==> they always get hoist
    ==> No block-scope for variables
    ==> can re-declare same variable multiple times



    soln :

    use let & const keywords

*/



// console.log(v);
// let v=12;


// var i=100;
// {
//     let i=200;
// }
// console.log(i);

// let i=12;
// let i=13;

// ---------------------------------------


const trainer = {
    name: 'Nag'
};
Object.defineProperty(trainer, 'name', { writable: false })

trainer.name = "Anjali"