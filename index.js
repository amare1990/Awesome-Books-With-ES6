import BookImplement from './modules/bookimplement.js';
import Book from './modules/book.js';
import { DateTime } from './modules/luxon.js';

window.onload = () => {
  const time = document.querySelector('.time');

  setInterval(() => {
    const date = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
    time.innerHTML = date;
  }, 1000);

  const bookImplemObj = new BookImplement();

  const entireBookJSON = localStorage.getItem('bookKey2');

  if (entireBookJSON) {
    bookImplemObj.bookArray = JSON.parse(entireBookJSON);
    bookImplemObj.showBooks();
  }

  const addBtn = document.querySelector('.add-btn');

  addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const title = document.querySelector('.title').value;
    const author = document.querySelector('.author').value;
    const book = new Book(title, author);
    bookImplemObj.bookArray.push(book);
    bookImplemObj.showBooks();
    localStorage.setItem('bookKey2', JSON.stringify(bookImplemObj.bookArray));
    document.querySelector('.title').value = '';
    document.querySelector('.author').value = '';
  });
}; // End of Window onload event

// Links
const bookListLink = document.querySelector('.list-anchor');
const addBookLink = document.querySelector('.add-new-anchor');
const contactLink = document.querySelector('.contact-anchor');

// Section
const bookList = document.querySelector('.book-list-section');
const addBook = document.querySelector('.add-new-section');
const contactUs = document.querySelector('.contact-section');

bookListLink.addEventListener('click', () => {
  bookList.classList.remove('hidden');
  bookListLink.classList.add('active');
  addBookLink.classList.remove('active');
  contactLink.classList.remove('active');
  addBook.classList.add('hidden');
  contactUs.classList.add('hidden');
});

addBookLink.addEventListener('click', () => {
  bookList.classList.add('hidden');
  addBook.classList.remove('hidden');
  addBookLink.classList.add('active');
  bookListLink.classList.remove('active');
  contactLink.classList.remove('active');
  contactUs.classList.add('hidden');
});

contactLink.addEventListener('click', () => {
  bookList.classList.add('hidden');
  addBook.classList.add('hidden');
  contactUs.classList.remove('hidden');
  contactLink.classList.add('active');
  addBookLink.classList.remove('active');
  bookListLink.classList.remove('active');
});