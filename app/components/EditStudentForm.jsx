import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateStudentFromServer } from '../reducers';

class EditStudentForm extends Component {
  constructor(){
    super();
    this.state = {
      campuses: [],
      student: {},
      name: '',
      email: '',
      campusId: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt){
    const target = evt.target;
    const value = target.name === 'campusId'
                  ? target.value * 1 //handle str > num
                  : target.value
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(evt){
    evt.preventDefault()
    const { student, name, email, campusId } = this.state;
    Object.assign(student, { name, email, campusId })
    this.props.updateStudent(student)
  }

  componentWillMount(){
    if (this.props.student) {
      this.setState({
        student: this.props.student,
        name: this.props.student.name,
        email: this.props.student.email,
        campusId: this.props.student.campusId * 1 })
      }
  }

  componentWillReceiveProps(nextProps){
    if (this.props.student !== nextProps.student){
      this.setState({
        student: nextProps.student,
        name: nextProps.student.name,
        email: nextProps.student.email,
        campusId: nextProps.student.campusId * 1})
    }
  }

  render(){
    const { name, email, campusId } = this.state;
    const { student, campuses } = this.props;
    const { handleSubmit, handleChange } = this;

    return (
        <div className="card border-primary mb-3">
          <div className="card-header">
            <strong>Edit student: </strong> { student && student.name }
          </div>
          <div className="card-body">
            <form className="form-group" onSubmit={ handleSubmit }>
              <input onChange={ handleChange } className="mb-2 form-control" name="name" value={ name } />
              <input onChange={ handleChange } className="mb-2 form-control" name="email" value={ email } />
              <select className="mb-2 form-control" onChange={ handleChange }  name="campusId" value={
                  campusId ?
                  campusId
                  : '' }>
                  {
                    campuses.map(campus => {
                      return <option key={ campus.id } value={ campus.id }>{ campus.name }</option>
                    })
                  }
              </select>
              <button className="btn btn-primary">Save Student</button>
            </form>
          </div>
        </div>
    )
  }
}

const mapStateToProps = function (state, ownProps) {
  const studentId = Number(ownProps.match.params.id);
  const student = state.students.filter(s => {
    return s.id === studentId
  })[0];
  const campuses = state.campuses;

  return {
    student,
    campuses
  };
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    updateStudent: function(student){
      dispatch(updateStudentFromServer(student, ownProps.history))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditStudentForm);
/*


*/

