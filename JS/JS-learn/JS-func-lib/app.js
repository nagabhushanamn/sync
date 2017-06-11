
let lodash=require('lodash');

let products = [
    { id: 123, name: 'item-1', price: 30000, type: "elec" },
    { id: 124, name: 'item-2', price: 50000 },
    { id: 125, name: 'item-3', price: 70000 },
    { id: 126, name: 'item-4', price: 20000, type: "elec" },
    { id: 127, name: 'item-5', price: 80000 },
];

//--------------------------------------------

let result;

// result = products.map(item => {
//     if (item.price > 50000) {
//         return item.name
//     }
// });


// result = products.filter(item => {
//     if (item.price > 50000) {
//         return true;
//     }
// });


// result = products.reduce(function (acc, item) {
//     return acc + item.price;
// }, 0);


// result=products.slice(0,2);
// result = products.splice(0, 2);


// result=products.every(item=>item.type==='elec');
// result=products.some(item=>item.type==='elec');




let arr1=[1,2,3];
let arr2=[1,2];

console.log(lodash.difference(arr1,arr2));
