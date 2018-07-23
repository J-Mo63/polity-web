import React from 'react';
import './article-sidebar.css';

const ArticleSidebar = () => (
    <div id="article-sidebar" className="article-sidebar">
        <div className="article-sidebar-links">
            <div id="top-link" className="article-sidebar-link-container">
                <a className="article-sidebar-link" href="#body">Top.</a>
            </div>
            <div id="facts-link" className="article-sidebar-link-container">
                <a className="article-sidebar-link" href="#facts-section">Facts.</a>
            </div>
            <div id="issue-link" className="article-sidebar-link-container">
                <a className="article-sidebar-link" href="#issue-section">Issue.</a>
            </div>
            <div id="arguments-link" className="article-sidebar-link-container">
                <a className="article-sidebar-link" href="#arguments-section">Arguments.</a>
            </div>
        </div>
    </div>
);

export default ArticleSidebar