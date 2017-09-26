import React from 'react';
import { connect } from 'react-redux'
import { inputCampus, createCampus } from '../reducers';

function CampusForm (props){
    const { newCampusEntry } = props;
    const { handleSubmit, handleChange } = props;
    return (
      <form className="form-group" onSubmit={(evt) => handleSubmit(evt, newCampusEntry) }>
        <input onChange={ handleChange } className="form-control" name="name" placeholder={ newCampusEntry === '' ? 'campus name' : null } value={ newCampusEntry } />
        <button className="mt-2 btn btn-primary">Add Campus</button>
      </form>
    )
}

const mapStateToProps = ({ newCampusEntry }) => {
  return {
    newCampusEntry
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: function(evt){
      dispatch(inputCampus(evt.target.value));
    },
    handleSubmit: function(evt, newCampusEntry){
      evt.preventDefault();
      dispatch(createCampus(newCampusEntry));
      dispatch(inputCampus(''));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampusForm)
