import expect from 'expect';
import * as bookActions from './bookActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

// Test a sync action
describe('Book Actions', () => {
  describe('createBookSuccess', () => {
    it('should create a CREATE_BOOK_SUCCESS action', () => {
      //arrange
      const book = {isbn: 'clean-code', title: 'Clean Code'};
      const expectedAction = {
        type: types.CREATE_BOOK_SUCCESS,
        book: book
      };

      //act
      const action = bookActions.createBookSuccess(book);

      //assert
      expect(action).toEqual(expectedAction);
    });
  });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
  afterEach(() => {
    //nock.cleanAll();
  });

  it('should create BEGIN_AJAX_CALL and LOAD_BOOKS_SUCCESS when loading courses', (done) => {
    // Here's an example call to nock.
    // nock('http://example.com/')
    //   .get('/courses')
    //   .reply(200, { body: { course: [{ id: 1, firstName: 'Cory', lastName: 'House'}] }});

    const expectedActions = [
      {type: types.BEGIN_AJAX_CALL},
      {type: types.LOAD_BOOKS_SUCCESS, body: {books: [{isbn: 'clean-code', title: 'Clean Code'}]}}
    ];

    const store = mockStore({courses: []}, expectedActions, done);
    store.dispatch(bookActions.loadBooks()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(expectedActions[0].type);
      expect(actions[1].type).toEqual(expectedActions[1].type);
      done();
    });
  });
});
