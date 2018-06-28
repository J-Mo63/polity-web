import React from 'react'
import PropTypes from 'prop-types'
import Heading from "./Heading";

const ArticleTitle = ({ articleTitle }) => (
  	<div className="text-container center">
        <Heading text={ articleTitle } />
    </div>
)

ArticleTitle.propTypes = {
  articleTitle: PropTypes.string.isRequired
}

export default ArticleTitle