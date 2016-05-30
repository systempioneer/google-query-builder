'use strict';

import reducer from 'reducers/'
import * as Actions from 'actions/const'

describe('google query reducer', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).not.to.be.undefined
  })

  it('should increment the numberOfInputs count', () => {
    expect(reducer(undefined, { type: Actions.ADD_KEYWORD_INPUT_FIELD }).googleQuery.numberOfInputs).to.equal(2)
  })

  it('should set the search modifier', () => {
    const testSearchModifier = 'intext: exploding kittens'

    expect(reducer(undefined, {type: Actions.SET_SEARCH_MODIFIER, value: testSearchModifier}).googleQuery.searchModifier).to.equal(testSearchModifier)
  })

  it('should set the keywords', () => {
    const testKeywords = ['one', 'two', 'three', 'four']

    expect(reducer(undefined, {type: Actions.SET_KEYWORDS, value: testKeywords}).googleQuery.keywords).to.deep.equal(testKeywords)
  })

  it('should remove a keyword', () => {
    const testKeywords = ['cat', 'dog', 'hamster', 'lizard']
    let testState = {
      googleQuery: {
        keywords: testKeywords
      }
    }

    expect(reducer(testState, {type: Actions.REMOVE_KEYWORD, value: 'hamster'}).googleQuery.keywords).to.deep.equal(['cat', 'dog', 'lizard'])
  })

  it('should add a keyword', () => {
    const testKeywords = ['Patrick Stewart', 'LeVar Burton']
    let testState = {
      googleQuery: {
        keywords: testKeywords
      }
    }

    expect(reducer(testState, {type: Actions.ADD_KEYWORD, value: 'Brent Spiner'}).googleQuery.keywords).to.deep.equal(['Patrick Stewart', 'LeVar Burton', 'Brent Spiner'])
  })

  it('should set a keyword at a particular index', () => {
    const testKeywords = ['Darth Vader', 'Darth Maul', 'Supreme Leader Snoke', 'Darth Sidious', 'Count Dooku']

    let testState = {
      googleQuery: {
        keywords: testKeywords
      }
    }

    expect(reducer(testState, {type: Actions.SET_KEYWORD, value: {index: 2, value: 'Darth Plagueis'}}).googleQuery.keywords)
      .to.deep.equal(['Darth Vader', 'Darth Maul', 'Darth Plagueis', 'Darth Sidious', 'Count Dooku'])
  })

})
