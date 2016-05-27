import React from 'react'

const KeywordsInputs = () => (
  <div className="form-horizontal">
    <div className="form-group">
      <label className="col-xs-2">Keywords:</label>
      <div className="col-xs-10">
        <input type="text" className="form-control" />
      </div>
    </div>
    <div className="form-group">
      <label className="col-xs-2"><i className="glyphicon glyphicon-plus pull-right pointer-on-hover"></i></label>
    </div>
  </div>
)

export default KeywordsInputs
