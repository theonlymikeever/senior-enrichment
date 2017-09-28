import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCampusFromServer } from '../reducers';

class EditCampusForm extends Component {
  constructor(){
    super();
    this.state = {
      campus: {},
      newName: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt){
    const newName = evt.target.value;
    this.setState({ newName });
  }

  handleSubmit(evt){
    evt.preventDefault()
    const { newName, campus } = this.state;
    Object.assign(campus, { name: newName })
    this.props.updateCampus(campus)
  }

  componentWillMount(){
    if (this.props.campus) {
      this.setState({
        campus: this.props.campus,
        newName: this.props.campus.name })
    }
  }

  componentWillReceiveProps(nextProps){
    if (this.props.campus !== nextProps.campus){
      this.setState({campus: nextProps.campus, newName: nextProps.campus.name})
    }
  }

  render(){
    const { newName } = this.state;
    const { campus } = this.props;
    const { handleSubmit, handleChange } = this;
      return (
        <div className="card border-primary mb-3">
          <div className="card-header">
            <strong>Edit campus name: </strong> { campus && campus.name }
          </div>
          <div className="card-body">
            <form className="form-group" onSubmit={ handleSubmit }>
              <input onChange={ handleChange } className="form-control" name="name" value={ newName } />
              <button className="mt-2 btn btn-primary">Save Campus</button>
            </form>
          </div>
        </div>
    )
  }
}

const mapStateToProps = function (state, ownProps) {
  const campusId = Number(ownProps.match.params.id);
  const campus = state.campuses.filter(c => c.id === campusId)[0]

  return {
    campus
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

