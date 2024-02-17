let book = document.querySelector('.book');
let add = document.querySelector('.add');
const myLibrary = [];
let title;

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

   const info = function() {
    return '"' + title + ' by ' + author + ', ' + pages + ' pages, ' + read + '"';
   }
}

function addBookToLibrary(title, author, pages, read) {
   title = prompt('title?');
   author = prompt('author?');
   pages = prompt('pages?');
   read = prompt('read?');

   const book = new Book(title, author, pages, read);
   myLibrary.push(book);
   console.log(myLibrary);
}

add.addEventListener('click', () => {
    addBookToLibrary();
})