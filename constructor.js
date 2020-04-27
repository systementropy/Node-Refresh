function Book (title,author,year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function(){
        return `${this.title} was writter by 
${this.author} in ${this.year}`
    }
}

const book1 = new Book('Book 1','XYZ','2112');
const book2 = new Book('Book 2','RUSH','2120');
console.log(book2.getSummary());
console.log(book2)