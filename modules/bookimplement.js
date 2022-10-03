class BookImplement {
  constructor() {
    this.bookArray = [];
    this.booksContainer = document.querySelector('.book-from-storage');
    this.parser = new DOMParser();
  }

  removeBook = (e, newBookElement) => {
    const index = e.target.getAttribute('myIndex');

    const checkBtnclicked = (element, i) => {
      if (i === parseInt(index, 10)) {
        return false;
      }
      return true;
    };

    this.bookArray = this.bookArray.filter(checkBtnclicked);
    newBookElement.remove();
    localStorage.setItem('bookKey2', JSON.stringify(this.bookArray));
    this.showBooks();
  }

  showBooks = () => {
    this.booksContainer.innerHTML = '';
    this.bookArray.forEach((e, i) => {
      const newBook = `
        <div class = "popped-books">
          <p>${e.title} by ${e.author} </p>
          <button type="button" class="remove-btn" myIndex ="${i}" >Remove</button>
        </div>
      `;
      const newBookElement = this.parser.parseFromString(newBook, 'text/html').body.firstChild; const removeBtn = newBookElement.querySelector('.remove-btn');
      removeBtn.addEventListener('click', (e) => {
        this.removeBook(e, newBookElement);
      });
      this.booksContainer.append(newBookElement);
    });
  }
} // End of BookImplement class

export default BookImplement;