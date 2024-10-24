import React from 'react';
import '../../styles/component/layout/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="outer-container-footer">
                <div className="inner-container-footer">
                    <div className="footer-left">
                        <div className="footer-logo">
                            <div className="logo-text">the rescue tails</div>
                        </div>
                        <h2 className="footer-tagline">We Help Homeless Animals to Get a Decent Life!</h2>
                    </div>
                    <div className="footer-center">
                        <nav className="footer-nav">
                            <ul>
                                <li>Home</li>
                                <li>Adopt</li>
                                <li>Home</li>
                            </ul>
                            <ul>
                                <li>About Us</li>
                                <li>Contacts</li>
                                <li>How to Help</li>
                            </ul>
                        </nav>
                    </div>
                    <div className="footer-right">
                        <address>
                            Awwars and manchester, Blu<br />
                            Pincode-901503<br />
                            +9999999999999<br />
                            hello@gmail.com
                        </address>
                        <button className="donate-btn">Donate <span className="arrow">→</span></button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
