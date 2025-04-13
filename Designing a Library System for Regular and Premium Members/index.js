function Book(title, author){
        this.title =  title
        this.author = author
        this.isAvailable = true
    };

function Member(name){
        this.name = name
        this.borrowedBooks = []
    };


    //creating prototypical for borrowBook 
Member.prototype.borrowBook = function(book){
       if(this.borrowedBooks.length>=3){
         console.log(`${this.name} has reahed the borrowing limit of 3 books`)
       return
    }

       if(book.isAvailable){
        book.isAvailable = false;
        this.borrowedBooks.push(book.title);
        console.log(`${this.name} as borrowed ${book.title}.`)
       }
       else 
        console.log(`${book.title} is already Borrowed.`)
};

function PremiumMember(name){
    Member.call(this, name); //Inherit properties from Member
    this.specialCollection = true;
}

// Inherit prototype methods from Member
PremiumMember.prototype = Object.create(Member.prototype);
PremiumMember.prototype.constructor = PremiumMember;

//crreating prototypical for borrowBook 
PremiumMember.prototype.borrowBook = function(book){
    if(this.borrowedBooks.length>=5){
      console.log(`${this.name} has reahed the borrowing limit of 5 books`)
    return
    }

    Member.prototype.borrowBook.call(this, book)
}

//creating a constructon on Book
const book1 = new Book("The Alice in the BoarderLand", "paul")
const book2 = new Book("1996 story", "loren")
const book3 = new Book("squid Game", "kore")

//creating a constructor for Member and premiumMember
const regular = new Member("xia")
const premium = new PremiumMember("chotta")

//borrowing the availabe book
regular.borrowBook(book1);
regular.borrowBook(book2);
premium.borrowBook(book3);

//trying to borrow already borrowed book
premium.borrowBook(book1); 
premium.borrowBook(book2);

//giving book back from premiumMember and adding to the book
const borrowfrompremium = regular.borrowBook.bind(regular);
const book4 = new Book("Bounded","girfran")
//borrowing book again 
borrowfrompremium(book4)