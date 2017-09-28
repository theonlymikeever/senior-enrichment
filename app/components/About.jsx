import React from 'react';

export default function About() {
  return (
  <div className="col-sm-8">
    <h2>About MK School of Magic</h2>
    <div className="card border-primary mb-3">
      <div className="card-header text-primary">A React project by Mike Kerslake</div>
      <div className="card-body">
        <p className="card-text">This app was written to demonstrate react & react-redux. It also incorporates sequelize, express and the powerful node.js for the backend.<br/><br/> All possible after a full cirrculum at <a href="https://www.fullstackacademy.com/">Fullstack Academy</a> and of course, <em>way</em> too many cups of coffee from my favorite shop in town, <a href="http://cafevolan.com/">Cafe Volan</a>.</p>
      </div>
    </div>
  </div>
  )
}
