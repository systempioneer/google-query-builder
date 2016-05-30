/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import React from 'react'

import KeywordsInputsContainer, { mapStateToProps, mapDispatchToProps } from 'containers/KeywordsInputs';

describe('KeywordsInputsContainer', () => {

  beforeEach(() => {
  });

  describe('map state', () => {
    it('should set props.inputFields to a number of input fields equal to state.googleQuery.numberOfInputs', () => {
      let state = {
        googleQuery: { numberOfInputs: 6 }
      }

      let mapStateResult = mapStateToProps(state)
      expect(mapStateResult.inputFields).to.be.a('Array')
      expect(mapStateResult.inputFields.length).to.equal(6)
    })

    it('should set props.inputFields to an array of valid React elements', () => {
      let state = {
        googleQuery: { numberOfInputs: 6 }
      }
      let mapStateResult = mapStateToProps(state)

      expect(React.isValidElement(mapStateResult.inputFields[0])).to.be.true
    })

    it('should map props.keywords to state.googleQuery.keywords', () => {
      let state = {
        googleQuery: { keywords: ['testa', 'testb', 'testc']}
      }
      let mapStateResult = mapStateToProps(state)

      expect(mapStateResult.keywords).to.be.a('Array')
      expect(mapStateResult.keywords).to.deep.equal(state.googleQuery.keywords)
    })
  })

  describe('map dispatch', () => {
    it('should map addInputField to a function', () => {
      expect(mapDispatchToProps().addInputField).to.be.a('function')
    })
    it('should map setKeywords to a function', () => {
      expect(mapDispatchToProps().setKeywords).to.be.a('function')
    })
    it('should map addKeyword to a function', () => {
      expect(mapDispatchToProps().addKeyword).to.be.a('function')
    })
    it('should map removeKeyword to a function', () => {
      expect(mapDispatchToProps().removeKeyword).to.be.a('function')
    })
    it('should map setKeyword to a function', () => {
      expect(mapDispatchToProps().setKeyword).to.be.a('function')
    })
  })
})
