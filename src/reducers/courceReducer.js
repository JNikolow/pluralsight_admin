import * as types from '../actions/actionTypes'

export default function courceReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_COURSES_SUCCESS:
      //debugger;
      return action.courses;

    default: return state;
  }
}