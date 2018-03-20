/*
  Base.js

  The "root" component that persists throughout the app,
  contains client router logic
*/

import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import BaseRoutes from '../routing/BaseRoutes.js';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    // good for debugging - avoid excessive rendering
    this.renderCount = 0;
  }

  render() {
    this.renderCount++;
    console.log('RENDERS:', this.renderCount);
    // --> /src/routing/BaseRoutes.js
    return (
      <div className="app">
        <div className="head">
          <h1>WELCOME TO THE BOILERPLATE</h1>
          <h3>The window below is the main routed view containing all the components</h3>
          <h5>{`You currently are on the route : ${this.props.location.pathname}`}</h5>
          <h5>{`Rendering the container : ${this.props.location.pathname === '/' ? 'Home' : 'Dashboard'}`}</h5>
        </div>
        <div className="window">
          <BaseRoutes location={this.props.location} />
        </div>
      </div>
    );
  }
}

export default withRouter(connect()(App));
