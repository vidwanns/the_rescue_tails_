import React from 'react';
import '../../styles/component/layout/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="outer-container-footer">
        <div className="inner-container-footer">
          <div className="footer-logo">
            {/* Add your SVG logo here */}
            <svg className="logo-svg"></svg>
          </div>
          <div className="footer-links">
            <ul className="links-column">
              <li>Home</li>
              <li>Adopt</li>
              <li>Home</li>
            </ul>
            <ul className="links-column">
              <li>About Us</li>
              <li>Contacts</li>
              <li>How to Help</li>
            </ul>
          </div>
          <div className="footer-contact">
            <p>Awwars and manchester, blu</p>
            <p>Pincode-901503</p>
            <p>+999999999999</p>
            <p>hello@gmail.com</p>
          </div>
          <div className="footer-donate">
            <button className="donate-btn">
              Donate
              <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
