import React from 'react';
import '../../styles/component/secondSection/secondSection.css';

const SecondSection = () => {
  return (
    <section className="second-section">
      <div className="stats-container">
        <div className="stat-box">
          <img src="/images/secondSection/paw.svg" alt="Paw Icon" className="stat-icon" />
          <p className="stat-number">200</p>
          <p className="stat-text">Animals saved</p>
        </div>
        <div className="stat-box highlight-box">
          <p className="highlight-number">33</p>
          <p className="highlight-text">Animals find new home</p>
        </div>
        <div className="stat-box">
          <p className="stat-number">33</p>
          <p className="stat-text">Animals sterilized</p>
        </div>
        <div className="stat-box">
          <p className="stat-number">120</p>
          <p className="stat-text">Volunteers Joined</p>
        </div>
      </div>

      <div className="main-content">
        <div className="curved-decoration">
          <img src="/images/secondSection/curved-line.svg" alt="Curved Decoration" />
        </div>

        {/* Main Title with Images and Text */}
        <div className="main-title">
          <div className="large-text">
            {/* Place dogwomen image before "WE HAVE" */}
            <span className="image-box">
              <img src="/images/secondSection/dogwomen.png" alt="Dogwomen" />
            </span>
            <span>WE HAVE</span>
          </div>

          <div className="large-text">
            {/* Place catwomen image after "A DEEP LOVE" */}
            <span>A DEEP LOVE</span>
            <span className="image-box">
              <img src="/images/secondSection/catwomen.png" alt="Catwomen" />
            </span>
          </div>

          <div className="large-text">
            {/* Place dog2 image before "FOR ANIMAL" */}
            <span className="image-box">
              <img src="/images/secondSection/dog2.png" alt="Dog 2" />
            </span>
            <span>FOR ANIMAL</span>
          </div>
        </div>

        <p className="description-text">
          We are committed to rescuing and rehabilitating animals, giving them a second chance at life.
          Our mission exists to ensure every animal receives the care, love, and respect they deserve.
          With compassion at our core, we aim to transform their lives and build a brighter future for them.
        </p>

        <button className="cta-button">Let's Connect</button>
      </div>
    </section>
  );
};

export default SecondSection;
