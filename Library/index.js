const addEl = document.getElementById('add');
const readingEl = document.querySelector('.reading-container');
const cardContainer = document.createDocumentFragment();
const titleEl = document.getElementById('title');
const authorEl = document.getElementById('author');
const pagesEl = document.getElementById('pages');

//current date
let date = new Date().toISOString().slice(0, 10);

let myLibrary = [];

// book constructor
class Book{
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.date = date;
        this.read = false;
    }
}

function getBookList() {
    const local = JSON.parse(window.localStorage.getItem('myLibrary'));
    local.forEach(function(book){
        myLibrary.push(book);
    })
    return myLibrary
}

function addBook() {
    //Check if any input is empty, push to the array if not.
    if (titleEl.value.trim() && authorEl.value.trim() && pagesEl.value.trim()) {
        let book = new Book(titleEl.value, authorEl.value, pagesEl.value);
        myLibrary.push(book);
        // save to localStorage
        window.localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
        titleEl.reset();
        authorEl.reset();
        pagesEl.reset();
    } else {
        return alert('Please fill out all forms')
    }
}


// Create offScreen DOM tree. A card that have title, author, page, generated time and read check button.
// I could just put all into readingEl.innerHTMl = `${}`
function generateCard() {
    readingEl.innerHTML = '';
    for (let i=0; i < myLibrary.length; i++) {
        //Create a card
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-index', i);
        // if the book is read, add class to change the color
        if (myLibrary[i].read === true) {
            card.classList.add('read');
        }

        // Create erase button
        const erase = document.createElement('button');
        erase.classList.add('erase-btn');
        // if the book is read, add class to change the color
        if (myLibrary[i].read === true) {
            erase.classList.add('read-erase-btn');
        }
        erase.setAttribute('id', `${myLibrary[i].title}`);
        erase.innerText = 'X';
        card.appendChild(erase);

        // Create h5 for title and put into the card
        const title = document.createElement('h5');
        title.classList.add('title');
        if (myLibrary[i].read === true) {
            title.classList.add('read-title');
        }
        title.innerText = `${myLibrary[i].title}`;
        card.appendChild(title);

        // Create p for author and put into the card
        const author = document.createElement('p');
        author.classList.add('author');
        author.innerText = `By: ${myLibrary[i].author}`;
        card.appendChild(author);

        // Create p for pages and put into the card
        const pages = document.createElement('p');
        pages.classList.add('pages');
        pages.innerText = `Pages: ${myLibrary[i].pages}`;
        card.appendChild(pages);

        // Create p for date and put into the card
        const date = document.createElement('p');
        date.classList.add('date');
        date.innerText = `Listed: ${myLibrary[i].date}`;
        card.appendChild(date);

        // Create button for read or not
        const readBtn = document.createElement('button');
        readBtn.classList.add('readBtn');
        if (myLibrary[i].read === true) {
            readBtn.innerHTML = 'Unread';
        } else {
            readBtn.innerHTML = 'Read';
        }
        

        readBtn.setAttribute('id', `${myLibrary[i].title}-read`);
        card.appendChild(readBtn)

        // Create div for book styling.
        const cardBottom = document.createElement('div');
        cardBottom.classList.add('card-bottom');
        card.appendChild(cardBottom);

        //Add card to the cardContainer
        cardContainer.appendChild(card)
    }
}

// Display. 
function display() {
    readingEl.appendChild(cardContainer);
    addEventListeners()
}

// Add erase and read eventListeners
function addEventListeners() {
    let eraseEl = document.querySelectorAll('.erase-btn');
    let readBtnEl = document.querySelectorAll('.readBtn');

    eraseEl.forEach(function(erase) {
        erase.addEventListener('click', function(e){
            eraseBook(e);
            generateCard();
            display();
        })
    })

    readBtnEl.forEach(function(read) {
        read.addEventListener('click', function(e){
            updateBook(e)
            generateCard();
            display();
        })
    })
}

function eraseBook(e) {
    // get data-index from its parents div(which is .card)
    let index = e.target.parentNode.getAttribute('data-index');
    myLibrary.splice(index, 1);
    window.localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

function updateBook(e) {
    let index = e.target.parentNode.getAttribute('data-index');

    // toggle read property
    myLibrary[index].read = !myLibrary[index].read;
    window.localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

addEl.addEventListener('click', function(e){
    addBook();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
    generateCard();
    display()
    e.preventDefault();
})


//Initializing - get localstorage and display
getBookList()
generateCard()
display()