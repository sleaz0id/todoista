import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Container, Input, Button } from 'semantic-ui-react';
import { addTodo } from '../actions';

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <Container>      
      <Input
        ref={node => { input = node.inputRef }}
      />
      <Button
        basic 
        color='teal'
        onClick={() => {
          console.log('value test', input.value);
          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        Add Todo
      </Button>
    </Container>
  );
};

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(AddTodo);