import { normalize } from 'normalizr';
import * as schema from './schema'
import * as api from '../api';
import { getIsFetching } from '../reducers';

const fetchTodosRequest = (filter) => ({
  type: 'FETCH_TODOS_REQUEST',
  filter,
})

const fetchTodosSuccess = (filter, response) => ({
  type: 'FETCH_TODOS_SUCCESS',
  filter,
  response: normalize(response, schema.arrayOfTodos),
});

const fetchTodosFailure = (
  filter,
  message = 'Something went wrong.',
) => ({
  type: 'FETCH_TODOS_FAILURE',
  filter,
  message,
})

const addTodoSuccess = (response) => ({
  type: 'ADD_TODO_SUCCESS',
  response: normalize(response, schema.todo),
})

const toggleTodoSuccess = (response) => ({
  type: 'TOGGLE_TODO_SUCCESS',
  response: normalize(response, schema.todo),
})

export const fetchTodos = (filter) => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }
  dispatch(fetchTodosRequest(filter));
  
  return api.fetchTodos(filter).then(
    response => dispatch(fetchTodosSuccess(filter, response)),
    error => dispatch(fetchTodosFailure(filter, error.message)),
  );
};

export const addTodo = (text) => (dispatch) =>
  api.addTodo(text).then(response => 
    dispatch(addTodoSuccess(response))
  );

export const toggleTodo = (id) => (dispatch) =>
  api.toggleTodo(id).then(
    response => dispatch(toggleTodoSuccess(response))
  );
