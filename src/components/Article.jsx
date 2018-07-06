import React from 'react'
import PropTypes from 'prop-types'
import ArticleSidebar from "./ArticleSidebar";
import HeroSection from "./HeroSection";
import FactsSection from "./FactsSection";
import IssueSection from "./IssueSection";
import OpinionSection from "./OpinionSection";
import ArgumentsSection from "./ArgumentsSection";

const Article = ({ article }) => (
    <div>
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
        document.body.classList.add('body-b-and-w');
    }
};

Article.propTypes = {
  article: PropTypes.any.isRequired
};

export default Article