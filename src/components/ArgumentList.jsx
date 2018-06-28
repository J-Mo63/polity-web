import React from 'react'
import PropTypes from 'prop-types'
import Argument from './Argument';
import TextBlock from './TextBlock';

const ArgumentList = ({ argumentList, title, colour }) => (
    <div className="argument-card" style={{background: colour}}>
        <TextBlock text={ title } styles="argument-title"/>
        <div className="divider" />
        <br />
        { argumentList.map(argument =>
            <Argument argument={argument} />
        )}
    </div>
);

ArgumentList.propTypes = {
    argumentList: PropTypes.any.isRequired,
    title: PropTypes.string.isRequired,
    colour: PropTypes.string.isRequired
};

export default ArgumentList