import React, { PropTypes } from 'react'

const Permalink = ({keywords, searchModifier}) => {
  return (
      <p>{"Permalink for this configuration: "}
      {window.location.href +
      (keywords !== "" ? encodeURIComponent("&keywords=[" + keywords + "]").toString() : "") +
      (typeof searchModifier !== undefined && searchModifier !== "" && keywords !== "" ? "&searchModifier=" + encodeURIComponent(searchModifier) : "")}</p>
  )
}

Permalink.PropTypes = {
  keywords: PropTypes.string,
  searchModifier: PropTypes.string
}

export default Permalink
