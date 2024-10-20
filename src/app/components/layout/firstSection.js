import React from "react";
import "../../styles/component/firstSection/firstSection.css";

const FirstSection = () => {
  return (
    <section className="first-section">
      {/* Left Icons */}
      <img
        src="/images/firstSection/pawLeft.svg"
        alt="Paw left"
        className="paw-icon left"
      />
      <img
        src="/images/firstSection/bone.svg"
        alt="Bone icon"
        className="bone-icon"
      />

      <div className="content">
        <h1 className="section-title">A Haven of Love for Cats and Dogs</h1>
        <p className="section-description">
          The Rescuing Tails is a dedicated rescue center committed to providing
          a safe haven for dogs and cats in need. We offer love, care, and
          rehabilitation, helping every furry friend find their forever home.
        </p>

        <div className="images-container">
          <img
            src="/images/firstSection/img_1.png"
            alt="Rescued dog"
            className="pet-image"
          />
          <img
            src="/images/firstSection/img_2.png"
            alt="Rescued cat"
            className="pet-image"
          />
          <img
            src="/images/firstSection/img_3.png"
            alt="Rescued puppy"
            className="pet-image"
          />
          <img
            src="/images/firstSection/img_4.png"
            alt="Adopt me dog"
            className="pet-image"
          />
          <img
            src="/images/firstSection/img_5.png"
            alt="Rescued kitten"
            className="pet-image"
          />
          <img
            src="/images/firstSection/img_6.png"
            alt="Rescued kitten"
            className="pet-image"
          />
        </div>

        <div className="donate-section">
  <div className="left-align">
    <p className="donate-text">Send it with</p>
    <img src="/images/firstSection/curved-arrow-2.svg" alt="Curved arrow" className="curved-arrow-icon-2" />
  </div>
  <div className="donate-button-wrapper"> {/* New wrapper div */}
    <button className="donate-button">Donate</button>
  </div>
</div>

      </div>

      {/* Right Icons */}
      <img
        src="/images/firstSection/pawRight.svg"
        alt="Paw right"
        className="paw-icon right"
      />
      <div className="curved-arrow-section">
        <img
          src="/images/firstSection/curved-arrow.svg"
          alt="Curved arrow"
          className="curved-arrow-icon"
        />
        <p className="curved-arrow-text">Rescued Dogs and Pets</p>
      </div>
    </section>
  );
};

export default FirstSection;
