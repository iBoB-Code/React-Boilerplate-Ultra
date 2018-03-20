import React from 'react';
import { Card, Button, Loader } from 'semantic-ui-react';
import '../style/AsyncModule.css';

const AsyncModule = ({
  message,
  data,
  fetch,
  callApi,
  simpleWait,
}) => (
  <div className="asyncModule">
    <Card>
      <Card.Content header="Async Actions Module" />
      <Card.Content description="Here you can test redux asynchronous actions" />
      <Card.Content>
        <div className="container">
          <Button content="Make a 5 secons action" onClick={simpleWait} />
          <Button content="Call a dummy API" onClick={callApi} />
        </div>
        <div className="container">
          <span>STATUS:</span>
          {
            fetch ? (
              <Loader inline active>{message}</Loader>
            ) : (
              <p>{message}</p>
            )
          }
          <span>DATA:</span>
          <p>{JSON.stringify(data)}</p>
        </div>
      </Card.Content>
    </Card>
  </div>
);

export default AsyncModule;
