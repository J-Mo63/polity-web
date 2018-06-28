import React from 'react'
import PropTypes from 'prop-types'
import LoginButton from "./LoginButton";
import { Link } from 'react-router-dom'

const NavBar = ({ user }) => (
    <div>
        <div id="nav" className="nav-bar">
            <div className="nav-bar-container">
                <div className="nav-logo-wrapper">
                    <Link to='/'>
                        <img className="nav-logo" src="../../public/polity_logo.png" />
                    </Link>
                </div>
                <div className="nav-bar-link-container">
                    <Link className="nav-link" to='/test'>About.</Link>
                    <Link className="nav-link" to='/test'>Polity's // Guide To.</Link>
                    <Link className="nav-link" to='/test'>FAQ.</Link>
                    <Link className="nav-link" to='/test'>Contact.</Link>
                    <LoginButton user={user}/>
                </div>
            </div>
        </div>
        <div id="nav-compact" className="nav-bar-compact">
            <img className="nav-bar-compact-logo" src="../../public/polity_logo.png" />
            <img className="nav-bar-compact-menu nav-link-right" src="../../public/menu_icon.png" />
        </div>
    </div>
);

NavBar.propTypes = {
  user: PropTypes.any
};

export default NavBar