// const s1 = 'Hello';
// console.log(typeof s1)               <------ //string
// console.log(s1.toUpperCase())                <------ //HELLO
// console.log(typeof s1)              //               <------ //string

// const s2 = new String('Hello');
// console.log(typeof s2)               <------ //object
// console.log(s2.toUpperCase())                <------ //HELLO
// console.log(typeof s2)               <------ //object






const book1 = {
    title: 'Book 1',
    author: 'XYZ',
    year: '2112',
    getSummary: function(){
        return `${this.title} was writter by ${this.author} in ${this.year}`
    }
}
console.log(book1.getSummary());


const book2 = {
    title: 'Book 2',
    author: 'RUSH',
    year: '2120',
    getSummary: function(){
        return `${this.title} was writter by ${this.author} in ${this.year}`
    }
}
/*
console.log(book2.getSummary());
console.log(Object.values(book2))               //[ 'Book 2', 'RUSH', '2120', [Function: getSummary] ]
console.log(Object.keys(book1))                 //[ 'title', 'author', 'year', 'getSummary' ]
*/

