import React from 'react';
import { NavLink } from 'react-router-dom'

function Navigation(props){

return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <a className="navbar-brand" href="#">MK School of Magic</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
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
}

export default Navigation;
