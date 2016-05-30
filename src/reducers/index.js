/* Combine all available reducers to a single root reducer.
 *
 * CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import { combineReducers } from 'redux'
import * as Actions from '../actions/const'

let initialState = {
  numberOfInputs: 1,
  keywords: [''],
  searchModifierPresets: [
    { name: 'Search Only Forums', value: 'intext: forum' }
  ]
}

let actionHandlers = []
actionHandlers.push((state, action) => {
  if(action.type === Actions.ADD_KEYWORD_INPUT_FIELD) {
    return Object.assign({}, state, {
      numberOfInputs: state.numberOfInputs + 1
    })
  }
})
actionHandlers.push((state, action) => {
  if(action.type === Actions.SET_SEARCH_MODIFIER) {
    return Object.assign({}, state, {
      searchModifier: action.value
    })
  }
})
actionHandlers.push((state, action) => {
  if(action.type === Actions.SET_KEYWORDS) {
    return Object.assign({}, state, {
      keywords: action.value
    })
  }
})
actionHandlers.push((state, action) => {
  if(action.type === Actions.ADD_KEYWORD) {
    let keywords = state.keywords || []
    keywords.push(action.value)

    return Object.assign({}, state, {
      keywords: keywords
    })
  }
})
actionHandlers.push((state, action) => {
  if(action.type === Actions.REMOVE_KEYWORD) {
    let keywords = state.keywords || []
    for (let i = keywords.length - 1; i >= 0; i--) {
      if(keywords[i] === action.value) {
        keywords.splice(i, 1);
      }
    }

    return Object.assign({}, state, {
      keywords: keywords
    })
  }
})
actionHandlers.push((state, action) => {
  if(action.type === Actions.SET_KEYWORD) {
    let keywords = state.keywords || []
    for (let i = keywords.length - 1; i >= 0; i--) {
      if(i === parseInt(action.value.index)) {
        keywords[i] = action.value.value
      }
    }

    return Object.assign({}, state, {
      keywords: keywords
    })
  }
})


const reducers = {
  googleQuery: (state = initialState, action) => {
    let reducedState = state
    actionHandlers.forEach((handler) => { reducedState = handler(state, action) || reducedState })
    return reducedState
  }
}
module.exports = combineReducers(reducers)
