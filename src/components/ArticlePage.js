import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ArticlePage = () => {
  const [article, setArticle] = useState({
    title: '',
    content: '',
    link: ''
  });

  useEffect(() => {
    // 模擬API請求
    const fetchArticle = async () => {
      try {
        const response = await axios.get('https://api.example.com/articles/552'); // 替換為實際API端點
        setArticle({
          title: response.data.title,
          content: response.data.content,
          link: response.data.link
        });
      } catch (error) {
        // 使用模擬資料
        setArticle({
          title: 'ICON-S CEE Chapter Conference, Sibiu, 12.4.2024',
          content: 'The Central and Eastern European Chapter of the International Society of Public Law (ICON-S) invites submissions to its 2024 annual conference taking place at the Faculty of Law, ‘Lucian Blaga’ University of Sibiu, Romania. The conference is on 12 April 2024.',
          link: 'https://www.icon-society.at/media/2024/01/ICON-S-Sibiu-2024-CfP-final.pdf'
        });
      }
    };

    fetchArticle();
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
                      <div className="content-wrapper">
                        <section className="entry">
                          <article className="post-type-post post-552 post type-post status-publish format-standard hentry category-news" id="post-552">
                            <section className="entry-header">
                              <h1 className="entry-title">{article.title}</h1>
                            </section>
                            <section className="entry-content">
                              <p>{article.content}</p>
                              <p>Please find more detailed information <a href={article.link}>here</a>.</p>
                              <p>&nbsp;</p>
                            </section>
                          </article>
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

export default ArticlePage;
