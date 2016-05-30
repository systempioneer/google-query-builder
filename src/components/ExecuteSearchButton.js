import React, { PropTypes } from 'react'

const ExecuteSearchButton = ({executeSearch}) => (
  <button className="btn btn-primary" onClick={executeSearch}>Go</button>
)

ExecuteSearchButton.PropTypes = {
  executeSearch: PropTypes.func.required
}

export default ExecuteSearchButton
