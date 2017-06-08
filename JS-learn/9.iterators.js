

// let arr=["idly","vada","poori"];

// let [menu1]=arr;
// let newMenu=[...arr];
// for(let item of arr){

// }

//----------------------------------


let idMaker = {
    [Symbol.iterator]() {
        let id = 0;
        return {
            next() {
                return { value: id < 10 ? ++id : undefined, done: id == 10 ? true : false };
            }
        }
    }
};

let ids = [...idMaker];
let [id1, id2, id3] = idMaker;
console.log(ids);
console.log(id3);
for (let id of idMaker) {
    console.log(id);
}