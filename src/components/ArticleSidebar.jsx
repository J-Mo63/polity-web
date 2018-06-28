import React from 'react'
import PropTypes from 'prop-types'
import LoginButton from "./LoginButton";

const ArticleSidebar = () => (
    <div id="article-sidebar" className="article-sidebar">
        <div className="flex-container-vertical">
            <div className="flex-items-vertical">
                <div id="polity-link" className="sidebar-link-container">
                    <a className="sidebar-link" href="#body">Polity.</a>
                </div>
                <div id="facts-link" className="sidebar-link-container">
                    <a className="sidebar-link" href="#facts-header">Facts.</a>
                </div>
                <div id="issue-link" className="sidebar-link-container">
                    <a className="sidebar-link" href="#issue-header">Issue.</a>
                </div>
                <div id="arguments-link" className="sidebar-link-container">
                    <a className="sidebar-link" href="#arguments-header">Argument.</a>
                </div>
            </div>
        </div>
    </div>
);

export default ArticleSidebar