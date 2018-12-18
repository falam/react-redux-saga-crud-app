import * as types from './actionTypes';
import bookApi from '../api/mockBookApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadBooksSuccess(books) {
  return { type: types.LOAD_BOOKS_SUCCESS, books};
}

export function createBookSuccess(book) {
  return {type: types.CREATE_BOOK_SUCCESS, book};
}

export function updateBookSuccess(book) {
  return {type: types.UPDATE_BOOK_SUCCESS, book};
}

export function loadBooks() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return bookApi.getAllBooks().then(books => {
      dispatch(loadBooksSuccess(books));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveBook(book) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());

    let updateMode = book.isbn ? true : false;

    return bookApi.saveBook(book).then(book => {
      book.isbn && updateMode ? dispatch(updateBookSuccess(book)) :
        dispatch(createBookSuccess(book));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
