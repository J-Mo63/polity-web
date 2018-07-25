import React from 'react'
import PropTypes from 'prop-types'
import './divider.css';

const Divider = ({ colour, width, thickness }) => (
    <div className="divider"
         style={{
             background: colour,
             height: thickness,
             width: width + "%",
             marginLeft: calculateMargin(width) + "%"
         }}/>
);

const calculateMargin = (width) => {
    return (100 - width) / 2;
};

Divider.propTypes = {
    colour: PropTypes.string.isRequired,
    width: PropTypes.number,
    thickness: PropTypes.number
};

export default Divider