import React from 'react';
import PropTypes from 'prop-types';
import { Label, Icon } from 'semantic-ui-react';

function Status(props) {
  return (
    <div className={`status ${props.state ? 'log' : ''}`}>
      <Label>
        <Icon className={props.state ? 'beat' : ''} color="red" name={props.state ? 'heart' : 'heartbeat'} />
        STATUS
      </Label>
      {props.state ? <Label as="a" content="LOGOUT" onClick={props.logout} /> : ''}
    </div>
  );
}

Status.propTypes = {
  state: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

export default Status;
