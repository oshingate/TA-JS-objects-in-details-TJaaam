class BookDiv {
  constructor() {
    this.bookArr = [];
  }
  addBook(newBook) {
    this.bookArr.push(newBook);
    this.displayUI();
  }
  handleDelet(isbn) {
    let index = this.bookArr.findIndex((ele) => ele.isbn === isbn);
    this.bookArr.splice(index, 1);
    this.displayUI();
  }
  displayUI() {
    root.innerHTML = "";
    this.bookArr.forEach((ele) => {
      let ui = ele.createUI();
      ui.querySelector(".cross").addEventListener(
        "click",
        this.handleDelet.bind(this, ele.isbn)
      );
      root.append(ui);
    });
  }
}

// =============  book class ===================
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }

  createUI() {
    let book = document.createElement("div");
    book.classList.add("book", "flex");

    let bookTitle = document.createElement("div");
    bookTitle.classList.add("flex-40");
    bookTitle.innerText = this.title;

    let bookAuthor = document.createElement("div");
    bookAuthor.classList.add("flex-25");
    bookAuthor.innerText = this.author;

    let bookIsbn = document.createElement("div");
    bookIsbn.classList.add("flex-25");
    bookIsbn.innerText = this.isbn;

    let bookCross = document.createElement("div");
    bookCross.classList.add("flex-10");
    bookCross.innerHTML = `<i class="far fa-times-circle cross"></i>`;

    book.append(bookTitle, bookAuthor, bookIsbn, bookCross);
    return book;
  }
}

// main JS
let allBooks = new BookDiv();

let root = document.querySelector(".book-main-div");

let form = document.querySelector("form");
let submitBtn = document.querySelector(".addToList");
let formTitle = document.querySelector("#title");
let formAuthor = document.querySelector("#author");
let formisbn = document.querySelector("#isbn");

// submitBtn event
function handleSubmitEvent(title, author, isbn) {
  if (title.length !== 0 && author.length !== 0 && isbn.length !== 0) {
    let newBook = new Book(title, author, isbn);
    allBooks.addBook(newBook);
  }
}
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  handleSubmitEvent(form.title.value, form.author.value, form.isbn.value);
});

// test
let book1 = new Book("onkarBook", "onkar", 2416541);
let book2 = new Book("fdvhjvb", "onkar2", 96425);
console.log(allBooks);

allBooks.addBook(book1);
allBooks.addBook(book2);
console.log(allBooks);

// ==========displayUI  function ti display all list of books
allBooks.displayUI();
