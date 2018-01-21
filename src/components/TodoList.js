import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

const TodoList = ({ todos, onTodoClick }) => (
  <div className="todo-list">
    {
      todos.length ?
      todos.map(todo =>
        <TodoItem
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
        />
      ) :
      <h4>No todo items found!</h4>
    }
  </div>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    removed: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
