import { combineReducers } from 'redux';
import courses from './courceReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
  coursesReducer: courses,
  authorsReducer: authors
});

export default rootReducer;