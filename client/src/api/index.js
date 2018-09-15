const fetch = (path, options = {}) =>
  window.fetch(path, options)
    .then(response => response.json())
    .catch(error => console.error(error))

export const fetchTodos = (filter) =>
  fetch('/api/v1/todos')
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
  
export const addTodo = (text) =>
  fetch('api/v1/todos', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ text }),
  }).then(todo => todo)
    .catch(error => console.error(error))

export const toggleTodo = (id) => 
  fetch(`api/v1/todos/${id}/toggle`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  }).then(todo => todo)
    .catch(error => console.error(error))
