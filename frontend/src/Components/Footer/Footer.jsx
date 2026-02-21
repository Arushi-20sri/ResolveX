import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3 className="footer-title">RESOLVEX</h3>
                        <p className="footer-description">
                            Transform your customer support with intelligent automation and real-time insights.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-icon">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-subtitle">Product</h4>
                        <ul className="footer-links">
                            <li><a href="#features">Features</a></li>
                            <li><a href="#pricing">Pricing</a></li>
                            <li><a href="#security">Security</a></li>
                            <li><a href="#roadmap">Roadmap</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-subtitle">Company</h4>
                        <ul className="footer-links">
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#blog">Blog</a></li>
                            <li><a href="#careers">Careers</a></li>
                            <li><a href="#press">Press Kit</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-subtitle">Support</h4>
                        <ul className="footer-links">
                            <li><a href="#help">Help Center</a></li>
                            <li><a href="#docs">Documentation</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                            <li><a href="#status">Status Page</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-subtitle">Legal</h4>
                        <ul className="footer-links">
                            <li><a href="#privacy">Privacy Policy</a></li>
                            <li><a href="#terms">Terms of Service</a></li>
                            <li><a href="#cookies">Cookie Policy</a></li>
                            <li><a href="#compliance">Compliance</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-divider"></div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        &copy; {currentYear} RESOLVEX. All rights reserved. Made with <span className="heart">♥</span> for better customer support.
                    </p>
                    <div className="footer-badges">
                        <span className="badge">SOC 2 Compliant</span>
                        <span className="badge">GDPR Certified</span>
                        <span className="badge">99.9% Uptime</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
