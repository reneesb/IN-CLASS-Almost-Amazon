import { deleteSingleAuthor, getAuthors, getSingleAuthor } from '../api/authorData';
import { deleteBook, getBooks, getSingleBook } from '../api/bookData';
import addAuthorForm from '../components/forms/addAuthorForm';
import getBookDetails from '../api/mergedData';
import addBookForm from '../components/forms/addBookForm';
import { showAuthors } from '../pages/authors';
import { showBooks } from '../pages/books';
import viewBook from '../pages/viewBook';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // TODO: CLICK EVENT FOR DELETING A BOOK
    if (e.target.id.includes('delete-book')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');

        deleteBook(firebaseKey).then(() => {
          getBooks().then(showBooks);
        });
      }
    }

    // TODO: CLICK EVENT FOR SHOWING FORM FOR ADDING A BOOK
    if (e.target.id.includes('add-book-btn')) {
      addBookForm();
    }
    // TODO: CLICK EVENT EDITING/UPDATING A BOOK
    if (e.target.id.includes('edit-book-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleBook(firebaseKey).then((bookObj) => addBookForm(bookObj));
    }
    // TODO: CLICK EVENT FOR VIEW BOOK DETAILS
    if (e.target.id.includes('view-book-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getBookDetails(firebaseKey).then(viewBook);
      // getSingleBook(firebaseKey).then(addBookForm); // using the callback method
    }

    // click event for view single author

    // FIXME: ADD CLICK EVENT FOR DELETING AN AUTHOR

    if (e.target.id.includes('delete-author')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE AUTHOR', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteSingleAuthor(firebaseKey).then(() => {
          getAuthors().then(showAuthors);
        });
      }
    }
    // FIXME: ADD CLICK EVENT FOR SHOWING FORM FOR ADDING AN AUTHOR
    if (e.target.id.includes('add-author-btn')) {
      addAuthorForm();
    }

    // FIXME: ADD CLICK EVENT FOR EDITING AN AUTHOR
    if (e.target.id.includes('update-author-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleAuthor(firebaseKey).then((AuthObj) => addAuthorForm(AuthObj));
    }
  });
};

export default domEvents;
