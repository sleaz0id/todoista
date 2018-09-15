import React from 'react';
import { Segment } from 'semantic-ui-react'

import Todo from './Todo';

export const TodoList = ({
  todos,
  onTodoClick
}) => (
    <Segment.Group>
      {todos.map(todo =>
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => onTodoClick(todo.id)} />
      )}
    </Segment.Group>
);