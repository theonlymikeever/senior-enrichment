import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateStudentFromServer } from '../reducers';

class EditStudentForm extends Component {
  constructor(){
    super();
    this.state = {
      student: {},
      name: '',
      email: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt){
    const target = evt.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(evt){
    evt.preventDefault()
    const { student, name, email } = this.state;
    Object.assign(student, { name, email })
    this.props.updateStudent(student)
  }

  componentWillMount(){
    if (this.props.student) {
      this.setState({
        student: this.props.student,
        name: this.props.student.name,
        email: this.props.student.email })
      }
  }

  componentWillReceiveProps(nextProps){
    if (this.props.student !== nextProps.student){
      this.setState({
        student: nextProps.student,
        name: nextProps.student.name,
        email: nextProps.student.email })
    }
  }

  render(){
    const { name, email } = this.state;
    const { student } = this.props;
    const { handleSubmit, handleChange } = this;
      return (
        <div className="card border-primary mb-3">
          <div className="card-header">
            <strong>Edit student: </strong> { student && student.name }
          </div>
          <div className="card-body">
            <form className="form-group" onSubmit={ handleSubmit }>
              <input onChange={ handleChange } className="mb-2 form-control" name="name" value={ name } />
              <input onChange={ handleChange } className="form-control" name="email" value={ email } />
              <button className="mt-2 btn btn-primary">Save Student</button>
            </form>
          </div>
        </div>
    )
  }
}

const mapStateToProps = function (state, ownProps) {
  // console.log('ownProps', ownProps)
  const studentId = Number(ownProps.match.params.id);
  const student = state.students.filter(s => {
    return s.id === studentId
  })[0]

  return {
    student,
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

