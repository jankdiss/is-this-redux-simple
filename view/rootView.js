import React, { Component } from 'react'
import { Provider } from 'react-redux'
import ChildView from './childView';

export default class RootView extends Component {
  render() {
    return (
        <div>
          <div><h3>---Messages---</h3></div>
          <ChildView message="Hello from Root" />
        </div>
    )
  }
};