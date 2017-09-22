import { combineReducers } from 'redux'
import axios from 'axios'
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

//INTIIAL STATE
const initialState = {
  students: [],
  campuses: []
}

//ACTION TYPES
const GOT_STUDENTS = 'GOT_STUDENTS';
const GOT_CAMPUSES = 'GOT_CAMPUSES';

//ACITON CREATORS
export function getStudents (students){
  const action = { type: GOT_STUDENTS, students }
  return action;
}
export function getCampuses (campuses){
  const action = { type: GOT_CAMPUSES, campuses }
  return action;
}

//REDUCER
const rootReducer = function(state = initialState, action) {
  switch(action.type) {
    case GOT_STUDENTS:
      return {
        ...state,
        students: action.students
    }
    case GOT_CAMPUSES:
      return {
        ...state,
        campuses: action.campuses
    }
    default: return state
  }
};

export default rootReducer
