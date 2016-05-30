import PermalinkContainer, { mapStateToProps, mapDispatchToProps } from 'containers/Permalink'

describe('permalink', () => {

  describe('map state', () => {
    it('should set props.keywords to stringifified state.googleQuery.keywords', () => {
      let mockState = { googleQuery: { keywords: ['test', 'test2'] }}

      expect(mapStateToProps(mockState).keywords).to.be.a('string')
      expect(mapStateToProps(mockState).keywords).to.equal('test,test2')
    })

    it('should set props.searchModifier to state.googleQuery.searchModifier', () => {
      const testSearchModifier = 'a test search modifier'

      let mockState = { googleQuery: { searchModifier: testSearchModifier } }

      let mapStateResult = mapStateToProps(mockState)

      expect(mapStateResult.searchModifier).to.equal(mockState.googleQuery.searchModifier)
    })

  })

})
