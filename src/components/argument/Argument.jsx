import React from 'react'
import PropTypes from 'prop-types'
import TextBlock from "../text-block/TextBlock";
import './argument.css';

const Argument = ({ argument, colour }) => (
    <div>
        <TextBlock text={ argument.text }/>
        <p>{ "- " + argument.reference }</p>
        <a className={ "argument-link " + getStyle(colour) } href={argument.referenceLink}>Read More</a>
        <br />
        <br />
    </div>
);

const getStyle = (colour) => {
    return colour === 'black' ? 'argument-link-dark' : '';
};

Argument.propTypes = {
    argument: PropTypes.any.isRequired,
    colour: PropTypes.string.isRequired
};

export default Argument