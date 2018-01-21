import React from 'react'
import PropTypes from 'prop-types'

const FilterByTitle = ({ onChange }) => {

  return (
      <div>
        <h5>Title</h5>
        <input type="text" onChange={e=> {
          e.preventDefault()
          onChange(e.target.value || "SHOW_ALL")
        }} />
      </div>
  )
}

FilterByTitle.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default FilterByTitle
