import Permalink from '../components/Permalink'

import { connect } from 'react-redux'

export function mapStateToProps(state) {
  let keywordsQueryString = ""
  let keywords = typeof state.googleQuery.keywords !== 'undefined' ? state.googleQuery.keywords : [""]
  keywords.forEach((keyword, i) => {
    if(keyword === "") { keyword = " " }
    if(i === 0) {
      keywordsQueryString += keyword
    } else {
      keywordsQueryString += "," + keyword
    }
  })

  return {
    keywords: keywords[0] !== "" ? keywordsQueryString : "",
    searchModifier: typeof state.googleQuery.searchModifier === 'undefined' ? "" : state.googleQuery.searchModifier
  }
}
export function mapDispatchToProps(dispatch) {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Permalink);
