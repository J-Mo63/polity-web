import React from 'react'
import PropTypes from 'prop-types'

const ArticleImage = ({ link }) => (
    <div className="article-image" style={{backgroundImage: `url(${link})`}} />

);

ArticleImage.propTypes = {
    link: PropTypes.string.isRequired
};

export default ArticleImage