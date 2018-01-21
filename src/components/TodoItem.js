import React from 'react'
import PropTypes from 'prop-types'
import * as moment from 'moment'
import 'moment/locale/uk'
moment.locale('uk');

const TodoItem = ({ onClick, removed, title, description, created_at }) => (
  <div className="todo-item">
    <span onClick={onClick} className="todo-item_remove">x</span>
    <h4>{title}</h4>
    <p>{description}</p>
    <span>Added: {moment(created_at).format('L')}</span>
  </div>
)

TodoItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  removed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default TodoItem
