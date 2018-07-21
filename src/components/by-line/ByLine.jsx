import React from 'react'
import PropTypes from 'prop-types'
import './by-line.css'

const ByLine = ({ author }) => (
  	<p className="text-by-line italic-text">By { author }</p>
);

ByLine.propTypes = {
  author: PropTypes.string.isRequired
};

export default ByLine