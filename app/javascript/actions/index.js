import { normalize } from 'normalizr';
import * as schema from './schema'
import * as api from '../api';
import { getIsFetching, getUserToken } from '../reducers';

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
  const authToken = getUserToken(getState());
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }

  dispatch(fetchTodosRequest(filter));

  return api.fetchTodos(filter, authToken).then(
    response => dispatch(fetchTodosSuccess(filter, response)),
    error => dispatch(fetchTodosFailure(filter, error.message)),
  );
};

export const addTodo = (text) => (dispatch, getState) => {
  const authToken = getUserToken(getState());
  return api.addTodo(text, authToken).then(response => 
    dispatch(addTodoSuccess(response))
  );
}

export const toggleTodo = (id) => (dispatch, getState) => {
  const authToken = getUserToken(getState());

  return api.toggleTodo(id, authToken).then(
    response => dispatch(toggleTodoSuccess(response))
  );
}

export const setAuthToken = (token) => ({
  type: 'SET_AUTH_TOKEN',
  token,
})

export const authenticateUser = (payload) => (dispatch) =>
  api.signIn(payload).then(
    token => dispatch(setAuthToken(token))
);
