import React from 'react';
import '../../styles/component/sixthSection/sixthSection.css';

const SixthSection = () => {
    return (
        <section className="sixth-section">
            <div className="container1">
                <div className="contact-form">
                    <h3>Say Hello!</h3>
                    <p>Have questions, want to be volunteer or partner? We'd love to hear from you! Contact us and we’ll get back to you as soon possible</p>
                    
                    <form>
                        <div className="input-group">
                            <div className="input-field">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" />
                            </div>
                            <div className="input-field">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" />
                            </div>
                        </div>

                        <div className="input-group">
                            <div className="input-field">
                                <label htmlFor="phone">Phone</label>
                                <input type="text" id="phone" />
                            </div>
                            <div className="input-field">
                                <label htmlFor="topic">Topic</label>
                                <select id="topic">
                                    <option>Choose topic</option>
                                    <option value="volunteer">Volunteer</option>
                                    <option value="partner">Partner</option>
                                    <option value="support">Support</option>
                                </select>
                            </div>
                        </div>

                        <div className="input-field">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="5"></textarea>
                        </div>

                        <button type="submit" className="send-btn">
                            <img src="/images/sixthSection/send-icon.svg" alt="Send Icon" className="send-icon" />
                            Send
                        </button>
                    </form>
                </div>

                <div className="contact-info">
                    <img src="/images/sixthSection/running-dogs.png" alt="Dogs Running" className="contact-image" />
                    <div className="info-details">
                        <div className="info-item">
                            <img src="/images/sixthSection/phone-icon.svg" alt="Phone Icon" className="info-icon" />
                            <div className="info-text">
                                <p>Phone</p>
                                <p>957234601</p>
                                <p>957234601</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <img src="/images/sixthSection/adress-icon.svg" alt="Address Icon" className="info-icon" />
                            <div className="info-text">
                                <p>Address</p>
                                <p>Awwars and manchester, Blu</p>
                                <p>Pincode-901503</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SixthSection;