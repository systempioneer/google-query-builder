import React, { PropTypes } from 'react'

const SearchModifierInputs = ({presets, searchModifier, setSearchModifier}) => (
  <div>
    <div className="form-inline">
      <div className="form-group">
        <label>Search Modifier: </label>
        <input type="text" className="form-control" value={searchModifier} onChange={(event) => { setSearchModifier(event.target.value) }} />
      </div>
      <div className="form-group">
        <label>Presets: </label>
        <select className="form-control" onChange={(event) => { setSearchModifier(event.target.value) }}>
          <option selected value={""}></option>
          {presets.map((preset, i) => { return <option value={preset.value}>{preset.name}</option> })}
          </select>
      </div>
    </div>
  </div>
)

SearchModifierInputs.PropTypes = {
  presets: PropTypes.array.required,
  setSearchModifier: PropTypes.func.required,
  searchModifier: PropTypes.string
}

export default SearchModifierInputs
