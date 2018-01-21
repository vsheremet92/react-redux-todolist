let nextTodoId = 0
let currDate = new Date()

export const addTodo = (title, description)=> ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  title,
  description,
  created_at: currDate
})

export const removeTodo = (id)=> ({
  type: 'REMOVE_TODO',
  id
})

export const setVisibilityFilter = (filter)=> ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})
