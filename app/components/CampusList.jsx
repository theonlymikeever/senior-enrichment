import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CampusForm from './CampusForm';
import { deleteCampusFromServer } from '../reducers'

function CampusList (props) {
  const { campuses, handleDelete } = props;
  return (
    <div className="col-sm-12">
      <h2>Campuses</h2>
      <div className="row">
      <div className="col-sm-8">
        <div className="row">
          {
            campuses.map(( campus ) => {
              return (
                <div className="mb-3 col-sm-6" key={ campus.id }>
                  <div className="card">
                   <img className="card-img-top img-responsive" src={campus.imageUrl} alt="Card image cap" />
                     <div className="d-flex flex-row my-5 card-img-overlay">
                      <h4 className="d-flex align-items-center mt-5 card-title text-light">{ campus.name }</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                      <Link className="btn btn-primary" to={`/campuses/${campus.id}`}>View Campus</Link>
                      <form onSubmit={ handleDelete } className="float-right">
                       <button name="delete" value={ campus.id } className="btn btn-danger" style={{ cursor: 'pointer' }}><span className="text-white oi oi-delete" name="delete-btn" /></button>
                      </form>
                      <Link className="btn mx-2 float-right btn-secondary" to={`/campuses/${campus.id}/edit`}><span className="text-white oi oi-pencil" name="pencil-btn" /></Link>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        </div>
        <div className="col-sm-4 pull-right">
          <CampusForm />
        </div>
      </div>
    </div>
    )
}

const mapStateToProps = ({ campuses }) => {
  return {
    campuses
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleDelete: function(evt){
      evt.preventDefault();
      dispatch(deleteCampusFromServer(evt.target.delete.value));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampusList);
