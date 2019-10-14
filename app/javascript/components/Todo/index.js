import React from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react'

export const Todo = ({
  onClick,
  completed,
  text,
}) => (
  <Segment 
    onClick={onClick}
    style={{
      textDecoration:
        completed ?
          'line-through' :
          'none'
      }}>
    {text}
  </Segment>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}

export default Todo;