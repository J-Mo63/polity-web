import React from 'react'
import PropTypes from 'prop-types'

const Divider = ({ colour }) => (
    <div className="divider"  style={{background: colour}} />
);

Divider.propTypes = {
    colour: PropTypes.string.isRequired
};

export default Divider