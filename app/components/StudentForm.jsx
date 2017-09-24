import React from 'react';
import { connect } from 'react-redux'
import { inputStudent, createStudent } from '../reducers';

function StudentForm (props){
    const { newStudentEntry } = props;
    const { handleSubmit, handleChange } = props;
    return (
      <form className="form-group" onSubmit={(evt) => handleSubmit(evt, newStudentEntry) }>
        <label>Add Student: </label>
        <input onChange={ handleChange } className="form-control" name="name" value={ newStudentEntry } />
        <button className="btn btn-primary">Add</button>
      </form>
    )
}

const mapStateToProps = ({ newStudentEntry }) => {
  return {
    newStudentEntry
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: function(evt){
      dispatch(inputStudent(evt.target.value));
    },
    handleSubmit: function(evt, newStudentEntry){
      evt.preventDefault();
      dispatch(createStudent(newStudentEntry));
      dispatch(inputStudent(''));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(StudentForm)
