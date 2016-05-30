import ExecuteSearchButton, { mapDispatchToProps } from 'containers/ExecuteSearchButton'

describe('execute search button', () => {
  describe('map dispatch to props', () => {
    it('should map executeSearch', () => {
      expect(mapDispatchToProps().executeSearch).to.be.a('function')
    })
  })
})
