import KeywordsInputs from '../components/KeywordsInputs'

import { connect } from 'react-redux'
import React from 'react'
import { addKeywordInputField, setKeywords, addKeyword, removeKeyword, setKeyword } from '../actions/const'

export const mapStateToProps = (state) => {
  var inputFields = []
  for(var i = 0; i < state.googleQuery.numberOfInputs; i++) {
    inputFields.push(<input type="text" className="form-control" />)
  }
  return {
    inputFields: inputFields,
    keywords: state.googleQuery.keywords || [""]
  }
}
export const mapDispatchToProps = (dispatch) => {
  return {
    addInputField: () => {
      dispatch(addKeywordInputField())
    },
    setKeywords: (value) => {
      dispatch(setKeywords(value))
    },
    addKeyword: (value) => {
      dispatch(addKeyword(value))
    },
    removeKeyword: (value) => {
      dispatch(removeKeyword(value))
    },
    setKeyword: (value) => {
      dispatch(setKeyword(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(KeywordsInputs);
