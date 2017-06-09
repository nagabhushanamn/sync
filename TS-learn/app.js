// class Person {
//     name: string;
//     sayName(): void {
//         console.log('im ' + this.name);
//     }
// }
// let person = new Person();
// person.name = "Nag";
//--------------------------------------------
// enum Category { LANGUAGE = 1, FRAMEWORK, OTHER };
// function getAllBooks() {
//     let books = [
//         { title: 'JavaScript', author: 'Nag', available: true,categor:Category.LANGUAGE },
//         { title: 'TypeScript', author: 'Ria', available: false,categor:Category.LANGUAGE },
//         { title: 'Angular', author: 'Nag', available: true,categor:Category.FRAMEWORK }
//     ];
//     return books;
// }
// // let allBooks = getAllBooks();
// // allBooks.push({ title: 'TS', author: 'Nag', available: true });
// // // Use-case: 1
// function logFirstAvaialbleBook(books:Array<any>):void {
//     let totalBooks:number = books.length;
//     let firstAvailable:string = '';
//     for (let book of books) {
//         if (book.available) {
//             firstAvailable = book.title;
//             break;
//         }
//     }
//     console.log(`Total books : ${totalBooks}`);
//     console.log(`First Available : ${firstAvailable}`);
// }
// const allBooks = getAllBooks();
// logFirstAvaialbleBook(allBooks);
//---------------------------------------------------
var mrfWheel = {
    rotate: function () {
        console.log('MRF Wheel rotating...');
    }
};
var myCar = {
    move: function (wheel) {
        wheel.rotate();
        console.log('car moving....');
    }
};
myCar.move(mrfWheel);
