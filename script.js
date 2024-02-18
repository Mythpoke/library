let book = document.querySelector('.book');
let add = document.querySelector('.add');
let bookshelf = document.querySelector('.bookshelf');
const myLibrary = [];

add.addEventListener('click', () => {
    addBookToLibrary();
})

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

   const info = function() {
    return '"' + title + ' by ' + author + ', ' + pages + ' pages, ' + read + '"';
   }
}

function addBookToLibrary(title, author, pages, read) {         //input
   title = prompt('title?');
   author = prompt('author?');
   pages = prompt('pages?');
   read = prompt('read?');

   const book = new Book(title, author, pages, read);           //instantion
   myLibrary.push(book);            
   console.log(myLibrary);
   displayBook();
}




function displayBook() {

    let obj = myLibrary[myLibrary.length - 1];

    const book = document.createElement('div');
    book.classList.add('book');
    bookshelf.appendChild(book);

    const title = document.createElement('div');
    title.textContent = "Title:";
    title.textContent += ` ${obj.title}`;
    book.appendChild(title);

    const hr1 = document.createElement('hr');
    book.appendChild(hr1);

    const author = document.createElement('div');
    author.textContent = "Author:";
    author.textContent += ` ${obj.author}`;
    book.appendChild(author);

    const hr2 = document.createElement('hr');
    book.appendChild(hr2);

    const pages = document.createElement('div');
    pages.textContent = "Pages:";
    pages.textContent += ` ${obj.pages}`;
    book.appendChild(pages);

    const hr3 = document.createElement('hr');
    book.appendChild(hr3);

    const read = document.createElement('div');
    read.textContent = "Status:";
    read.textContent += ` ${obj.read}`;
    book.appendChild(read);

    const hr4 = document.createElement('hr');
    book.appendChild(hr4);

    const buttons = document.createElement('div');
    buttons.classList.add('buttons');
    book.appendChild(buttons);

    const remove = document.createElement('button');
    buttons.appendChild(remove);
    remove.textContent = "Remove";

    const status = document.createElement('button');
    buttons.appendChild(status);
    status.textContent = "Status";
}

addBookToLibrary();
