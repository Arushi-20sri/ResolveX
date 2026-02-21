import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1 className="hero-title">
                    Transform Your Customer Support
                </h1>
                <p className="hero-subtitle">
                    RESOLVEX - An intelligent customer support system designed to 
                    streamline your service delivery and boost customer satisfaction
                </p>
                <div className="hero-buttons">
                    <button className="btn btn-primary">
                        Get Started
                    </button>
                    <button className="btn btn-secondary">
                        Learn More
                    </button>
                </div>
            </div>
            <div className="hero-stats">
                <div className="stat-item">
                    <span className="stat-number">24/7</span>
                    <span className="stat-label">Support Available</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">99.9%</span>
                    <span className="stat-label">Uptime Guaranteed</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">50k+</span>
                    <span className="stat-label">Happy Customers</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">5min</span>
                    <span className="stat-label">Avg Response Time</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
