import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import { reduxForm, Field } from 'redux-form';

const validate = (values) => {
  const errors = {};
  if (!values.userName) {
    errors.userName = 'Required';
  }
  if (!values.pass) {
    errors.pass = 'Required';
  }
  return errors;
};

const renderInput = ({ input, meta, label, type }) => (
  <div>
    <span className="label">{label}</span>
    <input type={type} {...input} />
    {
      meta.error && meta.touched &&
      <Icon color="red" name="warning sign" />
    }
  </div>
);

const FormContainer = ({ handleSubmit, submitting, mySubmit, connected }) => (
  <form className="loginForm" onSubmit={handleSubmit(mySubmit)}>
    <Field name="userName" label="Name" type="text" component={renderInput} />
    <Field name="pass" label="Password" type="password" component={renderInput} />
    <button type="submit" className="ui button" disabled={submitting || connected}>Log In</button>
  </form>
);

FormContainer.displayName = 'FormContainer';
FormContainer.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  mySubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  connected: PropTypes.bool.isRequired
};

renderInput.displayName = 'renderInput';
renderInput.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

const Form = reduxForm({
  form: 'login',
  destroyOnUnmount: false,
  validate
})(FormContainer);

export default Form;
