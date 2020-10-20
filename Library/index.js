//If all inputs are filled with proper value, can make a card.
// new book object goes into myLibrary array.
// function that loops over myLibrary array to generate cards.
//The card goes into books-section
//When book added, create a card with timestamp that shows added time.
//When marked read, move the card down, change border color & status & timestamp.
//red for progress, green for read.

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
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.date = date;
    this.read = false;
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
    } else {
        return alert('Please fill out all forms')
    }
}


// Make a card that have title, author, page, generated time and read check button.
// I could just put all into readingEl.innerHTMl = `${}`
function generateCard() {
    readingEl.innerHTML = '';
    for (let i=0; i < myLibrary.length; i++) {
        //Create a card
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-index', i);

        // Create erase button
        const erase = document.createElement('button');
        erase.classList.add('erase-btn');
        erase.setAttribute('id', `${myLibrary[i].title}`);
        erase.innerText = 'X';
        card.appendChild(erase);

        // Create h5 for title and put into the card
        const title = document.createElement('h5');
        title.classList.add('title');
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
        readBtn.innerHTML = 'Read'
        readBtn.classList.add('readBtn');
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

function updatBook(e) {
    let index = e.target.getAttribute('data-index');
    console.log(index);
}

// function eraseBook(e) {
//     const eraseId = e.target.id;
//     console.log(e.target)
// }


addEl.addEventListener('click', function(e){
    addBook();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
    generateCard();
    readingEl.appendChild(cardContainer);
    e.preventDefault();
})

// for (let i=0; i < eraseEl.length; i++) {
//     eraseEl[i].addEventListener('click', function(e){
//         console.log('click')
//         // eraseBook(e);
//         // console.log('Erase')
//         // readingEl.innerHTML = '';
//         // generateCard();
//         // readingEl.appendChild(cardContainer);
//         // e.preventDefault();
//     })
// }

//Initializing - get localstorage and display
getBookList()
generateCard()
readingEl.appendChild(cardContainer);
