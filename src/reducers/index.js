import { combineReducers } from 'redux';
import courses from './courceReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  coursesReducer: courses,
  authorsReducer: authors,
  ajaxCallsInProgress
});

export default rootReducer;