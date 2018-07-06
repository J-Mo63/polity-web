import React from 'react'
import PropTypes from 'prop-types'

const ByLine = ({ author }) => (
  	<p className="text-md italic-text">By { author }</p>
);

ByLine.propTypes = {
  author: PropTypes.string.isRequired
};

export default ByLine