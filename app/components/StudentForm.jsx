import React from 'react';
import { connect } from 'react-redux'
import { inputStudentName, inputStudentEmail, createStudent, triggerStudentForm } from '../reducers';

function StudentForm (props){
    const { newStudentNameEntry, newStudentEmailEntry, campusId } = props;
    const { handleSubmit, handleNameChange, handleEmailChange } = props;
    return (
      <form className="form-group" onSubmit={(evt) => handleSubmit(evt, newStudentNameEntry, newStudentEmailEntry, campusId) }>
        <input onChange={ handleNameChange } className="form-control" name="name" placeholder={ newStudentNameEntry === '' ? 'full name' : null } value={ newStudentNameEntry } type="text" />
        <input onChange={ handleEmailChange } className="mt-2 form-control" name="email" placeholder={ newStudentEmailEntry === '' ? 'email' : null } value={ newStudentEmailEntry } type="email" />
        <button className="mt-2 btn btn-primary">Add Student</button>
      </form>
    )
}

const mapStateToProps = ({ newStudentNameEntry, newStudentEmailEntry }) => {
  return {
    newStudentNameEntry,
    newStudentEmailEntry
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleNameChange: function(evt){
      dispatch(inputStudentName(evt.target.value));
    },
    handleEmailChange: function(evt){
      dispatch(inputStudentEmail(evt.target.value))
    },
    handleSubmit: function(evt, name, email, campusId){
      evt.preventDefault();
      const newStudent = {
        name,
        email,
        campusId
      }
      dispatch(createStudent(newStudent));
      dispatch(inputStudentName(''));
      dispatch(inputStudentEmail(''));
      dispatch(triggerStudentForm())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentForm)
