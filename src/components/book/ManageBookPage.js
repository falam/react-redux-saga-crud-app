import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as bookActions from '../../actions/bookActions';
import BookForm from './BookForm';
//import {authorsFormattedForDropdown} from '../../selectors/selectors';
//import toastr from 'toastr';

export class ManageBookPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      book:{},
      errors: {},
      saving: false
    };

    this.updateBookState = this.updateBookState.bind(this);
    this.saveBook = this.saveBook.bind(this);
  }

/*
  componentWillReceiveProps(nextProps) {
    if (this.props.book.isbn != nextProps.book.isbn) {
      // Necessary to populate form when existing book is loaded directly.
      this.setState({book: Object.assign({}, nextProps.book)});
    }
  }
*/

  // Necessary to populate form when existing book is loaded directly.
  static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.book.isbn !== prevState.book.isbn){
      return { book: nextProps.book};
    }
    else return null;
  }

  updateBookState(event) {
    const field = event.target.name;
    let book = Object.assign({}, this.state.book);
    book[field] = event.target.value;
    return this.setState({book: book});
  }

  bookFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.book.title.length < 4) {
      errors.title = 'Title must be at least 4 characters.';
      formIsValid = false;
    }
    if (this.state.book.publisher.length < 3) {
      errors.publisher = 'Publisher must be at least 3 characters.';
      formIsValid = false;
    }

    this.setState({errors: errors});
    return formIsValid;
  }

  saveBook(event) {
    event.preventDefault();

    if (!this.bookFormIsValid()) {
      return;
    }

    this.setState({saving: true});

    this.props.actions.saveBook(this.state.book)
      .then(() => this.redirect())
      .catch(error => {
        //toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirect() {
    this.setState({saving: false});
    //toastr.success('Book saved');
    this.context.router.history.push('/books');
  }

  render() {
    return (
      <BookForm
        allAuthors={this.props.authors}
        onChange={this.updateBookState}
        onSave={this.saveBook}
        book={this.state.book}
        errors={this.state.errors}
        saving={this.state.saving}
        />
    );
  }
}

ManageBookPage.propTypes = {
  book: PropTypes.object.isRequired,
  //authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
ManageBookPage.contextTypes = {
  router: PropTypes.object
};

function getBookByIsbn(books, isbn) {
  const book = books.filter(book => book.isbn == isbn);
  if (book) return book[0]; //since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps) {
  const bookId = ownProps.match.params.isbn; // from the path `/book/:isbn`

  let book = {isbn: '', title: '', authorId: '', publisher: ''};

  if (bookId && state.books.length > 0) {
    book = getBookByIsbn(state.books, bookId);
  }

  return {
    book: book,
    authors: state.authors //FormattedForDropdown(state.authors)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(bookActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageBookPage);
