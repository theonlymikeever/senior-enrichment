import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function CampusList(props){
    const { campuses } = props;
    return (
    <div className="col-xs-12 col-sm-8">
      <h2>Campuses</h2>
      <div>
        {
          campuses.map( campus => {
            return (
              <div className="col-xs-6" key={ campus.id }>
                <img className="img-responsive" src={campus.imageUrl} />
                <Link to={`/campuses/${campus.id}`}>{ campus.name }</Link>
              </div>
            )
          })
        }
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
