import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { toggleChange, incrementCounter } from '../../redux/actions/homeActions';
import { delayedAction, apiCall } from '../../redux/actions/asyncActions';
import AsyncModule from './components/AsyncModule';
import UselessGlobalModule from '../global-components/UselessGlobalModule';
import './style/Home.css';

@connect(store => ({
  fetch: store.asyn.fetch,
  message: store.asyn.message,
  data: store.asyn.data,
  counter: store.home.counter,
  toggle: store.home.toggle,
}))
export default class Home extends Component {
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
      <div className="home">
        <Button content="CLICK HERE TO CHANGE PAGE TO DASHBOARD" onClick={() => this.props.history.push('/dashboard')} />
        <div className="homeContainer">
          <AsyncModule
            message={this.props.message}
            data={this.props.data}
            fetch={this.props.fetch}
            callApi={this.callApi}
            simpleWait={this.simpleWait}
          />
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
