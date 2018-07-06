import React from 'react'
import PropTypes from 'prop-types'
import Heading from "./Heading";
import TextBlock from "./TextBlock";
import ArticleImage from "./ArticleImage";

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
                    <ArticleImage link={ imageOne } caption="" rounded={ true } />
                    <ArticleImage link={ imageTwo }
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