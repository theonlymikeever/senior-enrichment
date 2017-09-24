import React, { Component } from 'react';
import { connect } from 'react-redux'
import { inputCampus, createCampus } from '../reducers';

function CampusForm (props){
  // constructor(){
  //   super();
  //   this.state = {
  //     students: [],
  //     inputValue: ''
  //   }
  //   this.handleChange = this.handleChange.bind(this)
  //   this.handleSubmit = this.handleSubmit.bind(this)
  // }

  // handleChange(evt){
  //   this.setState({inputValue: evt.target.value})
  // }

  // handleSubmit(evt){
  //   evt.preventDefault()

  //   this.setState({inputValue: ''})
  // }

  // onComponentDidMount({ campusList }){
  //   this.setState(campusList);
  // }

    const { newCampusEntry } = props;
    const { handleSubmit, handleChange } = props;
    return (
      <form className="form-group" onSubmit={(evt) => handleSubmit(evt, newCampusEntry) }>
        <label>Add Campus: </label>
        <input onChange={ handleChange } className="form-control" name="name" value={ newCampusEntry } />
        <button className="btn btn-primary">Add</button>
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

export default connect(mapStateToProps,mapDispatchToProps)(CampusForm)
