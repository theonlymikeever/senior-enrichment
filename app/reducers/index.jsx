import { combineReducers } from 'redux'

//INTIIAL STATE
const initialState = {
  students: [],
  campuses: []
}

//ACTION TYPES
const GET_STUDENTS = 'GET_STUDENTS';
const GET_CAMPUSES = 'GET_CAMPUSES';
const ADD_STUDENT = 'ADD_STUDENT';
const ADD_CAMPUS = 'ADD_CAMPUS';
const DELETE_STUDENT = 'DELETE_STUDENT';
const DELETE_CAMPUS = 'DELETE_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';

//ACITON CREATORS

//REDUCER
const rootReducer = function(state = initialState, action) {
  switch(action.type) {
    default: return state
  }
};

export default rootReducer
