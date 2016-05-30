import React, { PropTypes } from 'react'

const KeywordsInputs = ({inputFields, keywords, addInputField, addKeyword, removeKeyword, setKeywords, setKeyword}) => (
  <div className="form-horizontal">
    <div className="form-group">
      <label className="col-xs-2">Keywords:</label>
      <div className="col-xs-10">
        {keywords.map((keyword, i) => {
          return <input type="text" defaultValue={keyword} data-index={i} className="form-control" onChange={(e) => {
            setKeyword({index: e.target.attributes['data-index'].value, value: e.target.value})
          }} />
        })}
      </div>
    </div>
    <div className="form-group">
      <label className="col-xs-2"><i className="glyphicon glyphicon-plus pull-right pointer-on-hover" onClick={(e) => { addKeyword('') }}></i></label>
    </div>
  </div>
)

KeywordsInputs.PropTypes = {
  inputFields: PropTypes.element.required,
  keywords: PropTypes.array.required,
  addInputField: PropTypes.func.required,
  addKeyword: PropTypes.func.required,
  removeKeyword: PropTypes.func.required,
  setKeywords: PropTypes.func.required,
  setKeyword: PropTypes.func.required
}

export default KeywordsInputs
