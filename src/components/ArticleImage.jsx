import React from 'react'
import PropTypes from 'prop-types'

const ArticleImage = ({ link, caption, rounded }) => (
    <div>
        <div className={ "article-image-container " + getRounding(rounded) } >
            <img src={ link } />
        </div>
        <p className="facts-image-caption">{ caption }</p>
    </div>
);

const getRounding = (rounded) => {
    return rounded ? 'article-image-round' : '';
};

ArticleImage.propTypes = {
    link: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    rounded: PropTypes.bool.isRequired
};

export default ArticleImage