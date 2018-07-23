import React from 'react';
import PropTypes from 'prop-types';
import './heading.css';

const Heading = ({ text, styles }) => (
    <p className={"heading-text " + styles} >
        { text }
    </p>
);

Heading.propTypes = {
    text: PropTypes.string.isRequired,
    styles: PropTypes.string
};

export default Heading