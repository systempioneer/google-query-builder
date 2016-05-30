import SearchModifierInputsContainer, { mapStateToProps, mapDispatchToProps } from 'containers/SearchModifierInputs'

describe('search modifier inputs', () => {

  describe('map state', () => {
    it('should set props.presets to state.googleQuery.searchModifierPresets', () => {
      let mockState = { googleQuery: { searchModifierPresets: [{name: 'Preset1', value: 'preset1value'}] } }

      let mapStateResult = mapStateToProps(mockState)

      expect(mapStateResult.presets).to.deep.equal(mockState.googleQuery.searchModifierPresets)
    })

    it('should set props.searchModifier to state.googleQuery.stateModifier', () => {
      const testSearchModifier = 'a test search modifier'

      let mockState = { googleQuery: { searchModifier: testSearchModifier } }

      let mapStateResult = mapStateToProps(mockState)

      expect(mapStateResult.searchModifier).to.deep.equal(mockState.googleQuery.searchModifier)
    })

  })

  describe('map dispatch', () => {
    it('should map setSearchModifier', function() {
      expect(mapDispatchToProps().setSearchModifier).to.be.a('function')
    })
  })

})
