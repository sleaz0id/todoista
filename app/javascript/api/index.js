const fetch = (path, options = {}) =>
  window.fetch(path, options)
    .then(response => response.json())
    .catch(error => console.error(error))

export const fetchTodos = (filter, authToken) =>
  fetch('/api/v1/todos', {
    headers: { 'Authorization': `Bearer ${authToken}` }
  })
    .then(todos => {
      switch (filter) {
        case 'all':
          return todos;
        case 'active':
          return todos.filter(t => !t.completed);
        case 'completed':
          return todos.filter(t => t.completed);
        default:
          throw new Error(`Unknown filter: ${filter}`);
      }});
  
export const addTodo = (text, authToken) =>
  fetch('api/v1/todos', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`,
    },
    body: JSON.stringify({ text }),
  }).then(todo => todo)
    .catch(error => console.error(error))

export const toggleTodo = (id, authToken) =>
  fetch(`api/v1/todos/${id}/toggle`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`,
    },
  }).then(todo => todo)
    .catch(error => console.error(error))

export const signIn = ({ email, password }) =>
  fetch('oauth/token', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      grant_type: 'password',
      email,
      password
    }),
  })