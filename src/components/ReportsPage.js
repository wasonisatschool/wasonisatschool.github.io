import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReportsPage = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // 模擬API請求
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.example.com/reports'); // 替換為實際API端點
        setReports(response.data);
      } catch (error) {
        // 使用模擬數據
        setReports([
          {
            id: 343,
            title: 'Comeing Soon',
            excerpt: '',
            link: '/reports/343',
            categories: ['news', 'activity-reports']
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
                  <div className="g-content">
                    <div className="platform-content">
                      <div className="archive">
                        <header className="page-header">
                          <h1>Reports</h1>
                        </header>
                        <section className="entries">
                          <div className="g-grid">
                            {reports.map((report) => (
                              <div key={report.id} className="g-block size-100">
                                <article className={`tease tease-post post-${report.id} post type-post status-publish format-standard hentry category-${report.categories.join(' category-')} clearfix`} id={`tease-${report.id}`}>
                                  <section className="entry-header">
                                    <h2 className="entry-title">{report.title}</h2>
                                  </section>
                                  <section className="entry-content">
                                    <div className="post-excerpt">
                                      <p>{report.excerpt}</p>
                                    </div>
                                    <a href={report.link} className="read-more button button-xsmall">
                                      Read More
                                    </a>
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

export default ReportsPage;
