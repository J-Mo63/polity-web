import React from 'react'
import PropTypes from 'prop-types'
import Argument from './argument/Argument';
import TextBlock from '../../../text-block/TextBlock';
import Divider from "../../../divider/Divider";
import './argument-list.css';

const ArgumentList = ({ argumentList, title, colour }) => (
    <div className="argument-list-card " style={{background: colour, color: getColour(colour)}}>
        <TextBlock text={ title } styles="argument-list-title"/>
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