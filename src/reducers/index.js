import {combineReducers} from 'redux';
import books from './bookReducer';

const rootReducer = combineReducers({
  books
  //authors,
});

export default rootReducer;
