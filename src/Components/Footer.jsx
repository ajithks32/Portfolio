import React from 'react';
import './Footer.css'; // External CSS for footer styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-md-6 text-center text-md-start">
            <p className="footer-text">
              &copy; {new Date().getFullYear()} Ajith S. All Rights Reserved.
            </p>
          </div>
          
          {/* Right Section */}
          <div className="col-md-6 text-center text-md-end">
            <ul className="social-icons">
              <li>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
