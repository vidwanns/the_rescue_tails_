import React from "react";
import '../../styles/component/thirdSection/thirdSection.css';

const ThirdSection = () => {
  return (
    <section className="third-section">
      <div className="help-container">
        <div className="text-content">
          <h2>How to help?</h2>
          <p>
            If you have extra time on your hand and would like to help please consider volunteering! Rescue groups need dedicated volunteers to help with events, fundraisers, home checks, transport, etc. All of these things help enable the rescue to expand their network and help more dogs in need.
          </p>
          <div className="buttons">
            <button className="adopt-btn">Adopt</button>
            <button className="foster-btn">Foster</button>
            <button className="volunteer-btn">Volunteer</button>
            <button className="donate-btn">Donate</button>
          </div>
          <p>
            If you are looking to add a furry companion to your family, please consider adopting instead of buying. When you adopt you are saving not one life but two. Once a dog in our program is adopted we are able to save another in their place, therefore two lives will be saved! Click here to view our adoptables!
          </p>
          <a href="#adoptables" className="adoptables-link">Check Adoptables →</a>
        </div>

        <div className="donation-chart">
          <h3>See How Your Donation <span className="transforms">Transforms</span> Lives!</h3>
          <div className="chart">
            <div className="chart-item">
              <span className="chart-icon">🐾</span>
              <p>Donated Amount</p>
            </div>
            <div className="chart-line"></div>
            <div className="chart-item">
              <span className="chart-icon">📦</span>
              <p>No. of bags</p>
            </div>
            <div className="chart-line"></div>
            <div className="chart-item">
              <span className="chart-icon">🥘</span>
              <p>Foods</p>
            </div>
            <div className="chart-line"></div>
            <div className="chart-item">
              <span className="chart-icon">🐕</span>
              <p>Happy Furry</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
