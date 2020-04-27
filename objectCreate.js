const bookProtos = {
    getSummary: function(){
        return `${this.title} was writter by 
${this.author} in ${this.year}`
    },
    getAge: function(){
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old.`
    }
}

const book1 = Object.create(bookProtos);
book1.title= 'Book 1';
book1.author= 'XYZ';
book1.year= '2112';

const book2 = Object.create(bookProtos,{
    title: {value:'Book 2'},
    author: {value:'RUSH'},
    year: {value:'2120'}
})
console.log(book1);
console.log(book2.getSummary());
console.log(book2);
