import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import StudentForm from './StudentForm';
import { deleteStudentFromServer } from '../reducers';

function Campus(props) {
  const campusId = Number(props.match.params.id)
  const { campuses, students, handleDelete } = props;
  const campus = campuses.filter(c => c.id === campusId)[0];
  const enrolledStudents = students.filter(s => s.campusId === campusId)

  return (
    <div><h3> { campus && campus.name } </h3>
      <ul>
        {
          enrolledStudents && enrolledStudents.map( student => {
            return <div className="well" key={student.id}>
                <div className="col-xs-6"> {student.name}</div>
                <div className="col-xs-6">
                  <form onSubmit={ handleDelete }>
                    <button value={student.id} name="delete" className="btn btn-danger btn-small pull-right">X</button>
                  </form>
                </div>
                <div className="clearfix"></div>
            </div>
          })
        }
      </ul>
      <StudentForm campus={campus} />
    </div>
  )
}

const mapStateToProps = ({ campuses, students }) => {
  return {
    campuses,
    students
  }
}

const mapDispatchToProp = (dispatch) => {
  return {
    handleDelete: function(evt){
      evt.preventDefault();
      dispatch(deleteStudentFromServer(evt.target.delete.value));
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProp)(Campus))
