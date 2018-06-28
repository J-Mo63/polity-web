import React from 'react'
import PropTypes from 'prop-types'
import TextBlock from "./TextBlock";

const Argument = ({ argument }) => (
    <div>
        <TextBlock text={ argument.text }/>
        <p styles={"reference-info"}>{ "- " + argument.reference }</p>
        <a className="argument-link" href={argument.referenceLink} >Read More</a>
        <br />
        <br />
    </div>
);

Argument.propTypes = {
    argument: PropTypes.any.isRequired
};

export default Argument