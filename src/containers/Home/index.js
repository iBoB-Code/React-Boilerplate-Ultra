import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Header, Icon, Card, Button } from 'semantic-ui-react';
import { Lines } from 'react-preloading-component';
import { reset } from 'redux-form';
import { login } from 'REDUX/actions/asyncActions';
import { logout } from 'REDUX/actions/homeActions';
import Status from './components/Status';
import Form from './components/Form';

@connect(store => ({
  login: store.asyn.login,
  fetching: store.asyn.fetching
}))
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.loginHandler = this.loginHandler.bind(this);
    this.logoutHandler = this.logoutHandler.bind(this);
  }

  loginHandler(data) {
    this.props.dispatch(login(data))
    .then(() => {
      this.props.dispatch(reset('login'));
    })
    .catch((err) => {
      console.log(err);
    });
  }

  logoutHandler() {
    this.props.dispatch(logout());
  }

  render() {
    return (
      <div className="home">
        <Status state={this.props.login} logout={this.logoutHandler} />
        <Header as="h1" icon textAlign="center" color="grey">
          <Icon name="connectdevelop" color="teal" circular />
          <Header.Content>
            WEB APP BOILERPLATE
          </Header.Content>
        </Header>
        <div className="container">
          <Card color="teal" className="left">
            <Card.Content className="head" header="STEP 1" />
            <Card.Content className="desc" description="Log yourself in (or not) using 'admin' in booth fields" />
            <Card.Content className="bod">
              <Form
                mySubmit={data => this.loginHandler(data)}
                connected={this.props.login}
              />
            </Card.Content>
            <Card.Content className="foot" extra>
              <Icon name="question circle" />
              This form is using redux-form.
            </Card.Content>
          </Card>
          <div className="loaderContainer">
            <div className={`loader ${this.props.fetching ? 'active' : ''}`}>
              <Lines color="#1CB5AC" />
            </div>
          </div>
          <Card color="teal" className="right">
            <Card.Content className="head" header="STEP 2" />
            <Card.Content className="desc" description="Click this button to be redirected to the page that corresponds to your actual status." />
            <Card.Content className="bod">
              <Button content="Redirect me" onClick={() => this.props.history.push('/loggedRoute')} />
            </Card.Content>
            <Card.Content className="foot" extra>
              <Icon name="check" />
              Try to mess with the URL or the JWT in local storage.
            </Card.Content>
          </Card>
        </div>
      </div>
    );
  }
}
Home.WrappedComponent.displayName = 'Home';
Home.WrappedComponent.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  fetching: PropTypes.bool.isRequired,
  login: PropTypes.bool
};
Home.WrappedComponent.defaultProps = {
  login: null
};
