import React, { Component } from 'react';
import store from '../store';

export default class StudentList extends Component {
  constructor(){
    super();
    this.state = store.getState();
  }

  componentDidMount(){
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState())
    })
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  render(){
    const { students } = this.state;
    return (
      <div>
        <h2>Students</h2>
        <ul>
        {
          students.map( student => {
            return <li>{ student.name }</li>
          })
        }
        </ul>
      </div>
    )
  }
}

