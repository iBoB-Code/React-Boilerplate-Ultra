import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { verifyToken } from 'REDUX/actions/asyncActions';
import { Eye } from 'react-preloading-component';

@connect(store => ({
  login: store.asyn.login
}))
export default class PrivateRoute extends Component {
  constructor(props) {
    super(props);
    if (!this.props.login) {
      this.props.dispatch(verifyToken())
      .catch((err) => {
        console.log(err);
      });
    }
  }

  render() {
    const { component, redirect, ...rest } = this.props;
    if (this.props.login !== null) {
      return (
        <Route
          {...rest}
          render={props => (
            !this.props.login ? (
              <Redirect
                to={{
                  pathname: redirect,
                  state: { from: props.location }
                }}
              />
            ) : (
              React.createElement(component, props)
            )
          )}
        />
      );
    } return <div className="wait"><Eye size="100" color="#1CB5AC" /></div>;
  }
}
PrivateRoute.WrappedComponent.displayName = 'PrivateRoute';
PrivateRoute.WrappedComponent.propTypes = {
  dispatch: PropTypes.func.isRequired,
  component: PropTypes.func.isRequired,
  redirect: PropTypes.string.isRequired,
  login: PropTypes.bool
};
PrivateRoute.WrappedComponent.defaultProps = {
  login: null
};
