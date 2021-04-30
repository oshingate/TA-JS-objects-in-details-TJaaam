class Book {
  constructor(Title, Category, Author, isRead = false, finishedDate) {
    this.Title = Title;
    this.Category = Category;
    this.Author = Author;
    this.isRead = isRead;
    this.finishedDate = finishedDate;
  }
  markBookAsRead() {
    this.isRead = true;
    this.finishedDate = Date.now();
  }
}

// booklist
class BookList {
  constructor(arrBooks, iBook) {
    this.arrBooks = arrBooks;
    this.iBook = iBook;
  }
  add(arr) {
    this.arrBooks = this.arrBooks.concat(arr);
  }
  getCurrentBook() {
    return this.arrBooks[this.iBook];
  }
  getNextBook() {
    return this.arrBooks[this.iBook + 1];
  }
  getPrevBook() {
    return this.arrBooks[this.iBook - 1];
  }
  changeCurrentBook(i) {
    this.iBook = i;
  }
}

// test
let book1 = new Book("abc", "horror", "onkar1", false, "30-01-2021");
let book2 = new Book("gfd", "horror", "onkar2", false, "28-01-2021");
let book3 = new Book("asdasd", "horror", "onkar3", false, "26-01-2021");
let book4 = new Book("sdg", "horror", "onkar4", false, "23-01-2021");
let book5 = new Book("ghfg", "horror", "onkar5", false, "22-01-2021");
let book6 = new Book("gsdaasd", "horror", "onkar6", false, "22-01-2021");
let book7 = new Book("gsdaasd", "horror", "onkar6", false, "22-01-2021");

let books = new BookList([book1, book2, book3, book4, book5], 2);
console.log(books);

console.group("booklist methods");
console.log(books.getCurrentBook());
console.log(books.getNextBook());
console.log(books.getPrevBook());
console.log(books.add([book6, book7]));
console.log(books);
console.log(books.changeCurrentBook(4));
console.log(books);
console.log(books.getCurrentBook().markBookAsRead());
console.log(books);

console.groupEnd();
