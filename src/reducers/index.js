import { combineReducers } from 'redux';
import courses from './courceReducer';

const rootReducer = combineReducers({
  coursesReducer: courses
});

export default rootReducer;