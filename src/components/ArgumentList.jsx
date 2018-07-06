import React from 'react'
import PropTypes from 'prop-types'
import Argument from './Argument';
import TextBlock from './TextBlock';
import Divider from "./Divider";

const ArgumentList = ({ argumentList, title, colour }) => (
    <div className="argument-card " style={{background: colour, color: getColour(colour)}}>
        <TextBlock text={ title } styles="argument-title"/>
        <Divider colour={ getColour(colour) }/>
        <br />
        { argumentList.map(argument =>
            <Argument argument={argument} colour={ getColour(colour) } />
        )}
    </div>
);

const getColour = (colour) => {
    return colour === 'white' ? 'black' : 'white';
};

ArgumentList.propTypes = {
    argumentList: PropTypes.any.isRequired,
    title: PropTypes.string.isRequired,
    colour: PropTypes.string.isRequired
};

export default ArgumentList