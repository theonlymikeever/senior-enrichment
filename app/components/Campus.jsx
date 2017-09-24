import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import StudentForm from './StudentForm';

function Campus(props) {
  const campusId = Number(props.match.params.id)
  const { campuses } = props;
  const campus = campuses.filter(c => c.id === campusId)[0];

  return (
    <div><h3> { campus && campus.name } </h3>
      <ul>
        {
          campus && campus.students && campus.students.map( student => {
            return <li key={student.key}>{student.name}</li>
          })
        }
      </ul>
    </div>
  )
}

const mapStateToProps = ({ campuses }) => {
  return {
    campuses
  }
}

export default withRouter(connect(mapStateToProps)(Campus))
