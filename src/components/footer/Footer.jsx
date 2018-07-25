import React from 'react';
import './footer.css';
import Button from "../button/Button";

const Footer = () => (
    <div>
        <div className="footer-topper" />
        <div className="footer">
            <Button colour="white" text="Sign up to Polity." size={ 20 }/>
            <div className="footer-social-links">
                <a href="https://www.facebook.com/news.polity/" target="_blank">
                    <i className="fab fa-facebook-f footer-social-link"/>
                </a>
                <a href="https://twitter.com/talk_polity" target="_blank">
                    <i className="fab fa-twitter footer-social-link"/>
                </a>
            </div>
            <p className="footer-copyright">&copy; 2018 Polity.</p>
        </div>
    </div>
);

export default Footer