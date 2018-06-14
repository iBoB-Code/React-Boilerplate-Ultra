/* eslint no-useless-constructor: 0 */  // --> OFF
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Button, Image, Card, Icon } from 'semantic-ui-react';
// import { Grow } from 'react-preloading-component';
// import { reset } from 'redux-form';
// import { login } from 'REDUX/actions/asyncActions';
import Playground from './components/Playground';

@connect(store => ({
  moyen: store.asyn.moyen,
  cher: store.asyn.cher,
  bon: store.asyn.bon,
  data: store.asyn.data
}))
export default class LittleBrain extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home">
        <Playground
          history={this.props.history}
        />
      </div>
    );
  }
}
LittleBrain.WrappedComponent.displayName = 'LittleBrain';
LittleBrain.WrappedComponent.propTypes = {
  history: PropTypes.object.isRequired
  // dispatch: PropTypes.func.isRequired
};
LittleBrain.WrappedComponent.defaultProps = {
};
