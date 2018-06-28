import React from 'react'
import PropTypes from 'prop-types'

const IssueText = ({ text }) => (
    <p className={"big-text issue-text fancy-font"} >
        { text }
    </p>
);

IssueText.propTypes = {
    text: PropTypes.string.isRequired
};

export default IssueText