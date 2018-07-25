import React from 'react'
import PropTypes from 'prop-types'
import './button.css';

const Button = ({ text, colour, size }) => (
    <button className="button"
         style={{
             color: colour,
             borderColor: colour,
             fontSize: size
         }}>{ text }</button>
);

Button.propTypes = {
    text: PropTypes.string.isRequired,
    colour: PropTypes.string,
    size: PropTypes.string
};

export default Button