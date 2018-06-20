import * as types from './actionTypes'
import courseAPI from '../api/mockCourseApi';

export function loadCorsesSuccess(courses) {
  //debugger;
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function loadCourses() {
  return function (dispatch) {
    return courseAPI.getAllCourses().then(courses => {
      dispatch(loadCorsesSuccess(courses))
    }).catch(error => {
      throw (error);
    });
  };
}