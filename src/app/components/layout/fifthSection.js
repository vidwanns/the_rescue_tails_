import React from 'react';
import '../../styles/component/fifthSection/fifthSection.css';

const FifthSection = () => {
    return (
      <section className="fifth-section container">
        {/* SVG icons as <img> tags */}
        <img src="/images/fifthSection/bone.svg" alt="Top Left Icon 1" className="svg-icon top-left-1" />
        <img src="/images/fifthSection/org-bone.svg" alt="Top Left Icon 2" className="svg-icon top-left-2" />
        <img src="/images/fifthSection/bone.svg" alt="Top Right Icon" className="svg-icon top-right" />
        <img src="/images/fifthSection/yellow-bone.svg" alt="Bottom Right Icon" className="svg-icon bottom-right" />
        <img src="/images/fifthSection/lines.svg" alt="Line SVG" className="line-svg bottom-left" />

        <div className="fifth_content">
          <div className="top-row">
            <img src="/images/fifthSection/girl-1.png" alt="Woman with pets" className="top-image" />
            <div className="instagram-card">
              {/* Instagram SVG Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="40" height="40"
                fill="#000"
                className="instagram-icon"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.96.24 2.412.403a4.828 4.828 0 011.675 1.086 4.828 4.828 0 011.086 1.675c.163.451.349 1.241.403 2.412.058 1.267.07 1.647.07 4.851s-.012 3.584-.07 4.85c-.054 1.17-.24 1.96-.403 2.412a4.828 4.828 0 01-1.086 1.675 4.828 4.828 0 01-1.675 1.086c-.451.163-1.241.349-2.412.403-1.267.058-1.647.07-4.851.07s-3.584-.012-4.85-.07c-1.17-.054-1.96-.24-2.412-.403a4.828 4.828 0 01-1.675-1.086 4.828 4.828 0 01-1.086-1.675c-.163-.451-.349-1.241-.403-2.412C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.96.403-2.412a4.828 4.828 0 011.086-1.675A4.828 4.828 0 015.397 2.566c.451-.163 1.241-.349 2.412-.403C8.416 2.175 8.796 2.163 12 2.163M12 0C8.741 0 8.332.012 7.052.07 5.772.128 4.632.325 3.683.677 2.78 1.002 1.978 1.562 1.3 2.24a6.86 6.86 0 00-1.563 2.383c-.352.95-.549 2.09-.607 3.37C.012 8.332 0 8.741 0 12s.012 3.668.07 4.948c.058 1.28.255 2.42.607 3.37.356.951.916 1.753 1.594 2.43.678.678 1.48 1.238 2.43 1.594.95.352 2.09.549 3.37.607C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.28-.058 2.42-.255 3.37-.607.951-.356 1.753-.916 2.43-1.594.678-.678 1.238-1.48 1.594-2.43.352-.95.549-2.09.607-3.37C23.988 15.668 24 15.259 24 12s-.012-3.668-.07-4.948c-.058-1.28-.255-2.42-.607-3.37-.356-.951-.916-1.753-1.594-2.43-.678-.678-1.48-1.238-2.43-1.594-.95-.352-2.09-.549-3.37-.607C15.668.012 15.259 0 12 0zm0 5.838a6.163 6.163 0 100 12.326 6.163 6.163 0 000-12.326zm0 10.163a3.999 3.999 0 110-7.999 3.999 3.999 0 010 7.999zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
              </svg>

              <p className="instagram-text">See more in our Instagram</p>
              <p className="instagram-handle">@headsfortails</p>
            </div>
            <img src="/images/fifthSection/girl-6.png" alt="Woman with dog" className="top-image" />
          </div>
          <div className="bottom-row">
            <img src="/images/fifthSection/girl-2.png" alt="Woman with coffee and dog" className="bottom-image" />
            <img src="/images/fifthSection/girl-3.png" alt="Cat being pet" className="bottom-image" />
            <img src="/images/fifthSection/girl-4.png" alt="Dog paw in hand" className="bottom-image" />
            <img src="/images/fifthSection/girl-5.png" alt="Dog in jacket" className="bottom-image" />
          </div>
        </div>
      </section>
    );
};

export default FifthSection;
