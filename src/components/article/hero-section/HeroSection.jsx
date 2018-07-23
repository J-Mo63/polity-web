import React from 'react'
import PropTypes from 'prop-types'
import ByLine from "./by-line/ByLine";
import ArticleDate from "./article-date/ArticleDate";
import TextBlock from "../../text-block/TextBlock";
import Heading from "../../heading/Heading";
import './hero-section.css';

const HeroSection = ({ image, title, author, datePublished, context }) => (
    <div className="hero-section" style={{backgroundImage: `url(${image})`}}>
        <div className="container">
            <div className="hero-section-content">
                <Heading text={ title } />
                <br />
                <ArticleDate date={ datePublished } />
                <ByLine author={ author } />
                <br />
                <div className="hero-section-context">
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