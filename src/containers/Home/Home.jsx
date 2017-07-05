import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Icon, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchDummyApi, increment } from '../../actions/dummyActions';
import HomeTitle from './components/HomeTitle.jsx';

@connect(store => ({
  counter: store.dummy.dummyVar,
  response: store.dummy.response,
}))
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.props.dispatch(increment(1));
  }
  render() {
    return (
      <div className="home">
        <Card>
          <Card.Content header="This is the home page" />
          <Card.Content description="This page will be the landing page for the unlogged users." />
          <Card.Content extra>
            <Icon name="user" />
            I want to log in !
          </Card.Content>
        </Card>
        <Card>
          <Card.Content header="Trigger some actions" />
          <Card.Content>
            <Button content="Click here to increment" onClick={this.increment} />
            {this.props.counter}
            <Button content="Click here to GET data" onClick={() => this.props.dispatch(fetchDummyApi())} />
            {this.props.response}
          </Card.Content>
        </Card>
        <HomeTitle />
      </div>
    );
  }
}

Home.propTypes = {
  dispatch: PropTypes.func,
  counter: PropTypes.number,
  response: PropTypes.string,
};

Home.defaultProps = {
  dispatch: () => console.log('ERROR'),
  counter: -1,
  response: '',
};
