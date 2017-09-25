import React from 'react';
import { NavLink } from 'react-router-dom'

function Navigation(props){

return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <a className="navbar-brand" href="#">MK School of Magic</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav mr-auto">
          <div className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to="#">Home</NavLink>
            </div>
          <div className="nav-item">
            <NavLink className="nav-link" to="#">Students</NavLink>
          </div>
          <div className="nav-item">
            <a className="nav-link disabled">About</a>
          </div>
        </div>
        <div className="pull-right">
          <small className="text-muted">v1.0</small>
        </div>
      </div>
    </nav>
)
  // return (
  //   <nav classNameName="nnavbar navbar-expand-md navbar-dark bg-dark mb-4">
  //     <div classNameName="navbar-brand">MSfM</div>
  //     <div classNameName="collapse navbar-collapse" id="navbarNavAltMarkup">
  //       <div classNameName="navbar-nav">
  //         <NavLink classNameName="nav-item nav-link" to="/" activeclassNameName="active">Home <span classNameName="sr-only">(current)</span></NavLink>
  //         <NavLink classNameName="nav-item nav-link" to="/students">Students</NavLink>
  //       </div>
  //     </div>
  //   </nav>
  // )
}

export default Navigation;
