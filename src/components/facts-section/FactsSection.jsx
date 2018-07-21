import React from 'react'
import PropTypes from 'prop-types'
import Heading from "../heading/Heading";
import TextBlock from "../text-block/TextBlock";
import FactsImage from "../facts-image/FactsImage";
import './facts-section.css';

const FactsSection = ({ body, imageOne, imageTwo }) => (
    <div className="facts-section" id="facts-section">
        <div className="container">
            <Heading text="Facts." styles="pull-right" />
            <br />
            <br />
            <div className="facts-content">
                <div className="facts-body facts-item-padding">
                    <TextBlock text={ body } />
                </div>
                <div className="facts-images">
                    <FactsImage link={ imageOne } caption="" rounded={ true } />
                    <FactsImage link={ imageTwo }
                                caption={ "Some text about the image above" } rounded={ false } />
                </div>
            </div>
        </div>
    </div>
);

FactsSection.propTypes = {
    body: PropTypes.string.isRequired,
    imageOne: PropTypes.string.isRequired,
    imageTwo: PropTypes.string.isRequired
};

export default FactsSection