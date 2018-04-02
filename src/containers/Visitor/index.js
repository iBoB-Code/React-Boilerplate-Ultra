import React from 'react';
import PropTypes from 'prop-types';
import { Header, Icon, Button } from 'semantic-ui-react';
import { Lines } from 'react-preloading-component';

const Visitor = props => (
  <main className="visitor">
    <Header as="h1" icon textAlign="center" color="grey">
      <Icon name="street view" color="teal" circular />
      <Header.Content>
        WELCOME TO THE VISITOR PAGE
      </Header.Content>
    </Header>
    <span>You have the right to watch this random cat GIF</span>
    <div className="gifContainer">
      <div className="back">
        <Lines color="#1CB5AC" />
      </div>
      <div className="imgContainer"><img alt="cat" src="http://thecatapi.com/api/images/get?format=src&type=gif" /></div>
    </div>
    <Button content="Back to homepage" icon="left arrow" labelPosition="left" onClick={() => props.history.push('/')} />
  </main>
);

Visitor.propTypes = {
  history: PropTypes.func.isRequired
};

export default Visitor;
