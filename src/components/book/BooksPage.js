import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as bookActions from '../../actions/bookActions';
import BookList from './BookList';

class BooksPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    //this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

  bookRow(book, index) {
    return <div key={index}>{book.title}</div>;
    /*
    {books.map((book, index) =>
      this.bookRow(book, index)
    )}
    */
  }

  redirectToAddCoursePage() {
    //browserHistory.push('/course');
  }

  render() {
    const {books} = this.props;

    return (
      <div>
        <h1>Books</h1>
        <input type="submit"
               value="Add Books"
               className="btn btn-primary"
               //onClick={this.redirectToAddCoursePage}
               />
        <BookList books={books} />
      </div>
    );
  }
}

BooksPage.propTypes = {
  books: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(bookActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksPage);
