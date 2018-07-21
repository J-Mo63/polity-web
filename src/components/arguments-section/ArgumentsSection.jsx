import React from 'react'
import PropTypes from 'prop-types'
import Heading from "../heading/Heading";
import ArgumentList from "../argument-list/ArgumentList";
import './arguments-section.css';

const ArgumentsSection = ({ argumentsLeft, leftTitle, argumentsRight, rightTitle, bAndW }) => (
    <div className="arguments-section" id="arguments-section">
        <div className="container">
            <Heading text="Arguments." />
            <div className="arguments-container">
                <div className="arguments">
                    <ArgumentList argumentList={ argumentsLeft }
                                  title={ leftTitle } colour={ getColour(bAndW, true) } />
                </div>
                <div className="arguments">
                    <ArgumentList argumentList={ argumentsRight }
                                  title={ rightTitle } colour={ getColour(bAndW, false) } />
                </div>
            </div>
        </div>
    </div>
);

const getColour = (bAndW, left) => {
    if (bAndW) {
        return left ? '#111111' : 'white';
    }
    return left ? '#112A43' : '#B83030';
};

ArgumentsSection.propTypes = {
    argumentsLeft: PropTypes.any.isRequired,
    argumentsRight: PropTypes.any.isRequired,
    leftTitle: PropTypes.string.isRequired,
    rightTitle: PropTypes.string.isRequired,
    bAndW: PropTypes.bool.isRequired
};

export default ArgumentsSection