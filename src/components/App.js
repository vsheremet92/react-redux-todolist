import React from 'react'
import AddTodo from '../containers/AddTodo'
import Filter from './Filter'
import VisibleTodoList from '../containers/VisibleTodoList'
import Pagination from './Pagination'

const App = () => (
  <div>
    <AddTodo />
    <Filter />
    <Pagination>
      <VisibleTodoList />
    </Pagination>  
  </div>
)

export default App
