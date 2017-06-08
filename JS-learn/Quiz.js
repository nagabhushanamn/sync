

// var i = 12;
// function func() {
//     console.log(this.i);
//     console.log(i);
// }
// func();

//---------------------

// function getFood(){
//     return{
//         name:'Biryani'
//     }
// }

// console.log('yummy with '+getFood().name);

//---------------------------------------------------------



let myFuncs=[];

for(var i=0;i<2;i++){
    myFuncs.push(function(){return i;});
}

console.log(myFuncs[0]());
console.log(myFuncs[1]());

