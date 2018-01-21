import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import FilterByTitle from '../components/FilterByTitle'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch) => ({
  onChange: (value) => {
    dispatch(setVisibilityFilter(value))
  }
})

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterByTitle)

export default FilterLink
