function Book (title,author,year) {
    this.title = title;
    this.author = author;
    this.year = year;
}
Book.prototype.getSummary = function(){
    return `${this.title} was writter by 
${this.author} in ${this.year}`
}
function Magazine (title, author, year, month){
    Book.call(this, title, author, year)
    this.month = month;
}
Magazine.prototype = Object.create(Book.prototype);                 // Inherit the prototype
Magazine.prototype.constructor = Magazine;                          // Use Magazine prototype
const mag1 = new Magazine('Mag1','Ceres','2019','August')
console.log(mag1.getSummary());
