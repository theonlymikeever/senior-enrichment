import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCampusFromServer } from '../reducers';

class EditCampusForm extends Component {
  constructor(){
    super();
    this.state = {
      campus: { name: '' },
      newName: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt){
    const name = evt.target.name.value;
    this.setState({ name });
  }

  handleSubmit(evt){
    console.log(this.props.history)
  }

componentWillReceiveProps(nextProps){
  if (this.props !== nextProps){
    this.setState(nextProps)
  }
}

  render(){
    const { name } = this.state;
    const { campus } = this.props;
    const { handleSubmit, handleChange } = this;
    console.log(campus)
      return (
      <form className="form-group" onSubmit={ handleSubmit }>
        <input onChange={ handleChange } className="form-control" name="name" value={ campus ? campus.name : 'no'} />
        <button className="mt-2 btn btn-primary">Save Campus</button>
      </form>
    )
  }
}

const mapStateToProps = function (state, ownProps) {
  const campusId = Number(ownProps.match.params.id);

  return {
    campus: state.campuses.filter(c => c.id === campusId),
  };
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    updateCampus: function(campus){
      dispatch(updateCampusFromServer(campus, ownProps.history))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCampusForm);
/*


*/

