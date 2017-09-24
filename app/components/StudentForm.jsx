import React from 'react';
import { connect } from 'react-redux'
import { inputStudentName, inputStudentEmail, createStudent } from '../reducers';

function StudentForm (props){
    const { newStudentNameEntry, newStudentEmailEntry, campus } = props;
    const { handleSubmit, handleNameChange, handleEmailChange } = props;
    return (
      <form className="form-group" onSubmit={(evt) => handleSubmit(evt, newStudentNameEntry, newStudentEmailEntry, campus.id) }>
        <label>Name: </label>
        <input onChange={ handleNameChange } className="form-control" name="name" value={ newStudentNameEntry } type="text" />
        <label>Email: </label>
        <input onChange={ handleEmailChange } className="form-control" name="email" value={ newStudentEmailEntry } type="email" />
        <button className="btn btn-primary">Add Student</button>
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentForm)
