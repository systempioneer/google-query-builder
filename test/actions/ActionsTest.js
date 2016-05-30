import * as Actions from 'actions/const'

describe('action creators', () => {
  it('should handle addKeywordInputField', () => {
    expect(Actions.addKeywordInputField().type).to.equal(Actions.ADD_KEYWORD_INPUT_FIELD)
  })

  it('should handle setSearchModifier', () => {
    const testValue = 'testval'

    expect(Actions.setSearchModifier(testValue).type).to.equal(Actions.SET_SEARCH_MODIFIER)
    expect(Actions.setSearchModifier(testValue).value).to.equal(testValue)
  })

  it('should handle setKeywords', () => {
    const testValue = ['a keywd', 'testtesttest', 'onetwothree']

    expect(Actions.setKeywords(testValue).type).to.equal(Actions.SET_KEYWORDS)
    expect(Actions.setKeywords(testValue).value).to.equal(testValue)
  })

  it('should handle addKeyword', () => {
    const testValue = 'test keyword'

    expect(Actions.addKeyword(testValue).type).to.equal(Actions.ADD_KEYWORD)
    expect(Actions.addKeyword(testValue).value).to.equal(testValue)
  })

  it('should handle removeKeyword', () => {
    const testValue = 'another test keyword'

    expect(Actions.removeKeyword(testValue).type).to.equal(Actions.REMOVE_KEYWORD)
    expect(Actions.removeKeyword(testValue).value).to.equal(testValue)
  })

  it('should handle setKeyword', () => {
    const testValue = {index: 3, value: 'test setting keyword'}

    expect(Actions.setKeyword(testValue).type).to.equal(Actions.SET_KEYWORD)
    expect(Actions.setKeyword(testValue).value).to.equal(testValue)
  })
})
