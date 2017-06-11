

let config = new Object();
config.url = "htt://";
config.method = "GET";
config.success = function () {
    //.
}

// or

let data = { name: 'Nag' };

// let newConfig = {
//     url: '',
//     method: '',
//     data:data,
//     success: function () {

//     }
// };


// ES6

// let dynamicField = "success"; // done

// let newConfig = {
//     url: '',
//     method: '',
//     data,
//     [dynamicField]() {

//     },
//     "say Name"(){

//     }
// };

// newConfig[dynamicField]();
// newConfig['say Name']();



//-------------------


let object = {
    ["sync-" + dynamicField]: ''
}