

// ES5

// function func(a){
//     console.log(a);
//     console.log(arguments);
// }
// func(12,13,14,15);


// function func(a, b) {
//     // if (!a) a = 1;
//     // if (!b) b = 2;
//     a = a || 1;
//     b = b || 2;
//     console.log(a);
//     console.log(b);
// }

// func(undefined, 20);


// ES6



// function func(a = 1, b = 2) {
//     console.log(a);
//     console.log(b);
// }

// func(undefined, 20);


//-----------------------------------

// function func(a, ...rest) {
//     console.log(Array.isArray(rest))
//     console.log(rest);
// }

// func(1, 2, 3, 4, 5);