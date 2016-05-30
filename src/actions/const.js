/* Populated by react-webpack-redux:action */

export const ADD_KEYWORD_INPUT_FIELD = "ADD_KEYWORD_INPUT_FIELD"
export const SET_SEARCH_MODIFIER = "SET_SEARCH_MODIFIER"
export const SET_KEYWORDS = "SET_KEYWORDS"
export const ADD_KEYWORD = "ADD_KEYWORD"
export const REMOVE_KEYWORD = "REMOVE_KEYWORD"
export const SET_KEYWORD = "SET_KEYWORD"
export const EXECUTE_SEARCH = "EXECUTE_SEARCH"

export function addKeywordInputField() {
  return {
    type: ADD_KEYWORD_INPUT_FIELD
  }
}

export function setSearchModifier(value) {
  return {
    type: SET_SEARCH_MODIFIER,
    value: value
  }
}

export function setKeywords(value) {
  return {
    type: SET_KEYWORDS,
    value: value
  }
}
export function addKeyword(value) {
  return {
    type: ADD_KEYWORD,
    value: value
  }
}

export function removeKeyword(value) {
  return {
    type: REMOVE_KEYWORD,
    value: value
  }
}

export function setKeyword(value) {
  return {
    type: SET_KEYWORD,
    value: value
  }
}

export function executeSearch() {
  return {
    type: EXECUTE_SEARCH
  }
}
