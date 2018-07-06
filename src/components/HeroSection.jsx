import React from 'react'
import PropTypes from 'prop-types'
import ByLine from "./ByLine";
import ArticleDate from "./ArticleDate";
import TextBlock from "./TextBlock";
import Heading from "./Heading";

const HeroSection = ({ image, title, author, datePublished, context }) => (
    <div className="hero-section" style={{backgroundImage: `url(${image})`}}>
        <div className="container">
            <div className="hero-content">
                <Heading text={ title } />
                <br />
                <ArticleDate date={ datePublished } />
                <ByLine author={ author } />
                <br />
                <div className="context">
                    <TextBlock text={ context } />
                </div>
            </div>
        </div>
    </div>
);

HeroSection.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    datePublished: PropTypes.string.isRequired,
    context: PropTypes.string.isRequired
};

export default HeroSection