import React from 'react';
import Large from '../assets/images/large.jpg';
import Small from '../assets/images/small.jpg';

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
                  src={Large}
                  alt="Large Banner"
                  width="1920"
                  height="500"
                /> 
                 <img
                  className="size-mobile"
                  src={Small}
                  alt="Small Banner"
                  width="860"
                  height="540"
                /> 
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default IntroSection;
