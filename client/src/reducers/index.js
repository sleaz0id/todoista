import { combineReducers } from 'redux';
import byId, * as fromById from './byId';
import user, * as fromUser from './user';
import createList, * as fromList from './createList';

const listByFilter = combineReducers({
  all: createList('all'),
  active: createList('active'),
  completed: createList('completed'),
})

const todos = combineReducers({
  byId,
  listByFilter,
  user,
});

export default todos;

export const getVisibleTodos = (state, filter) => {
  const ids = fromList.getIds(state.listByFilter[filter]);
  return ids.map(id => fromById.getTodo(state.byId, id));
};

export const getIsFetching = (state, filter) =>
  fromList.getIsFetching(state.listByFilter[filter]);

export const getErrorMessage = (state, filter) =>
  fromList.getErrorMessage(state.listByFilter[filter]);

export const getUserToken = state =>
  fromUser.getToken(state.user);