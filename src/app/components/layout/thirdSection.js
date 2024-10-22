import React from "react";
import "../../styles/component/thirdSection/thirdSection.css";

const ThirdSection = () => {
  return (
    <section className="third-section">
      {/* SVG Icons */}
      <img src="/images/ThirdSection/pawLeft.svg" alt="Paw Icon" className="paw-icon-top-right" />
      <img src="/images/ThirdSection/bone.svg" alt="Bone Icon" className="bone-icon-left-center" />
      <img src="/images/ThirdSection/pawRight.svg" alt="Paw Icon" className="paw-icon-below-bone" />

      <div className="content-container">
        <div className="image-container">
          {/* Dog Image on the top left */}
          <img
            src="/images/ThirdSection/dog-laying.png"
            alt="Rescue Dog"
            className="dog-image"
          />
        </div>

        <div className="text-container">
          <h2 className="third-section-title">How to help?</h2>
          <p className="third-section-description">
            If you have extra time on your hand and would like to help please
            consider volunteering! Rescue groups need dedicated volunteers to
            help with events, fundraisers, home checks, transport, etc. All of
            these things help enable the rescue to expand their network and help
            more dogs in need.
          </p>

          <div className="button-group">
            <button className="help-button adopt">Adopt</button>
            <button className="help-button foster">Foster</button>
            <button className="help-button volunteer">Volunteer</button>
            <button className="help-button donate">Donate</button>
          </div>

          <p className="adoption-info">
            If you are looking to add a furry companion to your family, please
            consider adopting instead of buying. When you adopt you are saving
            not one life but two. Once a dog in our program is adopted we are
            able to save another in their place, therefore two lives will be
            saved! Click here to view our adoptables!
          </p>

          <a href="#adoptables" className="adoptables-link">
            Check Adoptables &rarr;
          </a>
        </div>
      </div>


      <div className="donation-graphic-container">
          {/* Dog SVG Positioned at Top-Right of Donation Graphic */}
          <img
            src="/images/ThirdSection/tailup-dog.svg"
            alt="tailup-dog"
            className="dog-icon-above-graphic"
          />

          {/* Donation Transformation Graphic */}
          <img
            src="/images/ThirdSection/donation transforms.png"
            alt="Donation Transformation Graphic"
            className="donation-graphic"
          />
        </div>
    </section>
  );
};

export default ThirdSection;
