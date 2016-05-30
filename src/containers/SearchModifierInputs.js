import SearchModifierInputs from '../components/SearchModifierInputs'

import { connect } from 'react-redux'
import * as Actions from '../actions/const'

export function mapStateToProps(state) {
  return {
    presets: state.googleQuery.searchModifierPresets,
    searchModifier: state.googleQuery.searchModifier
  }
}
export function mapDispatchToProps(dispatch) {
  return {
    setSearchModifier: (value) => { dispatch(Actions.setSearchModifier(value)) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchModifierInputs);
