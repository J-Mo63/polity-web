import React from 'react'
import PropTypes from 'prop-types'
import IssueText from "./IssueText";
import Heading from "./Heading";

const IssueSection = ({ issue }) => (
    <div className="issue-section" id="issue-section">
        <div className="container">
            <div className="issue-content">
                <Heading text="Issue:" />
                <IssueText text={ issue } />
            </div>
        </div>
    </div>
);

IssueSection.propTypes = {
    issue: PropTypes.string.isRequired
};

export default IssueSection