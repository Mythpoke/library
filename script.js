const addBook = document.querySelector('.add');
const bookshelf = document.querySelector('.bookshelf');
const dialog = document.querySelector('dialog');
const inputName = document.querySelector('#name');
const inputAuthor = document.querySelector('#author');
const inputPages = document.querySelector('#pages');
const form = document.querySelector('form');
const myLibrary = [];

class Book {                            // classes are not hoisted

    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    toggle() {
        this.read = !this.read;
    }
}

myLibrary.push(new Book("Cosmos", "Carl Sagan", "396", true)); 
myLibrary.push(new Book("A Brief History Of Time", "Stephen Hawking", "256", false)); 
myLibrary.push(new Book("Dune", "Frank Herbert", "896", false));    

displayExistingBooks();
addBookToLibrary();

// function Book(title, author, pages, read) {          contructors are hoisted, because they are classes
//     this.title = title; 
//     this.author = author;   
//     this.pages = pages;   
//     this.read = read;                
// };

// Book.prototype.toggle = function() {
//     this.read = !this.read;
// };



function addBookToLibrary(title, author, pages, read) {    

    addBook.addEventListener('click', () => {                           // shows dialog
        dialog.showModal();
    });
   
    inputName.addEventListener('invalid', () => {
        inputName.setCustomValidity('The book name must be filled!');
    });

    inputName.addEventListener('input', () => {
        inputName.setCustomValidity('');
    });

    inputAuthor.addEventListener('invalid', () => {
        inputAuthor.setCustomValidity('The author name must be filled!');
    });

    inputAuthor.addEventListener('input', () => {
        inputAuthor.setCustomValidity('');
    });

    inputPages.addEventListener('invalid', () => {
        inputPages.setCustomValidity('The number of pages must be filled!');
    });

    inputPages.addEventListener('input', () => {
        inputPages.setCustomValidity('');
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        title = document.querySelector('#name').value;
        author = document.querySelector('#author').value;
        pages = document.querySelector('#pages').value;
        read = document.querySelector('#read').checked;
        console.log(read);
        read === false ? read = false : read = true;
        document.querySelector('#name').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#pages').value = '';
        document.querySelector('#read').checked = false; 

        dialog.close();                                             // exits dialog
        
        const newBook = new Book(title, author, pages, read);           //instantion
        myLibrary.push(newBook);            
        displayBook(myLibrary.length - 1);
   });
   
};



function displayBook(i) {

    const book = document.createElement('div');
    book.setAttribute('data-index', `${i}`);
    book.classList.add('book');
    bookshelf.appendChild(book);

    const title = document.createElement('div');
    title.textContent = "Title:";
    title.textContent += ` ${myLibrary[i].title}`;
    book.appendChild(title);

    const hr1 = document.createElement('hr');
    book.appendChild(hr1);

    const author = document.createElement('div');
    author.textContent = "Author:";
    author.textContent += ` ${myLibrary[i].author}`;
    book.appendChild(author);

    const hr2 = document.createElement('hr');
    book.appendChild(hr2);

    const pages = document.createElement('div');
    pages.textContent = "Pages:";
    pages.textContent += ` ${myLibrary[i].pages}`;
    book.appendChild(pages);

    const hr3 = document.createElement('hr');
    book.appendChild(hr3);

    const read = document.createElement('div');
    read.textContent = "Status:" + ` ${myLibrary[i].read === true ? "Already read": "Not read"}`;
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

    removeBook(book, remove);
    toggleStatus(book, status, read);
};

function removeBook(book, remove) {
    remove.addEventListener('click',() => {
        
        book.remove();
        myLibrary.splice(book.dataset.index, 1); 

        let books = document.querySelectorAll('.book');
        for(let i = 0; books.length > i; i++) {
            books[i].dataset.index = `${i}`;
        }   
    });
};

function toggleStatus(book, status, read) {
    status.addEventListener('click', () => {
        myLibrary[book.dataset.index].toggle();
        myLibrary[book.dataset.index].read === true ? read.textContent = "Status: Already read": read.textContent = "Status: Not read";
    })
};

function displayExistingBooks() {

    for (let i = 0; myLibrary.length > i; i++) {
        displayBook(i);  
    }
};



console.table(myLibrary);