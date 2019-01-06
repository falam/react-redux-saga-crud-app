import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as bookActions from '../actions/bookActions';

describe('Store', function() {
  it('Should handle creating books', function() {
    // arrange
    const store = createStore(rootReducer, initialState);
    const book = {
      title: "Clean Code"
    };

    // act
    const action = bookActions.createBookSuccess(book);
    store.dispatch(action);

    // assert
    const actual = store.getState().books[0];
    const expected = {
      title: "Clean Code"
    };

    expect(actual).toEqual(expected);
  });
});
