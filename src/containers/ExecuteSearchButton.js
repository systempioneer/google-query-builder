import ExecuteSearchButton from '../components/ExecuteSearchButton'

import { connect } from 'react-redux'
import { executeSearch } from '../actions/const'

export const mapStateToProps = (state) => {
  return {}
}
export const mapDispatchToProps = (dispatch) => {
  return {
    executeSearch: () => {
      dispatch(executeSearch())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ExecuteSearchButton)
