import React from 'react'
import PropTypes from 'prop-types'
import TextBlock from './text-block/TextBlock'

const Home = ({ article }) => (
    <div>
        <TextBlock text={ article.factsBody } />
	</div>
);

Home.propTypes = {
  article: PropTypes.any.isRequired
};

export default Home