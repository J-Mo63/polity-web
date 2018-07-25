import React from 'react'
import PropTypes from 'prop-types'
import ArticleThumb from "./article-thumb/ArticleThumb";
import "./articles.css"
import Link from "react-router-dom/es/Link";
import Divider from "../divider/Divider";
import Button from "../button/Button";
import Footer from "../footer/Footer";

const Articles = ({ articles }) => (
    <div>
        <div className="articles container">
            <div className="articles-filter-links">
                <Link to="/articles">All</Link>
                <Link to="/articles">National</Link>
                <Link to="/articles">International</Link>
                <Link to="/articles">Polity B&W</Link>
            </div>
            <Divider colour="black" width={ 100 } thickness={ 2 }/>
            <br/>
            <h4 className="articles-title">Our Latest Guides</h4>
            <p className="articles-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <br/>
            <div className="articles-featured-articles">
                <ArticleThumb articles={null} isFeatured={ true }/>
                <ArticleThumb articles={null} isFeatured={ true }/>
            </div>
            <br/>
            <br/>
            <div className="articles-articles-list-container">
                <div className="articles-articles-list">
                    <ArticleThumb articles={null} isFeatured={ false }/>
                    <ArticleThumb articles={null} isFeatured={ false }/>
                    <ArticleThumb articles={null} isFeatured={ false }/>
                    <ArticleThumb articles={null} isFeatured={ false }/>
                    <ArticleThumb articles={null} isFeatured={ false }/>
                    <ArticleThumb articles={null} isFeatured={ false }/>
                </div>
                <div className="articles-ads">
                    <div className="articles-ad-container">
                        <p>Banner Ad</p>
                    </div>
                </div>
            </div>
            <div className="articles-button-container">
                <Button text="Read More"/>
            </div>
        </div>
        <Footer/>
    </div>
);

Articles.propTypes = {
    articles: PropTypes.any
};

export default Articles