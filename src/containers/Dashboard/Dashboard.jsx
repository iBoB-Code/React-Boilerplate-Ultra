import React, { Component } from 'react';
import { Card, Icon } from 'semantic-ui-react';

export default class Home extends Component {
  render() {
    return (
      <div className="dashboard">
        <Card>
          <Card.Content header="This is the dashboard page" />
          <Card.Content description="This page will be the user own page, once logged in." />
          <Card.Content extra>
            <Icon name="user" />
            My page !
          </Card.Content>
        </Card>
      </div>
    );
  }
}
