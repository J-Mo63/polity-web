import React from 'react'
import PropTypes from 'prop-types'

const LoginButton = ({ user }) => (
    <button className="nav-bar-link" >{getButtonText(user)}</button >
);

const getButtonText = (user) => {
    if (isDefined(user)) {
        return "Login";
    }
    else {
        return "Logged in as " + user.username;
    }
};

const isDefined = (obj) => {
    for(let key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
};

LoginButton.propTypes = {
    user: PropTypes.any
};

export default LoginButton