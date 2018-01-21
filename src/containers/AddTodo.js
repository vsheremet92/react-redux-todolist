import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let taskTitle;
  let taskDescription;

  return (
    <div className="add-todo">
      <h4>Add new Todo item</h4>
      <form className="add-todo-form" onSubmit={e => {
        e.preventDefault()
        if (!taskTitle.value.trim() || !taskDescription.value.trim()) {
          return
        }
        dispatch(addTodo(taskTitle.value, taskDescription.value))
        taskTitle.value = ''
        taskDescription.value = ''
      }}>
        <h5>Title</h5>
        <input ref={node => {
          taskTitle = node
        }} />
        <h5>Description</h5>
        <input ref={node => {
          taskDescription = node
        }} />
        <br /><br />
        <button className="add-todo-form_submit" type="submit">
          Submit
        </button>
      </form>
      <hr />
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
