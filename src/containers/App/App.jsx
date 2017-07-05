import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../Home/Home.jsx';
import Dashboard from '../Dashboard/Dashboard.jsx';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app-container">
          <Route exact path="/" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
        </div>
      </BrowserRouter>
    );
  }
}
