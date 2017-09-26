import axios from 'axios'

//INTIIAL STATE
const initialState = {
  students: [],
  campuses: [],
  newCampusEntry: '',
  newStudentNameEntry: '',
  newStudentEmailEntry: '',
  showForm: false
}

//ACTION TYPES
const GOT_STUDENTS = 'GOT_STUDENTS';
const GOT_CAMPUSES = 'GOT_CAMPUSES';
const ADD_CAMPUS = 'ADD_CAMPUS';
const INPUT_CAMPUS = 'INPUT_CAMPUS';
const ADD_STUDENT = 'ADD_STUDENT';
const INPUT_STUDENT_NAME = 'INPUT_STUDENT_NAME';
const INPUT_STUDENT_EMAIL = 'INPUT_STUDENT_EMAIL';
const DELETE_STUDENT = 'DELETE_STUDENT';
const TRIGGER_FORM = 'TRIGGER_FORM';

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

export function inputStudentName (newStudentNameEntry){
  const action = { type: INPUT_STUDENT_NAME, newStudentNameEntry }
  return action;
}
export function inputStudentEmail (newStudentEmailEntry){
  const action = { type: INPUT_STUDENT_EMAIL, newStudentEmailEntry }
  return action;
}
export function addStudent (student){
  const action = { type: ADD_STUDENT, student }
  return action;
}
export function deleteStudent (studentId){
  const action = { type: DELETE_STUDENT, studentId }
  return action;
}
export function triggerStudentForm() {
  const action = { type: TRIGGER_FORM }
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
    return axios.post('/api/campuses', { name:campus })
      .then( res => res.data )
      .then( newCampus => {
        const action = addCampus(newCampus)
        dispatch(action);
      })
  }
}

export function createStudent (student) {
  const { name, email, campusId } = student;
  return function thunk (dispatch){
    return axios.post('/api/students', { name, email, campusId })
      .then( res => res.data )
      .then( newStudent => {
        const action = addStudent(newStudent)
        dispatch(action);
      })
  }
}

export function deleteStudentFromServer (studentId) {
  return function thunk (dispatch){
    return axios.delete(`/api/students/${studentId}`)
      .then( () => {
        const action = deleteStudent(studentId);
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

    case INPUT_STUDENT_NAME:
      return {
        ...state,
        newStudentNameEntry: action.newStudentNameEntry
      }
    case INPUT_STUDENT_EMAIL:
      return {
        ...state,
        newStudentEmailEntry: action.newStudentEmailEntry
      }

    case ADD_STUDENT:
      return {
        ...state,
        students: [...state.students, action.student]
      }

    case DELETE_STUDENT:
      return {
        ...state,
        students: state.students.filter((student) => {
          return student.id != action.studentId
        })
      }

    case TRIGGER_FORM:
      return {
        ...state,
        showForm: !state.showForm
      }

    default: return state
  }
};

export default rootReducer;
