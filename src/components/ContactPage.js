import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    yourName: '',
    yourEmail: '',
    yourSubject: '',
    yourMessage: '',
    datenschutz: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 處理表單提交的邏輯
    console.log('Form data submitted:', formData);
  };

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
                          <article className="post-type-page post-163 page type-page status-publish hentry" id="post-163">
                            <section className="entry-header">
                              <h1 className="entry-title">Contact</h1>
                            </section>
                            <section className="entry-content">
                              <p>by <a className="mail" href="mailto:contact@mail.icon-society.at">Email</a></p>
                              <p>by contact form:</p>
                              <div className="contact-form">
                                <form onSubmit={handleSubmit} className="wpcf7-form" noValidate>
                                  <div className="row">
                                    <div className="cell first width-100">
                                      <label>Your Name (required)<br />
                                        <input
                                          type="text"
                                          name="yourName"
                                          value={formData.yourName}
                                          onChange={handleChange}
                                          size="40"
                                          className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                          required
                                        />
                                      </label>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="cell first width-100">
                                      <label>Your Email (required)<br />
                                        <input
                                          type="email"
                                          name="yourEmail"
                                          value={formData.yourEmail}
                                          onChange={handleChange}
                                          size="40"
                                          className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                                          required
                                        />
                                      </label>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="cell first width-100">
                                      <label>Subject (required)<br />
                                        <input
                                          type="text"
                                          name="yourSubject"
                                          value={formData.yourSubject}
                                          onChange={handleChange}
                                          size="40"
                                          className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                          required
                                        />
                                      </label>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="cell first width-100">
                                      <label>Your Message (required)<br />
                                        <textarea
                                          name="yourMessage"
                                          value={formData.yourMessage}
                                          onChange={handleChange}
                                          cols="40"
                                          rows="10"
                                          maxLength="200"
                                          className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required"
                                          required
                                        ></textarea>
                                      </label>
                                    </div>
                                  </div>
                                  <div style={{ marginTop: '20px', backgroundColor: '#F0F0F0', padding: '12px' }}>
                                    <label>
                                      <input
                                        type="checkbox"
                                        name="datenschutz"
                                        checked={formData.datenschutz}
                                        onChange={handleChange}
                                        required
                                      />
                                      I accept the <strong><a href="https://www.icon-society.at/privacy-policy/" target="_blank" rel="noopener noreferrer">privacy policy</a></strong>.
                                    </label>
                                  </div>
                                  <p><input type="submit" value="Submit" className="wpcf7-form-control wpcf7-submit" /></p>
                                </form>
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

export default ContactPage;
