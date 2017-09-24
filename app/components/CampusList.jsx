import React, { Component } from 'react';
import store from '../store';

export default class CampusList extends Component {
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
    const { campuses } = this.state;
    return (
      <div>
        <h2>Campuses</h2>
        <ul>
        {
          campuses.map( campus => {
            return <li><img src={campus.imageUrl} />{ campus.name }</li>
          })
        }
        </ul>
      </div>
    )
  }
}

