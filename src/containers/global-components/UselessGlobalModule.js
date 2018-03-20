import React from 'react';
import { Card, Button, Label, Icon, Radio } from 'semantic-ui-react';

function UselessGlobalModule({
  increment,
  counter,
  toggle,
  toggleAction,
}) {
  return (
    <Card>
      <Card.Content header="Trigger some local actions :" />
      <Card.Content>
        <div className="container">
          <Button content="Click here to increment" onClick={increment} />
          <Label>
            <Icon name="hand pointer" /> {counter}
          </Label>
          <Radio toggle label="Click to toggle this thing" checked={toggle} onChange={toggleAction} />
        </div>
      </Card.Content>
    </Card>
  );
}

export default UselessGlobalModule;
