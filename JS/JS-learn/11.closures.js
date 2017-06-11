

// function teach(sub) {
//     console.log('teaching ' + sub)
//     let notes = sub + "-notes";
//     let stories = "bla bla bla";
//     function learn() {
//         console.log('learning after teach with ' + notes);
//     }

//     // learn();
//     console.log('teach-end');
//     return learn;
// }

// let learnFunc = teach('.js');
// learnFunc();


//------------------------------------------------

// why we need closures ?

/*

    -->  to abstract public-behav of any module
    -->  when func executing async, to access parent-scoped data

*/



// to abstract public-behav of any module

// e.g counter module


// const counter = (function() {

//     let count = 0; // private

//     // public
//     function doCount() {
//         count++;
//     }
//     function getCount() {
//         return count;
//     }

//     return {
//         inc: doCount,
//         get: getCount
//     }

// })();

// // let counter = init();


//------------------------------------------------------


// -->  when func executing async, to access parent-scoped data

// function Person(name,age){
//     this.name=name;
//     this.age=age;

//     // let self=this;
//     // window.setInterval(function(){
//     //     self.age++;
//     //     console.log(self.name+"-->"+self.age);
//     // },1000);

//     setInterval(()=>{
//         this.age++;
//         console.log(this.age);
//     },1000);  
// }


// let p=new Person('Ria',2);


