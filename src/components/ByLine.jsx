import React from 'react'
import PropTypes from 'prop-types'

const ByLine = ({ author }) => (
  	<p className="small-text fancy-font">By { author }</p>
)

ByLine.propTypes = {
  author: PropTypes.string.isRequired
}

export default ByLine