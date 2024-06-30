import React, { useState, useEffect } from 'react';
import axios from 'axios';
import IntroSection from './IntroSection';
import FeaturesSection from './FeaturesSection';

const NewsEvents = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Replace with your actual API endpoint
    axios.get('/api/news')
      .then(response => {
        setNews(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the news!", error);
        // Mock data
        setNews([
          {
            id: 1,
            title: "ICON-S CEE Chapter Conference, Sibiu, 12.4.2024",
            link: "/news/554"
          },
          {
            id: 2,
            title: "INVITATION: ICON.S Taiwan Chapter Stammtisch at Weihnachtsmarkt Spittelberg on 30 November 2023",
            link: "/news/554"
          },
          {
            id: 3,
            title: "ICON.S Taiwan Chapter Social Event (Stammtisch) on 25 September 2023",
            link: "/news/554"
          },
          {
            id: 4,
            title: "SAVE THE DATE – First Taiwan ICON.S Chapter Conference “Public Law and the Cities” – 10. /11. 9. 2024, Vienna",
            link: "/news/554"
          }
        ]);
      });
  }, []);

  return (
    <div>
      <h2>News & Events</h2>
      <div className="g-content-array g-wordpress-posts">
        <div className="g-grid">
          {news.map(item => (
            <div className="g-block" key={item.id}>
              <div className="g-content">
                <div className="g-array-item">
                  <div className="g-array-item-title">
                    <h3 className="g-item-title">
                      <a href={item.link}>{item.title}</a>
                    </h3>
                  </div>
                  <div className="g-array-item-read-more">
                    <a href={item.link} className="button">Read More...</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Main = () => (
  <main id="g-mainbar">
    <IntroSection />
    <FeaturesSection />
    <div className="g-grid">
      <div className="g-block size-100" style={{ borderLeft: '24px solid #efefef', marginLeft: '-24px' }}>
        <div className="g-content">
          <div className="platform-content">
            <div className="content-wrapper">
              <section className="entry">
                <article className="post-type-page post-19 page type-page status-publish hentry" id="post-19">
                  <section className="entry-header"></section>
                  <section className="entry-content">
                    <h1>ICON.S Taiwan</h1>
                    <p>The <strong>International Society of Public Law</strong> (<strong>ICON.S</strong>) is an international scholarly society associated with the International Journal of Constitutional Law (ICON) which holds regular annual conferences. You can find more information on ICON.S <a href="https://www.icon-society.org">here</a>.</p>
                    <p><strong>ICON.S Taiwan</strong> is one of the many regional chapters of ICON.S and was founded in 2024 by Yi Li Lee.</p>
                  </section>
                </article>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="g-grid">
      <div className="g-block size-100">
        <div id="custom-5086-particle" className="g-content g-particle">
          <NewsEvents />
        </div>
      </div>
    </div>
  </main>
);

export default Main;
