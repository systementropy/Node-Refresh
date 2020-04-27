function Book (title,author,year) {
    this.title = title;
    this.author = author;
    this.year = year;
}
Book.prototype.getSummary = function(){
    return `${this.title} was writter by 
${this.author} in ${this.year}`
}
Book.prototype.getAge = function(){
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old.`
}
Book.prototype.revise = function(newYear){
    this.year = newYear;
    this.revise = true;
    return `${this.title} is ${years} years old.`
}
const book1 = new Book('Book 1','XYZ','2112');
const book2 = new Book('Book 2','RUSH','2120');
console.log(book2.getSummary());
console.log(book2);
