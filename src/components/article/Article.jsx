import React from 'react'
import PropTypes from 'prop-types'
import ArticleSidebar from "./article-sidebar/ArticleSidebar";
import HeroSection from "./hero-section/HeroSection";
import FactsSection from "./facts-section/FactsSection";
import IssueSection from "./issue-section/IssueSection";
import OpinionSection from "./opinion-section/OpinionSection";
import ArgumentsSection from "./arguments-section/ArgumentsSection";
import './article.css'

const Article = ({ article }) => (
    <div className="article">
        <ArticleSidebar  bAndW={ article.bAndW }/>
        <HeroSection image={ article.heroImage } datePublished={ article.datePublished }
                     title={ article.title } author={ article.author } context={ article.situation } />
        <FactsSection body={ article.factsBody }
                      imageOne={ article.imageOne } imageTwo={ article.imageTwo }/>
        <IssueSection issue={ article.issueTitle }/>
        <ArgumentsSection argumentsLeft={ article.argumentsLeft }
                          argumentsRight={ article.argumentsRight }
                          leftTitle={ article.leftTitle } rightTitle={ article.rightTitle }
                          bAndW={ article.bAndW } />
        <OpinionSection/>

        { setBAndW(article.bAndW) }
	</div>
);

const setBAndW = (bAndW) => {
    if (bAndW) {
        document.body.classList.add('article-body-b-and-w');
    }
};

Article.propTypes = {
  article: PropTypes.any.isRequired
};

export default Article