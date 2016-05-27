import React from 'react'

const SearchModifierInputs = () => (
  <div>
    <div className="form-inline">
      <div className="form-group">
        <label>Search Modifier: </label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label>Presets: </label>
        <select className="form-control"><option selected value></option><option>Search Only Forums</option></select>
      </div>
    </div>
  </div>
)

export default SearchModifierInputs
