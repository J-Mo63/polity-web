import React from 'react'
import PropTypes from 'prop-types'

let Markdown = require('react-remarkable');

const TextBlock = ({ text, styles }) => (
    <div className={"body-text " + styles}>
        <Markdown source={ text } />
    </div>
);

TextBlock.propTypes = {
    text: PropTypes.string.isRequired,
    styles: PropTypes.string
};

export default TextBlock