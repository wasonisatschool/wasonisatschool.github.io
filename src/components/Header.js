import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FaSquareXTwitter } from "react-icons/fa6";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faEnvelope, faAngleDown);
function Header() {
  const [isConferencesOpen, setIsConferencesOpen] = useState(false);
  const [isGovernanceOpen, setIsGovernanceOpen] = useState(false);
  const [isNewsOpen, setIsNewsOpen] = useState(false);

  const toggleConferences = () => setIsConferencesOpen(!isConferencesOpen);
  const toggleGovernance = () => setIsGovernanceOpen(!isGovernanceOpen);
  const toggleNews = () => setIsNewsOpen(!isNewsOpen);

  return (
    <section id="g-navigation">
      <div className="g-container">
        <div className="g-grid">
          <div className="g-block size-20 icon-s-logo">
            <div id="logo-1261-particle" className="g-content g-particle">
              <Link to="/" title="Home" aria-label="Home" rel="home" className="g-logo">
              <svg version="1.1" viewBox="0 0 1989 1954" width="150" height="147" xmlns="http://www.w3.org/2000/svg">
  <rect width="1989" height="1954" fill="#fff" />
  <path transform="translate(250,914)" d="m0 0h130l36 3 13 3 16 8 12 11 9 10 9 14 9 19 8 25 5 25 3 24 1 13v54l-3 30-4 23-6 22-8 21-10 18-11 14-8 8-10 7-10 5-10 3-16 2-35 2h-114l-38-2-17-3-13-5-12-8-13-13-10-14-8-16-7-18-7-26-4-25-2-21-1-35 1-27 3-28 5-26 6-21 6-16 10-18 9-12 13-13 11-7 12-5 17-3z" fill="#D70000"/>
  <path transform="translate(132,535)" d="m0 0h362v138l-130 65-23 11-8 4 160 1 1 1v131h-362v-132l30-16 22-12 96-52 13-7-161-1z" fill="#D70000"/>
  <path transform="translate(239,1299)" d="m0 0h51v157l-76 1-15 2-8 4-4 10v21l4 11 5 4 13 3h208l13-3 5-4 3-7 1-5v-17l-4-11-5-4-12-3-10-1-59-1v-157h34l23 2 23 5 14 6 9 7 9 9 10 15 8 16 8 20 7 25 5 30 2 23v56l-3 33-4 24-7 26-6 16-10 19-10 13-10 9-15 8-16 5-25 4-17 1h-137l-27-2-16-3-16-8-11-9-7-8-9-12-9-17-7-18-6-22-5-25-3-29-1-33 1-31 3-30 4-22 6-23 7-19 8-17 9-13 9-10 9-7 13-6 14-4 19-3z" fill="#D70000"/>
  <path transform="translate(395,52)" d="m0 0 24 1 20 4 12 5 9 7 8 8 8 14 8 18 7 23 5 23 4 30 1 14v56l-3 32-5 27-7 25-8 20-9 16-11 13-10 7-11 5-14 4-13 2-12 1h-34v-146l53-1 11-2 6-4 4-8 1-4v-17l-3-10-5-7-8-4-4-1h-20l-15 3-9 5-5 5-8 14-13 29-22 55-13 31-11 23-10 14-13 13-14 9-13 5-10 2-10 1h-17l-17-2-17-5-11-6-10-9-9-12-8-15-7-19-6-23-4-25-2-22-1-36 1-31 3-31 4-23 6-24 8-22 9-16 9-10 9-6 12-5 13-3 9-1 20-1h14l1 1v145l-1 1-39 1-11 4-4 9v19l4 10 7 6 6 2h21l11-4 7-5 8-14 9-21 14-39 15-37 12-26 11-21 9-13 8-9 11-8 15-7 14-4 13-2z" fill="#D70000"/>
  <path d="M0 0 h1989 v1954 h-1989 z" fill="none" stroke="#D70000" stroke-width="13"/>
  <path transform="translate(132,1699)" d="m0 0h362v157h-362z" fill="#D70000"/>
  <path transform="translate(914,79)" d="m0 0h33l6 45 12 93 22-137h28l7 40 15 91v7h2l1-16 15-120 1-3h33l-3 24-27 194-1 1h-32l-4-21-20-120-1 1-22 135-1 5h-34l-28-196-2-15z" fill="#D70000"/>
  <path transform="translate(1236,79)" d="m0 0h27l5 10 46 108 1 2 1-119 1-1h32v219h-26l-4-8-17-42-18-44-14-34-1 128h-34v-218z" fill="#D70000"/>
  <path transform="translate(751,79)" d="m0 0h43l6 28 38 190v1h-37l-2-7-7-41v-2h-38l-2 14-6 34-1 2h-37l1-10 41-205z" fill="#D70000"/>
  <path transform="translate(1133,79)" d="m0 0h43l3 12 41 206v1h-37l-3-13-6-37h-38l-2 14-6 34-1 2h-37l1-9z" fill="#D70000"/>
  <path transform="translate(214,1071)" d="m0 0h191l20 2 9 4 4 5 2 7v15l-3 8-5 5-6 2-7 1h-212l-12-3-6-5-3-8v-18l4-8 6-4 8-2z" fill="#fff"/>
  <path transform="translate(601,79)" d="m0 0h109v30h-34v189h-40v-189h-35z" fill="#D70000"/>
  <path transform="translate(855,79)" d="m0 0h39v219h-40v-218z" fill="#D70000"/>
  <path transform="translate(269,426)" d="m0 0h87l1 1v85h-88z" fill="#D70000"/>
  <path transform="translate(772,133)" d="m0 0 2 1 14 86v2h-30l6-39z" fill="#fff"/>
  <path transform="translate(1154,133)" d="m0 0h2l14 87v2h-30l6-39z" fill="#fff"/>
</svg>

              </Link>
            </div>
          </div>

          <div className="g-block size-65">
            <div id="menu-2731-particle" className="g-content g-particle">
              <nav className="g-main-nav" data-g-hover-expand="true">
                <ul className="g-toplevel">
                  <li className="g-menu-item g-menu-item-type-post_type g-menu-item-21 active g-standard" title="Home">
                    <Link className="g-menu-item-container" to="/">
                      <span className="g-menu-item-content">
                        <span className="g-menu-item-title">Home</span>
                      </span>
                    </Link>
                  </li>

                  <li
                    className={`g-menu-item g-menu-item-type-custom g-menu-item-471 g-parent g-standard g-menu-item-link-parent ${isConferencesOpen ? 'open' : ''}`}
                    title="Conferences"
                    onClick={toggleConferences}
                  >
                    <div className="g-menu-item-container">
                      <span className="g-menu-item-content">
                        <span className="g-menu-item-title">Conferences</span>
                      </span>
                      <FontAwesomeIcon icon="fa-solid fa-angle-down" />                    </div>
                    {isConferencesOpen && (
                      <ul className="g-dropdown g-active g-fade g-dropdown-right">
                        <li className="g-dropdown-column">
                          <div className="g-grid">
                            <div className="g-block size-100">
                              <ul className="g-sublevel">
                                <li className="g-level-1 g-go-back">
                                <FontAwesomeIcon icon={faAngleDown} />                                </li>
                                <li className="g-menu-item g-menu-item-type-post_type g-menu-item-458 g-parent g-menu-item-link-parent" title="Public Law and Cities 2024">
                                  <Link className="g-menu-item-container" to="/public-law-and-cities-2024">
                                    <span className="g-menu-item-content">
                                      <span className="g-menu-item-title">Public Law and Cities 2024</span>
                                    </span>
                                    <FontAwesomeIcon icon="fa-solid fa-angle-down" />                                    </Link>
                                  <ul className="g-dropdown g-active g-fade g-dropdown-right">
                                    <li className="g-dropdown-column">
                                      <div className="g-grid">
                                        <div className="g-block size-100">
                                          <ul className="g-sublevel">
                                            <li className="g-level-2 g-go-back">
                                              <span className="g-menu-item-container">
                                                <span>Back</span>
                                              </span>
                                            </li>
                                            <li className="g-menu-item g-menu-item-type-post_type g-menu-item-695" title="Keynotes">
                                              <Link className="g-menu-item-container" to="/conferences/public-law-and-cities-2024/keynotes">
                                                <span className="g-menu-item-content">
                                                  <span className="g-menu-item-title">Keynotes</span>
                                                </span>
                                              </Link>
                                            </li>
                                            <li className="g-menu-item g-menu-item-type-custom g-menu-item-745" title="Panel Sessions">
                                              <a className="g-menu-item-container" href="https://www.icon-society.at/media/2024/06/Panel-Sessions.pdf">
                                                <span className="g-menu-item-content">
                                                  <span className="g-menu-item-title">Panel Sessions</span>
                                                </span>
                                              </a>
                                            </li>
                                            <li className="g-menu-item g-menu-item-type-custom g-menu-item-730" title="Optional Excursions">
                                              <a className="g-menu-item-container" href="https://events.icon-society.at/excursions/">
                                                <span className="g-menu-item-content">
                                                  <span className="g-menu-item-title">Optional Excursions</span>
                                                </span>
                                              </a>
                                            </li>
                                            <li className="g-menu-item g-menu-item-type-post_type g-menu-item-500" title="Call for paper and panel proposals">
                                              <Link className="g-menu-item-container" to="/conferences/public-law-and-cities-2024/call-for-papers-and-panels">
                                                <span className="g-menu-item-content">
                                                  <span className="g-menu-item-title">Call for paper and panel proposals</span>
                                                </span>
                                              </Link>
                                            </li>
                                            <li className="g-menu-item g-menu-item-type-post_type g-menu-item-559" title="Cerha CEE Scholarships">
                                              <Link className="g-menu-item-container" to="/conferences/public-law-and-cities-2024/cerha-cee-scholarships">
                                                <span className="g-menu-item-content">
                                                  <span className="g-menu-item-title">Cerha CEE Scholarships</span>
                                                </span>
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                    )}
                  </li>

                  <li
                    className={`g-menu-item g-menu-item-type-post_type g-menu-item-52 g-parent g-standard g-menu-item-link-parent ${isGovernanceOpen ? 'open' : ''}`}
                    title="Governance"
                    onClick={toggleGovernance}
                  >
                    <div className="g-menu-item-container">
                      <span className="g-menu-item-content">
                        <span className="g-menu-item-title">Governance</span>
                      </span>
                      <FontAwesomeIcon icon="fa-solid fa-angle-down" />                      </div>
                    {isGovernanceOpen && (
                      <ul className="g-dropdown g-active g-fade g-dropdown-right">
                        <li className="g-dropdown-column">
                          <div className="g-grid">
                            <div className="g-block size-100">
                              <ul className="g-sublevel">
                                <li className="g-level-1 g-go-back">
                                  <span className="g-menu-item-container">
                                    <span>Back</span>
                                  </span>
                                </li>
                                <li className="g-menu-item g-menu-item-type-post_type g-menu-item-38" title="Charter">
                                  <Link className="g-menu-item-container" to="/charter">
                                    <span className="g-menu-item-content">
                                      <span className="g-menu-item-title">Charter</span>
                                    </span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                    )}
                  </li>

                  <li
                    className={`g-menu-item g-menu-item-type-post_type g-menu-item-39 g-parent g-standard g-menu-item-link-parent ${isNewsOpen ? 'open' : ''}`}
                    title="News & Events"
                    onClick={toggleNews}
                  >
                    <div className="g-menu-item-container">
                      <span className="g-menu-item-content">
                        <span className="g-menu-item-title">News & Events</span>
                      </span>
                      <FontAwesomeIcon icon="fa-solid fa-angle-down" />  
                                          </div>
                    {isNewsOpen && (
                      <ul className="g-dropdown g-active g-fade g-dropdown-right">
                        <li className="g-dropdown-column">
                          <div className="g-grid">
                            <div className="g-block size-100">
                              <ul className="g-sublevel">
                                <li className="g-level-1 g-go-back">
                                  <span className="g-menu-item-container">
                                    <span>Back</span>
                                  </span>
                                </li>
                                <li className="g-menu-item g-menu-item-type-taxonomy g-menu-item-351" title="Reports">
                                  <Link className="g-menu-item-container" to="/reports">
                                    <span className="g-menu-item-content">
                                      <span className="g-menu-item-title">Reports</span>
                                    </span>
                                  </Link>
                                </li>
                                <li className="g-menu-item g-menu-item-type-taxonomy g-menu-item-351" title="News">
                                  <Link className="g-menu-item-container" to="/news">
                                    <span className="g-menu-item-content">
                                      <span className="g-menu-item-title">News</span>
                                    </span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                    )}
                  </li>

                  <li className="g-menu-item g-menu-item-type-post_type g-menu-item-333 g-standard" title="Membership">
                    <Link className="g-menu-item-container" to="/membership">
                      <span className="g-menu-item-content">
                        <span className="g-menu-item-title">Membership</span>
                      </span>
                    </Link>
                  </li>

                  <li className="g-menu-item g-menu-item-type-post_type g-menu-item-165 g-standard" title="Contact">
                    <Link className="g-menu-item-container" to="/contact">
                      <span className="g-menu-item-content">
                        <span className="g-menu-item-title">Contact</span>
                      </span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="g-block size-15 g-social-header">
            <div id="social-7138-particle" className="g-content g-particle">
              <div className="g-social">
                <Link to="/contact" target="_self" title="Contact" aria-label="Contact">
                <FontAwesomeIcon icon={faEnvelope} />                </Link>
                <a href="https://twitter.com/ICONSTaiwan" target="_self" title="Twitter" aria-label="Twitter">
                <FaSquareXTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
