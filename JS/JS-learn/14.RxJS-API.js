

// let Rx = require('rxjs/Rx');


// let stream= Rx.Observable.from([1, 2, 3, 4, 5])  //source-stream
//             .map(x => x * 2) 
//             .filter(x => x > 5) ;


// stream.subscribe(x=>console.log(x));            

//------------------------------------------



// const observableStream = Rx.Observable.create((observer) => {

//     setInterval(function () {
//         observer.next('hungry..'); // event...
//     }, 2000);

// });

// observableStream.subscribe((event) => { console.log(event) });



//-------------------------------------------



// var observable = Rx.Observable.range(1, 10)
//     .map(x => {
//         if (x === 5) {
//             throw new Error('Something Went Wrong');
//         } else {
//             return x; // event
//         }
//         //return x;
//     })
//     .filter(x => x > 0);



// observable.subscribe(function (result) {
//     console.log(result);
// }, function (error) {
//     console.log(error);
// }, function (message) {
//     console.log('done...');
// });


//-------------------------------------------------



// const input = $('#inp');
// var obervable = Rx.Observable.fromEvent(input, 'keyup');



// obervable.subscribe(val => {
//     console.log(val);
// });


//-------------------------------------------------



// function resolveAfter2Seconds(x) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(x + 100);
//         }, 2000);
//     });
// }


// async function add1(x) {
//     var a = resolveAfter2Seconds(20);
//     var b = resolveAfter2Seconds(30);
//     return x + await a + await b;
// }

// add1(10).then(v => {
//   console.log(v);  // prints 60 after 2 seconds.
// });