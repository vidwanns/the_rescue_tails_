import React from 'react';
import '../../styles/component/fifthSection/fifthSection.css';

const FifthSection = () => {
    return (
      <section className="fifth-section container">
        <div className="fifth_content">
        <div className="top-row">
          <img src="/images/fifthSection/girl-1.png" alt="Woman with pets" className="top-image" />
          <div className="instagram-card">
            <p className="instagram-text">See more in our Instagram</p>
            <p className="instagram-handle">@headsfortails</p>
          </div>
          <img src="/images/fifthSection/girl-1.png" alt="Woman with dog" className="top-image" />
        </div>
        <div className="bottom-row">
          <img src="/images/fifthSection/girl-1.png" alt="Woman with coffee and dog" className="bottom-image" />
          <img src="/images/fifthSection/girl-1.png" alt="Cat being pet" className="bottom-image" />
          <img src="/images/fifthSection/girl-1.png" alt="Dog paw in hand" className="bottom-image" />
          <img src="/images/fifthSection/girl-1.png" alt="Dog in jacket" className="bottom-image" />
        </div>
        </div>
      </section>
    );
};

export default FifthSection;
