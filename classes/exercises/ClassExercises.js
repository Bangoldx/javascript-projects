// Define your Book class here:
class Book {
    constructor(title, author, copywrite, isbn, pages, timesCheckedOut, discarded) {
        this.title = title;
        this.author = author;
        this.copywrite = copywrite;
        this.isbn = isbn;
        this.pages = pages;
        this.timesCheckedOut = timesCheckedOut;
        this.discarded = discarded;
    }
    checkOut(uses = 1) {
        this.timesCheckedOut += uses;
    }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor(title, author, copywrite, isbn, pages, timesCheckedOut, discarded) {
        super(title, author, copywrite, isbn, pages, timesCheckedOut, discarded);
    }

    dispose(currentYear) {
        if (currentYear - this.copywrite > 5) {
            this.discarded = "Yes"
        }
    }
}

class Novel extends Book {
    constructor(title, author, copywrite, isbn, pages, timesCheckedOut, discarded) {
        super(title, author, copywrite, isbn, pages, timesCheckedOut, discarded);
        if (this.timesCheckedOut > 100) {
            this.discarded = "Yes";
        }
    }
}


// Declare the objects for exercises 2 and 3 here:
let prideAndPredijuce = new Novel("Pride and Predijuce", "Jane Austen", 1813, 1111111111111, 432, 32, "No");
let shipBuidling = new Manual("Top Secret Shuttle Building Manual", "Redacted", 2013, 0o0, 1147, 1, "No");


// Code exercises 4 & 5 here:
shipBuidling.dispose(2024);
prideAndPredijuce.checkOut(5)

console.log(shipBuidling);
console.log(prideAndPredijuce);