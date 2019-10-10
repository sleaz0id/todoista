import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import {
  Input,
  Button,
  Form
} from 'semantic-ui-react';
import { authenticateUser } from '../../actions';

const SignInPage = ({ dispatch, match }) => {
  let email, password;

  return (
    <div>
      <Form>
        <Form.Field required>
          <label>E-mail</label>
          <Input ref={node => { email = node ? node.inputRef : null }} placeholder='john@example.com'/>
        </Form.Field>
        <Form.Field required>
          <label>Password</label>
          <Input ref={node => { password = node ? node.inputRef : null }} type='password' />
        </Form.Field>
        <Button
          basic
          color='teal'
          onClick={() => dispatch(authenticateUser({ email: email.value, password: password.value }))} 
        >Submit</Button>
      </Form>
      <Link to='/'>go on</Link>
    </div>
  );
};

SignInPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(withRouter(SignInPage));