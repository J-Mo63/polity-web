import React from 'react';
import './article-sidebar.css';

const ArticleSidebar = () => (
    <div id="article-sidebar" className="article-sidebar">
        <div className="flex-container-vertical">
            <div className="flex-items-vertical">
                <div id="top-link" className="sidebar-link-container">
                    <a className="sidebar-link" href="#body">Top.</a>
                </div>
                <div id="facts-link" className="sidebar-link-container">
                    <a className="sidebar-link" href="#facts-section">Facts.</a>
                </div>
                <div id="issue-link" className="sidebar-link-container">
                    <a className="sidebar-link" href="#issue-section">Issue.</a>
                </div>
                <div id="arguments-link" className="sidebar-link-container">
                    <a className="sidebar-link" href="#arguments-section">Arguments.</a>
                </div>
            </div>
        </div>
    </div>
);

export default ArticleSidebar