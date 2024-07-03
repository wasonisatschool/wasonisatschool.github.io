import React from 'react';
import PublicLawBanner from '../assets/images/Public-Law-and-the-Cities-Banner-no-registration.jpg';
const IntroSection = () => (
  <section id="g-intro" className="g-flushed">
    <div className="g-container">
      <div className="g-grid">
        <div className="g-block size-100">
          <div id="custom-1795-particle" className="g-content g-particle">
            <div className="conference-cta">
              <a href="/#" title="First Taiwan Chapter Conference">
                <img
                  className="size-full"
                  src={PublicLawBanner}
                  alt="Public Law and Cities Banner"
                  width="1920"
                  height="500"
                />                <img className="size-mobile" src="https://www.icon-society.at/media/2023/11/Public-Law-and-the-Cities-Banner-small.jpg" alt="Public Law and Cities Banner" width="860" height="540" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default IntroSection;
