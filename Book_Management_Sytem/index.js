
//creating a class called Book
class Book {
    constructor(title, author, year){
    this.title = title
    this.author = author
    this.year = year
} 
   // function to get the summary of the books
   getSummary(){
    console.log("------------executing from app.js----------")
    return `${this.title} by ${this.author}, published in ${this.year}`
}
}

//creating an constructor of Book and initializing the values
let books = [new Book("Angry VS Patient's", "Gopi", 2023),
    new Book("angry","sam",1898),
    new Book("Patient's", "Gok", 2021)
]

console.log(books)

//exportingt he array books 
export {Book, books};