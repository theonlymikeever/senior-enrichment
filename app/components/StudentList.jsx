import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function StudentList(props) {
    const { students, campuses } = props;
    students.forEach(student => {
      student.campus = campuses.find(campus => campus.id === student.campusId)
    })

    return (
      <div className="col-sm-12">
        <h2>Students</h2>
        <div className="row">
          <div className="col-sm-12">
          <div className="card border-warning">
            <div className="card-body">
              <table className="table table-striped">
                <thead className="thead-inverse">
                  <tr>
                    <th>#id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Campus</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    students.map( student => {
                      return (
                        <tr key={student.id}>
                          <th scope="row">{ student.id }</th>
                          <td>{ student.name }</td>
                          <td>{ student.email }</td>
                          <td>
                          {
                            student.campus ?
                            <Link to={`/campuses/${ student.campusId }`}>
                              {
                                student.campus.name
                              }
                            </Link> : 'n/a'
                            }
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
          </div>
        </div>
      </div>
    )
}

const mapStateToProps = ({ students, campuses }) => {
  return {
    students,
    campuses
  }
}

export default connect(mapStateToProps)(StudentList);
