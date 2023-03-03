import { getSingleAuthor } from './authorData';
import { getSingleBook } from './bookData';

// for merged promises
const getBookDetails = (firebaseKey) => new Promise((resolve, reject) => {
  // GET SINGLE BOOK
  getSingleBook(firebaseKey).then((bookObject) => {
    getSingleAuthor(bookObject.author_id)
      .then((authorObject) => resolve({ ...bookObject, authorObject }));
  }).catch(reject);

  // GET AUTHOR
  // Create an object that has book data and an object named authorObject
});

export default getBookDetails;
