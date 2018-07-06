import React from 'react'
import PropTypes from 'prop-types'

const Subheading = ({ text, styles }) => (
    <p className={"text-subheading " + styles} >
        { text }
    </p>
);

Subheading.propTypes = {
    text: PropTypes.string.isRequired,
    styles: PropTypes.string
};

export default Subheading