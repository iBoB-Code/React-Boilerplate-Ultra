import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { toggleChange, incrementCounter } from '../../redux/actions/homeActions';
import { delayedAction, apiCall } from '../../redux/actions/asyncActions';
import UselessGlobalModule from '../global-components/UselessGlobalModule';
import './style/Dashboard.css';

@connect(store => ({
  fetch: store.asyn.fetch,
  message: store.asyn.message,
  data: store.asyn.data,
  counter: store.home.counter,
  toggle: store.home.toggle,
}))
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.toggleAction = this.toggleAction.bind(this);
    this.callApi = this.callApi.bind(this);
    this.simpleWait = this.simpleWait.bind(this);
  }

  increment() {
    this.props.dispatch(incrementCounter(1));
  }

  toggleAction() {
    this.props.dispatch(toggleChange(!this.props.toggle));
  }

  callApi() {
    this.props.dispatch(apiCall());
  }

  simpleWait() {
    this.props.dispatch(delayedAction());
  }

  render() {
    return (
      <div className="dashboard">
        <Button content="CLICK HERE TO CHANGE PAGE TO HOME" onClick={() => this.props.history.push('/')} />
        <div className="dashboardContainer">
          <UselessGlobalModule
            increment={this.increment}
            counter={this.props.counter}
            toggle={this.props.toggle}
            toggleAction={this.toggleAction}
          />
        </div>
      </div>
    );
  }
}
