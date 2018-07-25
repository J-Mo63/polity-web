import React from 'react'
import PropTypes from 'prop-types'
import LoginButton from "./LoginButton"
import { Link } from 'react-router-dom'
import './nav-bar.css';

const NavBar = ({ user }) => (
    <div>
        <div id="nav-bar" className="nav-bar">
            <div className="nav-bar-container">
                <div className="nav-bar-logo-wrapper">
                    <Link to='/'>
                        <img className="nav-bar-logo" alt=""
                             src={ require("./res/polity_logo.png") } />
                    </Link>
                </div>
                <div className="nav-bar-link-container">
                    <Link className="nav-bar-link" to='/'>About.</Link>
                    <Link className="nav-bar-link" to='/articles'>Polity's // Guide To.</Link>
                    <Link className="nav-bar-link" to="/article/test">Blog.</Link>
                    <Link className="nav-bar-link" to="/article/test">FAQ.</Link>
                    <Link className="nav-bar-link" to="/article/test">Contact.</Link>
                    <LoginButton user={user}/>
                </div>
            </div>
        </div>
        <div id="nav-bar-compact" className="nav-bar-compact">
            <img className="nav-bar-compact-logo" alt=""
                 src={ require("./res/polity_logo.png") } />
            <img className="nav-bar-compact-menu nav-bar-link-right" alt=""
                 src={ require("./res/menu_icon.png") } />
        </div>
    </div>
);

NavBar.propTypes = {
  user: PropTypes.any
};

export default NavBar