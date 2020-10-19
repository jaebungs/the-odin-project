//If all inputs are filled with proper value, can make a card.
// new book object goes into myLibrary array.
// function that loops over myLibrary array to generate cards.
//The card goes into books-section with read button.
//When book added, create a card with timestamp that shows added time.
//When marked read, move the card down, change border color & status & timestamp.
//red for progress, green for read.

const addEl = document.getElementById('add');
const readingEl = document.querySelector('.reading-container');
const cardContainer = document.createDocumentFragment();
let date = new Date().toISOString().slice(0, 10);


let myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.date = date;
}

function addBook() {
    const titleEl = document.getElementById('title');
    const authorEl = document.getElementById('author');
    const pagesEl = document.getElementById('pages');

    let book = new Book(titleEl.value, authorEl.value, pagesEl.value);

    //Check if any input is empty, push to the array if not.
    if (titleEl.value || authorEl.value || pagesEl.value) {
        myLibrary.push(book)
    } else {
        return alert('Please fill out all forms')
    }
}

function display() {
    for (let i=0; i < myLibrary.length; i++) {
        //Create a card
        const card = document.createElement('div');
        card.classList.add('card');

        // Create h5 for title and put into the card
        const title = document.createElement('h5');
        title.classList.add('title');
        title.innerText = `Title: ${myLibrary[i].title}`;
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

        //Add card to the cardContainer
        cardContainer.appendChild(card)
    }
}


addEl.addEventListener('click', function(e){
    addBook();
    readingEl.innerHTML = '';
    display();
    readingEl.appendChild(cardContainer);
    console.log('Book added');
    e.preventDefault();
})

//Put all cards to reading container.
