

/*

 this ==> context's owner

*/

// // let pName="Global";
// let person = {
//     pName: 'Nag',
//     sayName: function () {
//         // let pName="Local";
//         // console.log('im ' + pName);
//         //console.log('im ' + person.pName);
//         console.log('im ' + this.pName);
//     }
// };

// // person.sayName();

// let oldPerson = person;
// person = { pName: 'Abc' };

// oldPerson.sayName();

//----------------------------------------------------



// function-binding

// a. static function-binding

// let p1={name:'Nag',sayName:function(){console.log('im '+this.name);}};
// let p2={name:'Ria',sayName:function(){console.log('im '+this.name);}};


// function sayNameForAll() {
//     console.log('im ' + this.name);
// }

// let p1 = { name: 'Nag', sayName: sayNameForAll };
// let p2 = { name: 'Ria', sayName: sayNameForAll };

// sayNameForAll(); // function-invocation ( this ==> global-obj)
// p1.sayName(); // method-invocation ( this ==> invoker-obj)
// p2.sayName();


// a. dynamic function-binding


let p = { name: 'Nag' };
let e = { name: 'Sync' };


// 
let greetLib = {
    sayName: function (message, from) {
        console.log(message + ' im ' + this.name + "-" + from);
    }
};

// // way-1
// greetLib.sayName.call(p,"Hello","CHN");
// greetLib.sayName.call(e,"hey","BLR");


// way-2
// greetLib.sayName.apply(p,["Hello","CHN"]);
// greetLib.sayName.apply(e,["hey","BLR"]);


// way-3

// let newF=greetLib.sayName.bind(p,"Hello",'Universe');
// newF();
// newF();

// let newFF=greetLib.sayName.bind(e);
// newFF("dude","BLR");
// newFF("Hey","CHN");


//-----------------------------------------------------------------


// in .js-lang , we can invoke in 3 ways

/*

    // a. function invocation   ( this ==> global-obj )
    // b. static-function binding/method invocation  ( this ==> invoker-obj )
    // c. dynamic-function binding / call/apply/bind invcation ( this ==> arg-obj)

*/

//-----------------------------------------------------------------

// Quiz


// let trainer = {
//     name: 'Nag',
//     doTeach: function () {
//         console.log(this.name + ' teaching .js');

//         let self=this;
//         let doLearn = function () {
//             console.dir(this);
//             console.log(this.name + ' learning .js from ' + self.name);
//         }

//         //doLearn();
//         let emp = { name: 'Sync' };

//         doLearn.call(emp);
//     }
// };

// trainer.doTeach();

// let newTrainer={name:'Praveen'};
// trainer.doTeach.call(newTrainer);

//---------------------------------------------------------------------------------



// Arrow function

// let getPrice=function(){return 100.00};

// let getPrice=()=>{return 100.00};
// let getPrice=()=>100.00;
// let getPrice=(count)=>count*100.00
// let getPrice=count=>count*100.00
// let getPrice=(count,tax)=>count*100.00+tax;
// let getPrice = (count, tax) => {
//     let price = count * 100.00;
//     let total = price + tax;
//     return total;
// };


//-----------------------------------------------------


/*

 why we need arrow-function ?

    --> they always bound to creator
    --> not bindable to any object dynamically 


*/


// let trainer = {
//     name: 'Nag',
//     doTeach: function () {
//         console.log(this.name + ' start-teach');

//         // let askQuesOnTrainer = function (ques) {
//         //     console.dir(this);
//         //     console.log(this.name + " anwering " + ques);
//         // };

//         // or

//         let askQuesOnTrainer = (ques) => {
//             console.dir(this);
//             console.log(this.name + " anwering " + ques);
//         };

//         console.log(this.name + ' end-teach');
//         return askQuesOnTrainer
//     }
// };

// let askQuesOnTrainer = trainer.doTeach();

// askQuesOnTrainer('ques-1');

// let newTrainer = { name: 'Praveen' };
// askQuesOnTrainer.call(newTrainer, 'ques-2');




// Quiz




// let invoice = {
//     num: 123,
//     process: function () {
//         console.log(this.num + " processed");
//     }
// };

// let invoice = {
//     num: 123,
//     process:  () => {
//         console.log(this.num + " processed");
//     }
// };


let invoice = {
    num: 123,
    process: function () {
        console.log(this.num + " processed partially");
        return () => {
            console.log(this.num + " processed completly");
        }
    }
};


let completeFunc = invoice.process();
// completeFunc();

function func() {
    completeFunc();
}
func();
