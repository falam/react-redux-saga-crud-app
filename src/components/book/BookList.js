import React from 'react';
import PropTypes from 'prop-types';
import BookListRow from './BookListRow';

const BookList = ({books}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>ISBN</th>
        <th>Title</th>
        <th>Author</th>
        <th>Publisher</th>
        <th>Pages</th>
        {/*<th>Website</th>*/}
      </tr>
      </thead>
      <tbody>
      {books.map(book =>
        <BookListRow key={book.isbn} book={book}/>
      )}
      </tbody>
    </table>
  );
};

BookList.propTypes = {
  books: PropTypes.array.isRequired
};

export default BookList;
