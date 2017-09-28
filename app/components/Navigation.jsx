import React from 'react';
import { NavLink } from 'react-router-dom'

function Navigation(){

return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <h4 className="mb-0 mt-1 mr-2">
           <span className="text-primary oi oi-code" />
      </h4>
      <a className="navbar-brand" href="#">MK School of Magic</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav mr-auto">
          <div className="nav-item">
            <NavLink activeClassName="active" className="nav-link" exact to="/">Home</NavLink>
            </div>
          <div className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/students">Students</NavLink>
          </div>
          <div className="nav-item">
            <NavLink className="nav-link" to="/about">About</NavLink>
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
