import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faAngleUp);

const Footer = () => (
  <footer id="g-footer">
    <div className="g-container">
      <div className="g-grid">
        <div className="g-block size-20">
          <div id="copyright-1736-particle" className="g-content g-particle">
            <div className="g-copyright">
              &copy; ICON.S Taiwan 2024 - 2024
              <br />
              <a href="/privacy-policy">Privacy Policy</a>
            </div>
          </div>
        </div>
        <div className="g-block size-55">
          <div id="horizontalmenu-2273-particle" className="g-content g-particle">
            <ul className="g-horizontalmenu">
              {/* Add menu items here if needed */}
            </ul>
          </div>
        </div>
        <div className="g-block size-25">
          <div id="totop-8670-particle" className="g-content g-particle">
            <div className="g-totop">
              <a href="#" id="g-totop" rel="nofollow" title="Back to top" aria-label="Back to top">
                Back to top <FontAwesomeIcon icon={faAngleUp} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
