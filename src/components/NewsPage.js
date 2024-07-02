import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const NewsPage = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // 模擬API請求
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.example.com/news'); // 替換為實際API端點
        setNews(response.data);
      } catch (error) {
        // 使用模擬數據
        setNews([
          {
            "id": 1,
            "title": "Coming Soon",
            "link": "#",
            "content": ""
        }
        ]);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="g-container-main" className="g-wrapper">
      <div className="g-container">
        <div className="g-grid">
          <div className="g-block size-100">
            <main id="g-mainbar">
              <div className="g-grid">
                <div className="g-block size-100">
                  <div className="g-system-messages">
                    <div id="system-message-container">
                      <div id="system-message"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="g-grid">
                <div className="g-block size-100">
                  <div className="g-content">
                    <div className="platform-content">
                      <div className="archive">
                        <header className="page-header">
                          <h1>News</h1>
                        </header>
                        <section className="entries">
                          <div className="g-grid">
                            {news.map(item => (
                              <div className="g-block size-100" key={item.id}>
                                <article className={`tease tease-post post-${item.id} post type-post status-publish format-standard hentry category-news clearfix`} id={`tease-${item.id}`}>
                                  <section className="entry-header">
                                    <h2 className="entry-title">{item.title}</h2>
                                  </section>
                                  <section className="entry-content">
                                    <div className="post-excerpt">
                                      <p>{item.excerpt}</p>
                                    </div>
                                    <Link to={item.link} className="read-more button button-xsmall">
                                      Read More
                                    </Link>
                                  </section>
                                </article>
                              </div>
                            ))}
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsPage;
