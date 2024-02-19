let addBook = document.querySelector('.add');
let bookshelf = document.querySelector('.bookshelf');
let dialog = document.querySelector('dialog');
let submit = document.querySelector('#submit');

const myLibrary = [
    {
        title: "Cosmos",
        author: "Carl Sagan",
        pages: "396",
        read: "yes",
    },
    {
        title: "A Brief History Of Time",
        author: "Stephen Hawking",
        pages: "256",
        read: "yes",
    },
    {
        title: "Dune",
        author: "Frank Herbert",
        pages: "896",
        read: "yes",
    }
];

displayExistingBooks();
addBookToLibrary();

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

   const info = function() {
    return '"' + title + ' by ' + author + ', ' + pages + ' pages, ' + read + '"';
   }
};

const proto = Object.create(myLibrary);

proto[0].read = "no";
console.log(proto[0].read);

function addBookToLibrary(title, author, pages, read) {    

    addBook.addEventListener('click', () => {                           // shows dialog
        dialog.showModal();
    })
   
   submit.addEventListener('click',(event) => {
        event.preventDefault();

        title = document.querySelector('#name').value;
        author = document.querySelector('#author').value;
        pages = document.querySelector('#pages').value;
        read = document.querySelector('#read').value;

        document.querySelector('#name').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#pages').value = '';
        document.querySelector('#read').value = ''; 

        dialog.close();                                             // exits dialog
        
        const instation = new Book(title, author, pages, read);           //instantion
        myLibrary.push(instation);            
        displayBook(myLibrary.length - 1);
   })
   
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
    read.textContent = "Status:";
    read.textContent += ` ${myLibrary[i].read}`;
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
}

function toggleStatus(book, status, read) {
    status.addEventListener('click', () => {
        myLibrary[book.dataset.index].read = 'no';
        read.textContent = "Status: " + `${myLibrary[book.dataset.index].read}`;
    })
}

function displayExistingBooks() {

    for (let i = 0; myLibrary.length > i; i++) {
        displayBook(i);  
    }
};