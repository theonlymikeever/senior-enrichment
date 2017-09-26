import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CampusForm from './CampusForm';

function CampusList(props){
    const { campuses } = props;
    return (
    <div className="col-sm-12 col-md-12">
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
                    <div className="card-body">
                      <h4 className="card-title">{ campus.bame }</h4>
                      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                      <Link className="btn btn-primary" to={`/campuses/${campus.id}`}>{ campus.name }</Link>
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

export default connect(mapStateToProps)(CampusList);
