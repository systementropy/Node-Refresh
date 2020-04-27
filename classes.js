class Book{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary(){
        return `${this.title} was writter by 
${this.author} in ${this.year}`
    }
    getAge(){
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old.`
    }
    revise(newYear){
        this.year = newYear;
        this.revise = true;
        return `${this.title} is ${years} years old.`
    }
    static topBookStores(){
        return 'Om BS'
    }
}
console.log(Book.topBookStores())
// const book1 = new Book('Book 1','XYZ','2112');
// const book2 = new Book('Book 2','RUSH','2120');
// console.log(book1)

class Magazine extends Book{
    constructor(title,author,year,month){
        super(title,author,year);
        this.month = month;
    }
}