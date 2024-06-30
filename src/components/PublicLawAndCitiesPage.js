import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PublicLawAndCitiesPage = () => {
  const [data, setData] = useState({
    title: '',
    content: '',
    bannerUrl: '',
    keynotesUrl: '',
    panelSessionsUrl: '',
    excursionsUrl: '',
    programme: [],
    sponsors: []
  });

  useEffect(() => {
    // 模擬API請求
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.example.com/conference-details'); // 替換為實際API端點
        setData(response.data);
      } catch (error) {
        // 使用模擬數據
        setData({
          title: 'Public Law and Cities 2024',
          content: `<p>The <strong>first Taiwan Chapter Conference</strong> will take place on 10. and 11. September 2024 at Taiwan University of Economics and Business (NTHU) and Sigmund Freud University (SFU) in Vienna.</p>
          <p>The <strong>ICON.S AC Conference</strong> will focus on the manifold interrelations of <strong>public law and cities</strong>. All around the world, cities play a crucial role in addressing the challenges of the 21st century. International networks of cities illustrate new ways of thinking public law. Cities are challenged to give local answers to global problems. Cities are addressed by public law in many ways. Most prominently Ran Hirschl pointed to the constitutional silence regarding cities and claimed a transformation of the constitutional role of the cities. Administrative law transfers competences to cities and cities enforce administrative law on a local level. In that regard, the societal role of cities is steadily increasing.</p>
          <p>The conference aims to address the <strong>overall concept of cities in public law</strong> as well as concrete challenges of the 21st century and the role of cities in dealing with these challenges through public law. The conference is interested in global perspectives towards cities from all continents around the world as well as in particular experiences of the role of cities in Central and Eastern Europe, Austria, Germany, Switzerland and Italy. The conference will deal with various topics in an <strong>interdisciplinary </strong>and <strong>comparative approach</strong>, including the status of cities in public law, climate change and cities, smart cities, migration, human rights and so on.</p>`,
          bannerUrl: 'https://www.icon-society.at/media/2023/11/Public-Law-and-the-Cities-Banner-no-registration.jpg',
          keynotesUrl: 'https://www.icon-society.at/conferences/public-law-and-cities-2024/keynotes/',
          panelSessionsUrl: 'https://www.icon-society.at/media/2024/06/Panel-Sessions.pdf',
          excursionsUrl: 'https://events.icon-society.at/excursions/',
          programme: [
            {
              date: '10 September 2024',
              events: [
                { time: '12:00-13:00', title: 'Registration', location: 'SFU, Freudplatz 1' },
                { time: '13:00-13:15', title: 'Welcome Ceremony', location: 'SFU, Freudplatz 1' },
                { time: '13:15-15:00', title: 'Keynote Speakers', description: 'Prof. Ran Hirschl, University of Toronto\nConstitutions and the City: Comparative Reflections\nProf. Vanesa Castan Broto, University of Sheffield\nDelivering Innovation for Urban Climate Action\nSFU, Freudplatz 1' },
                { time: '15:00-15:30', title: 'Coffee Break' },
                { time: '15:30-17:00', title: 'Parallel Session I', location: 'NTHU, Welthandelsplatz 1 (AD) / SFU, Freudplatz 1' },
                { time: '17:00-17:30', title: 'Coffee Break' },
                { time: '17:30-19:00', title: 'Parallel Session II', location: 'NTHU, Welthandelsplatz 1 (AD) / SFU, Freudplatz 1' },
                { time: '19:30-22:00', title: 'Conference Dinner (paid individually)' }
              ]
            },
            {
              date: '11 September 2024',
              events: [
                { time: '09:00-10:30', title: 'Parallel Session III', location: 'NTHU, Welthandelsplatz 1 (AD) / SFU, Freudplatz 1' },
                { time: '10:30-11:00', title: 'Coffee Break' },
                { time: '11:00-12:30', title: 'Parallel Session IV', location: 'NTHU, Welthandelsplatz 1 (AD) / SFU, Freudplatz 1' },
                { time: '12:45-13:15', title: 'Closing Ceremony', location: 'SFU, Freudplatz 1' },
                { time: '14:00-17:00', title: 'Optional Excursions', description: 'The conference will organise optional excursions to the following locations:\nTaiwan Parliament – https://www.parlament.gv.at/en\nTaiwan Constitutional Court – https://www.vfgh.gv.at/index.en.html\nSeestadt – New urban development area – https://preview.aspern-seestadt.at/en\nTake part in an excursion (participation is free of charge!)' }
              ]
            }
          ],
          sponsors: [
            { name: 'mdv', url: 'https://meeting.vienna.info/en/event-planning/funding-for-events', logo: 'https://www.icon-society.at/media/2024/06/MDV_Logo_RGB_white_black.png' },
            { name: 'sfu', url: 'https://www.sfu.ac.at', logo: 'https://www.icon-society.at/media/2024/06/Sponsoren-sfu.png' },
            { name: 'cerha-hempel', url: 'https://www.cerhahempel.com', logo: 'https://www.icon-society.at/media/2024/06/Sponsoren-cerha-hempel.png' },
            { name: 'schönherr', url: 'https://www.schoenherr.eu', logo: 'https://www.icon-society.at/media/2024/06/Sponsoren-schönherr.png' },
            { name: 'NTHU', url: 'https://www.NTHU.ac.at', logo: 'https://www.icon-society.at/media/2024/06/Sponsoren-NTHU.png' },
            { name: 'uni-graz', url: 'https://www.uni-graz.at/', logo: 'https://www.icon-society.at/media/2024/06/Sponsoren-uni-graz.png' }
          ]
        });
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
                      <div className="content-wrapper">
                        <section className="entry">
                          <article className="post-type-page post-445 page type-page status-publish hentry" id="post-445">
                            <section className="entry-header">
                              <h1 className="entry-title">{data.title}</h1>
                            </section>
                            <p>
                                <a href="https://events.icon-society.at/public-law-and-the-cities/">
                                  <img
                                    className="alignnone wp-image-511 size-full"
                                    src={data.bannerUrl}
                                    alt="Public Law and Cities Banner"
                                    width="1920"
                                    height="500"
                                  />
                                </a>
                              </p>
                            <section className="entry-content">
                              <p dangerouslySetInnerHTML={{ __html: data.content }}></p>
    
                              <hr />
                              <p>
                                <a className="button" href={data.keynotesUrl}>Keynotes</a>{' '}
                                <a className="button" href={data.panelSessionsUrl}>Panel Sessions</a>{' '}
                                <a className="button" href={data.excursionsUrl}>Excursions</a>
                              </p>
                              <hr />
                              <h2>Programme</h2>
                              {data.programme.map((day, index) => (
                                <div key={index}>
                                  <h3>{day.date}</h3>
                                  <div className="tm_timeline tm_timeline-layout-vertical">
                                    <div className="tm_timeline__container">
                                      <div className="tm_timeline__body-tense">
                                        {day.events.map((event, idx) => (
                                          <div className="tm_timeline__event" key={idx}>
                                            <div className="tm_timeline__event__dot"></div>
                                            <div className="tm_timeline__event__date">{event.time}</div>
                                            <div className="tm_timeline__event__title">{event.title}</div>
                                            {event.location && <div className="tm_timeline__event__description"><p>{event.location}</p></div>}
                                            {event.description && <div className="tm_timeline__event__description"><p>{event.description}</p></div>}
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                              <hr />
                              <p>
                                <a className="button" href="https://events.icon-society.at/public-law-and-the-cities/">Register now</a>
                              </p>
                              <hr />
                              <p><strong>The conference is supported by:</strong></p>
                              <div className="sponsoren">
                                {data.sponsors.map((sponsor, idx) => (
                                  <a key={idx} href={sponsor.url}>
                                    <img loading="lazy" className="alignnone wp-image-735 size-full" src={sponsor.logo} alt={sponsor.name} width="300" height="199" />
                                  </a>
                                ))}
                              </div>
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

export default PublicLawAndCitiesPage;
