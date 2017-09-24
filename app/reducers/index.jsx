import axios from 'axios'

//INTIIAL STATE
const initialState = {
  students: [],
  campuses: [],
  newCampusEntry: '',
  newStudentEntry: ''
}

//ACTION TYPES
const GOT_STUDENTS = 'GOT_STUDENTS';
const GOT_CAMPUSES = 'GOT_CAMPUSES';
const ADD_CAMPUS = 'ADD_CAMPUS';
const INPUT_CAMPUS = 'INPUT_CAMPUS';
const ADD_STUDENT = 'ADD_STUDENT';
const INPUT_STUDENT = 'INPUT_STUDENT';

//ACITON CREATORS
export function getStudents (students){
  const action = { type: GOT_STUDENTS, students }
  return action;
}
export function getCampuses (campuses){
  const action = { type: GOT_CAMPUSES, campuses }
  return action;
}

export function inputCampus (newCampusEntry){
  const action = { type: INPUT_CAMPUS, newCampusEntry }
  return action;
}
export function addCampus (campus){
  const action = { type: ADD_CAMPUS, campus }
  return action;
}

export function inputStudent (newStudentEntry){
  const action = { type: INPUT_STUDENT, newStudentEntry }
  return action;
}
export function addStudent (student){
  const action = { type: ADD_STUDENT, student }
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

export function createCampus (campus) {
  return function thunk (dispatch){
    return axios.post('/api/campuses', {name:campus})
      .then( res => res.data )
      .then( newCampus => {
        const action = addCampus(newCampus)
        dispatch(action);
      })
  }
}

export function createStudent (student) {
  const { name, email } = student;
  return function thunk (dispatch){
    return axios.post('/api/campuses', { name, email })
      .then( res => res.data )
      .then( newStudent => {
        const action = addStudent(newStudent)
        dispatch(action);
      })
  }
}

//REDUCER
const rootReducer = function(state = initialState, action) {
  switch (action.type) {
    case GOT_STUDENTS:
      // return Object.assign({}, state, {students: action.students})
      return {
        ...state,
        students: action.students
    }

    case GOT_CAMPUSES:
      // return Object.assign({}, state, {campuses: action.campuses})
      return {
        ...state,
        campuses: action.campuses
    }

    case INPUT_CAMPUS:
      return {
        ...state,
        newCampusEntry: action.newCampusEntry
      }

    case ADD_CAMPUS:
      return {
        ...state,
        campuses: [...state.campuses, action.campus]
      }

    case INPUT_STUDENT:
      return {
        ...state,
        newStudentEntry: action.newStudentEntry
      }

    case ADD_STUDENT:
      return {
        ...state,
        students: [...state.students, action.student]
      }

    default: return state
  }
};

export default rootReducer;
