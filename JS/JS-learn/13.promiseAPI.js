


//

let foodPandaAPI = {
    getFood() {
        let promise = new Promise(function (resolve, reject) {

            setTimeout(() => {
                resolve('Biryani..');
                //reject('Our delivery boys r busy..');
            }, 5000);

        });
        return promise;
    }
};

let barAPI = {
    getDrink() {
        let promise = new Promise(function (resolve, reject) {

            setTimeout(() => {
                resolve('Beer..');
                //reject('No beer');
            }, 1000);

        });
        return promise;
    }
};



let trainer = {
    doTeach: function () {
        console.log('teaching start....');
        console.log('feels hungry...');
        let promise1 = foodPandaAPI.getFood();
        let promise2 = barAPI.getDrink();
        console.log('got promise from foodPanda, deferring my actions to future with callbacks');

        Promise.race([promise1, promise2]).then((result) => {
            console.log('party ' + result);
        }, (error) => {
            console.log('oops ' + error);
        });
        console.log('continue further teaching end...');
    }
};

trainer.doTeach();