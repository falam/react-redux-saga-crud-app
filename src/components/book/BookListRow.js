import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const BookListRow = ({book}) => {
  return (
    <tr>
      <td>{book.isbn}</td>
      <td><Link to={'/book/' + book.isbn}>{book.title}</Link></td>
      <td>{book.author}</td>
      <td>{book.publisher}</td>
      <td>{book.pages}</td>
      {/*<td><a href={book.website} target="_blank">{book.title}</a></td>*/}
    </tr>
  );
};

BookListRow.propTypes = {
  book: PropTypes.object.isRequired
};

export default BookListRow;
