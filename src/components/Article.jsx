import React from 'react'
import PropTypes from 'prop-types'
import ArticleTitle from './ArticleTitle'
import ByLine from './ByLine'
import ArticleDate from './ArticleDate'
import TextBlock from './TextBlock'
import Heading from './Heading';
import IssueText from "./IssueText";
import ArgumentList from "./ArgumentList";
import ArticleImage from "./ArticleImage";
import ArticleSidebar from "./ArticleSidebar";

const Article = ({ article }) => (
    <div>
        <ArticleSidebar />
    	<ArticleTitle articleTitle={ article.title } />
        <br />
    	<div className="right-text">
	    	<ByLine author={ article.author } />
			<br />
	    	<ArticleDate date={ article.datePublished } />
	    </div>
        <br />
    	<div className="left-text">
    		<TextBlock text={ article.situation } />
    	</div>
        <br />
        <br />
        <div id="facts-header" className="right-text">
            <Heading text="Facts." styles="pull-right" />
        </div>
        <br />
        <br />
        <div className="flex-container">
            <div className="flex-items">
                <div className="left-text">
                    <TextBlock text={ article.factsBody } />
                </div>
                <ArticleImage className="left-text flex-item" link={article.image} />
            </div>
        </div>
        <br />
        <div id="issue-header" name="issue-header" className="right-text">
            <Heading text="Issue:" styles="pull-right" />
        </div>
        <div className="right-text hold-right">
            <IssueText text={ article.issueTitle } />
        </div>
        <br />
        <br />
        <div id="arguments-header" className="left-text left-title">
            <Heading text="Arguments." />
        </div>
        <div className="flex-container">
            <div className="flex-items">
                <div className="arguments flex-item">
                    <ArgumentList argumentList={article.argumentsLeft}
                                  title={article.leftTitle} colour={article.leftColour} />
                </div>
                <div className="arguments flex-item">
                    <ArgumentList argumentList={article.argumentsRight}
                                  title={article.rightTitle} colour={article.rightColour} />
                </div>
            </div>
        </div>
	</div>
);

Article.propTypes = {
  article: PropTypes.any.isRequired
};

export default Article