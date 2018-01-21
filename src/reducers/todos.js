const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          description: action.description,
          created_at: action.created_at,
          removed: false
        }
      ]
    case 'REMOVE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, removed: true}
          : todo
      )
    default:
      return state
  }
}

export default todos
