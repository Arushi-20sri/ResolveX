import React, { useState } from 'react';
import './IssuePanel.css';

const IssuePanel = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        issueTitle: '',
        issueDescription: '',
        priority: 'medium',
        category: 'general'
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Issue submitted:', formData);
        setSubmitted(true);
        
        // Reset form after 2 seconds
        setTimeout(() => {
            setFormData({
                name: '',
                email: '',
                issueTitle: '',
                issueDescription: '',
                priority: 'medium',
                category: 'general'
            });
            setSubmitted(false);
            onClose();
        }, 2000);
    };

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <>
            {/* Backdrop */}
            {isOpen && (
                <div className="issue-panel-backdrop" onClick={handleBackdropClick}></div>
            )}

            {/* Side Panel */}
            <div className={`issue-panel ${isOpen ? 'open' : ''}`}>
                <div className="issue-panel-header">
                    <h2>Report an Issue</h2>
                    <button className="close-btn" onClick={onClose} aria-label="Close">
                        ×
                    </button>
                </div>

                {submitted ? (
                    <div className="success-message">
                        <div className="success-icon">✓</div>
                        <h3>Thank You!</h3>
                        <p>Your issue has been submitted successfully.</p>
                        <p className="message-text">Our team will review it and get back to you soon.</p>
                    </div>
                ) : (
                    <form className="issue-form" onSubmit={handleSubmit}>
                        {/* Name Field */}
                        <div className="form-group">
                            <label htmlFor="name">Your Name *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Enter your name"
                            />
                        </div>

                        {/* Email Field */}
                        <div className="form-group">
                            <label htmlFor="email">Email Address *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Enter your email"
                            />
                        </div>

                        {/* Category Field */}
                        <div className="form-group">
                            <label htmlFor="category">Category *</label>
                            <select
                                id="category"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                required
                            >
                                <option value="general">General Support</option>
                                <option value="technical">Technical Issue</option>
                                <option value="billing">Billing</option>
                                <option value="feature">Feature Request</option>
                                <option value="bug">Bug Report</option>
                            </select>
                        </div>

                        {/* Priority Field */}
                        <div className="form-group">
                            <label htmlFor="priority">Priority *</label>
                            <select
                                id="priority"
                                name="priority"
                                value={formData.priority}
                                onChange={handleChange}
                                required
                            >
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                                <option value="critical">Critical</option>
                            </select>
                        </div>

                        {/* Issue Title */}
                        <div className="form-group">
                            <label htmlFor="issueTitle">Issue Title *</label>
                            <input
                                type="text"
                                id="issueTitle"
                                name="issueTitle"
                                value={formData.issueTitle}
                                onChange={handleChange}
                                required
                                placeholder="Brief summary of your issue"
                                maxLength="100"
                            />
                        </div>

                        {/* Issue Description */}
                        <div className="form-group">
                            <label htmlFor="issueDescription">Description *</label>
                            <textarea
                                id="issueDescription"
                                name="issueDescription"
                                value={formData.issueDescription}
                                onChange={handleChange}
                                required
                                placeholder="Provide detailed information about your issue"
                                rows="5"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="submit-btn-container">
                            <button type="submit" className="submit-btn">
                                Submit Issue
                            </button>
                        </div>
                    </form>
                )}

                <div className="issue-panel-footer">
                </div>
            </div>
        </>
    );
};

export default IssuePanel;
