import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import StudentForm from './StudentForm';
import { deleteStudentFromServer, triggerStudentForm } from '../reducers';

function Campus(props) {
  const campusId = Number(props.match.params.id)
  const { campuses, students, handleDelete, showForm, addStudent } = props;

  const campus = campuses.filter(c => c.id === campusId)[0];
  const enrolledStudents = students.filter(s => s.campusId === campusId)

  return (
    <div>
      <div className="col-sm-12">
        <h3 className="float-left"> { campus && campus.name } </h3>
        <button className={ `mb-2 btn btn-large float-right ${showForm ? 'btn-primary' : 'btn-dark'}`} onClick={ addStudent }>
          {
            showForm ? 'x' : '+'
          }
        </button>
        <div className="clearfix" />
        {
          showForm ?
          <div className="row">
            <StudentForm campusId={ campusId } />
          </div>
          : null
        }
      </div>
      <div className="card-deck">
        {
          enrolledStudents && enrolledStudents.map( student => {
            return (
              <div className="mb-3 col-sm-4" key={ student.id }>
                <div className="card">
                  <div className="card-body">
                    <form className="float-right" onSubmit={ handleDelete }>
                      <button value={student.id} name="delete" className="btn btn-danger btn-small float-left" style={{ cursor: 'pointer' }}><span className="text-white oi oi-delete" name="delete-btn" /></button>
                    </form>
                    <Link className="btn float-right mx-2 btn-secondary" to={`/students/${student.id}/edit`}><span className="text-white oi oi-pencil" name="edit-btn"/></Link>
                    <img className="mb-2 rounded" src={ student.imageUrl } />
                    <h4 className="card-title">{ student.name }</h4>
                    <h6 className="card-subtitle mt-2 text-muted">{ student.email }</h6>
                    <p className="card-text">{ student.note }</p>
                  </div>
                </div>
                </div>
              )
          })
        }
        </div>
    </div>
  )
}

const mapStateToProps = ({ campuses, students, showForm }) => {
  return {
    campuses,
    students,
    showForm
  }
}

const mapDispatchToProp = (dispatch) => {
  return {
    handleDelete: function(evt){
      evt.preventDefault();
      dispatch(deleteStudentFromServer(evt.target.delete.value));
    },
    addStudent: function(){
      dispatch(triggerStudentForm())
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProp)(Campus))
