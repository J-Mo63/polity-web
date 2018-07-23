import React from 'react'
import PropTypes from 'prop-types'
import Heading from "../../heading/Heading"
import './issue-section.css'
import TextBlock from "../../text-block/TextBlock";

const IssueSection = ({ issue }) => (
    <div className="issue-section" id="issue-section">
        <div className="container">
            <div className="issue-section-content">
                <Heading text="Issue:" />
                <TextBlock text={ issue } />
            </div>
        </div>
    </div>
);

IssueSection.propTypes = {
    issue: PropTypes.string.isRequired
};

export default IssueSection