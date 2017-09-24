import { combineReducers, applyMiddleware, createStore } from 'redux'
import axios from 'axios'
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

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

//THUNK CREATORS
export function fetchStudents () {
  return function thunk (dispatch) {
    return axios.get('/api/students')
    .then( res => res.data )
    .then( students => {
      const action = getStudents(students);
      dispatch(action);
    })
  }
}

export function fetchCampuses () {
  return function thunk (dispatch) {
    return axios.get('/api/campuses')
    .then( res => res.data )
    .then( campuses => {
      const action = getCampuses(campuses);
      dispatch(action);
    })
  }
}

//REDUCER
const rootReducer = function(state = initialState, action) {
  switch (action.type) {
    case GOT_STUDENTS:
      return Object.assign({}, state, {students: action.students})
    //   return {
    //     ...state,
    //     students: action.students
    // }
    case GOT_CAMPUSES:
      return Object.assign({}, state, {campuses: action.campuses})
    //   return {
    //     ...state,
    //     campuses: action.campuses
    // }
    default: return state
  }
};

// console.log(typeof rootReducer)
// const store = createStore(rootReducer);

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger())));

export default rootReducer;
