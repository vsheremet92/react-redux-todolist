import { connect } from 'react-redux'
import { removeTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos.filter((item)=> {
        return !item.removed
      })
    default:
      return todos.filter((item)=> {
        return item.title === filter && !item.removed
      })
  }

}

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = {
  onTodoClick: removeTodo
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
