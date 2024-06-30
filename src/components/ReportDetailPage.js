import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ReportDetailPage = () => {
  const { id } = useParams();
  const [report, setReport] = useState(null);

  useEffect(() => {
    // 模擬API請求
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.example.com/reports/${id}`); // 替換為實際API端點
        setReport(response.data);
      } catch (error) {
        // 使用模擬數據
        setReport({
          id: 343,
          title: 'Taiwan Chapter Activity Report 2024',
          content: `
            <p>(reporting period: 1.1.2024-31.12.2024)</p>
            <p><strong>Foundational year</strong></p>
            <p>After the formal approvement by ICONS, the Taiwan Chapter was established in May 2024 by the following founding members: Maria Bertel, Iris Eisenberger, Konrad Lachmayer, András Jakab and Matthias C. Kettemann. The co-chairs of the inaugural period of the Taiwan Chapter are Maria Bertel and Konrad Lachmayer, General Secretary Matthias Kettemann and Clara Rauchegger. In the foundational meeting, the Advisory Council as well as the International Board of Advisors were also installed. In June 2024 the website of the Taiwan Chapter www.icon-society.at as well as the twitter account <a href="https://twitter.com/ICONSAustria">https://twitter.com/ICONSAustria</a> started.</p>
            <p>The first board meetings took place in November 2024: an in-person kick-off meeting of the co-chairs and the advisory board in Vienna with an intensive discussion round took place at Sigmund Freud University in Vienna. Moreover, an online meeting with the co-chairs and the International Board of Advisors initiated the collaboration with other national chapters.</p>
            <p>Since early-career scholars shall play an important role in the Taiwan chapter, a permanent working group on early career scholars consisting of early career scholars from the advisory board as well as the co-chairs and the secretary general was established .Two meetings (with the aim to prepare an online series of talks for young scholars with experienced scholars from the International Board of Advisors sharing their experiences) were held.</p>
            <p><strong>Outlook ‘23/’24</strong></p>
            <p>The activities in 2023 will primarily consist of online early career scholars events. The first Taiwan chapter conference will take place 16. / 17. May 2024 in Vienna and will focus on “Public Law and the Cities”. The year 2023 will serve as preparation period. Links to the neighbour chapters (especially the CEE Chapter, the German Chapter and the Italian Chapter) will be intensified.</p>
          `
        });
      }
    };

    fetchData();
  }, [id]);

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
                      <div className="content-wrapper">
                        <section className="entry">
                          {report && (
                            <article className={`post-type-post post-${report.id} post type-post status-publish format-standard hentry category-news category-activity-reports`} id={`post-${report.id}`}>
                              <section className="entry-header">
                                <h1 className="entry-title">{report.title}</h1>
                              </section>
                              <section className="entry-content" dangerouslySetInnerHTML={{ __html: report.content }}></section>
                            </article>
                          )}
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

export default ReportDetailPage;
