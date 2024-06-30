import React, { useState } from 'react';

const MembershipPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    letterOfInterest: null,
    cv: null,
    publications: null,
    userName: '',
    password: '',
    passwordRe: '',
    mailerlite: false,
    acceptTerms: false,
    acceptPp: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 處理表單提交邏輯
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
                          <article className="post-type-page post-287 page type-page status-publish hentry" id="post-287">
                            <section className="entry-header">
                              <h1 className="entry-title">Membership</h1>
                            </section>
                            <section className="entry-content">
                              <p>The Taiwan Chapter of the International Society of Public Law encourages all interested persons to become a member of the ICON.S Taiwan Chapter:</p>
                              <ul>
                                <li>Prospective members should have an interest in public law</li>
                                <li>Some affiliation with Taiwan (not bound to nationality)</li>
                                <li>A first degree in law
                                  <ul>
                                    <li>Post-doc level or higher: membership in the ICON.S (international) is required to join the Taiwan Chapter;</li>
                                    <li>Student members: membership in the ICON.S (international) is encouraged</li>
                                  </ul>
                                </li>
                                <li>The chapter membership is free.</li>
                              </ul>
                              <p><strong>Procedure:</strong></p>
                              <ul>
                                <li>Please complete the form below, including a letter of interest, an academic CV and a list of publications (if available).</li>
                                <li>The co-chair will decide in collaboration with members of the advisory council.</li>
                              </ul>
                              <p><strong>Application form:</strong></p>

                              <div className="swpm-registration-widget-form">
                                <form id="swpm-registration-form" className="swpm-validate-form" name="swpm-registration-form" method="post" action=""
                                  enctype="multipart/form-data" onSubmit={handleSubmit}>
                                  <input type="hidden" name="level_identifier" value="c81e728d9d4c2f636f067f89cc14862c" />
                                  <input type="hidden" value="2" size="50" name="membership_level" id="membership_level" />
                                  <input type="hidden" name="swpm_level_hash" value="268bf6415f65bef18f3f01ea8de3af8a" />
                                  <div className="row swpm-registration-firstname-row">
                                    <div className="col-20">
                                      <label htmlFor="first_name">First Name*</label>
                                    </div>
                                    <div className="col-75">
                                      <input type="text" id="first_name"
                                        className="validate[required]"
                                        value={formData.firstName} size="50"
                                        name="firstName" onChange={handleChange} />
                                    </div>
                                  </div>

                                  <div className="row swpm-registration-lastname-row">
                                    <div className="col-20">
                                      <label htmlFor="last_name">Surname*</label>
                                    </div>
                                    <div className="col-75">
                                      <input type="text" id="last_name"
                                        className="validate[required]"
                                        value={formData.lastName} size="50"
                                        name="lastName" onChange={handleChange} />
                                    </div>
                                  </div>

                                  <div className="row swpm-registration-company-name">
                                    <div className="col-20">
                                      <label htmlFor="company_name">Institutional Affiliation*</label>
                                    </div>
                                    <div className="col-75">
                                      <input type="text" autocomplete="off" id="company_name"
                                        className="validate[required]"
                                        value={formData.companyName} size="150" name="companyName" onChange={handleChange} />
                                    </div>
                                  </div>

                                  <div className="row swpm-registration-email-row">
                                    <div className="col-20">
                                      <label htmlFor="email">Email*</label>
                                    </div>
                                    <div className="col-75">
                                      <input type="text" autocomplete="off" id="email"
                                        className="validate[required,custom[email],ajax[ajaxEmailCall]]"
                                        value={formData.email} size="50" name="email" onChange={handleChange} />
                                    </div>
                                  </div>

                                  <div className="row swpm-registration-file">
                                    <div className="col-20">
                                      <label htmlFor="letter_of_interest">Letter of interest*</label>
                                    </div>
                                    <div className="col-75">
                                      <label htmlFor="letter_of_interest" className="file-upload-wrapper">
                                        <input type="file" id="letter_of_interest"
                                          name="letterOfInterest" accept="application/pdf"
                                          required onChange={handleChange} />
                                        <span className="description">(PDF, max. 2MB)</span>
                                      </label>
                                    </div>
                                  </div>

                                  <div className="row swpm-registration-file">
                                    <div className="col-20">
                                      Academic CV*
                                    </div>
                                    <div className="col-75">
                                      <label htmlFor="cv" className="file-upload-wrapper">
                                        <input type="file" id="cv"
                                          name="cv" accept="application/pdf"
                                          required onChange={handleChange} />
                                        <span className="description">(PDF, max. 2MB)</span>
                                      </label>
                                    </div>
                                  </div>

                                  <div className="row swpm-registration-file">
                                    <div className="col-20">
                                      List of publications
                                    </div>
                                    <div className="col-75">
                                      <label htmlFor="publications" className="file-upload-wrapper">
                                        <input type="file" id="publications" name="publications" accept="application/pdf" onChange={handleChange} />
                                        <span className="description">(PDF, max. 2MB)</span>
                                      </label>
                                    </div>
                                  </div>

                                  <div className="row swpm-registration-username-row">
                                    <div className="col-20">
                                      Username*
                                    </div>
                                    <div className="col-75">
                                      <input type="text" id="user_name"
                                        className="validate[required,custom[noapostrophe],custom[SWPMUserName],minSize[4],ajax[ajaxUserCall]]"
                                        value={formData.userName} size="50"
                                        name="userName" onChange={handleChange} />
                                    </div>
                                  </div>

                                  <div className="row swpm-registration-password-row">
                                    <div className="col-20">
                                      <label htmlFor="password">Password*</label>
                                    </div>
                                    <div className="col-75">
                                      <input type="password" autocomplete="off" id="password"
                                        className="validate[required,custom[strongPass],minSize[8]]"
                                        value={formData.password} size="50" name="password" onChange={handleChange} />
                                    </div>
                                  </div>

                                  <div className="row swpm-registration-password-retype-row">
                                    <div className="col-20">
                                      <label htmlFor="password_re">Repeat Password*</label>
                                    </div>
                                    <div className="col-75">
                                      <input type="password" autocomplete="off" id="password_re" value={formData.passwordRe} size="50" name="passwordRe" onChange={handleChange} />
                                    </div>
                                  </div>

                                  <div className="row swpm-registration-newsletter" style={{ marginTop: '50px' }}>
                                    <div className="col-95">
                                      <label><input type="checkbox" id="swpm-mailerlite" name="mailerlite"
                                        value="1" checked={formData.mailerlite} onChange={handleChange} />I would like to receive the ICON.S Taiwan newsletter</label>
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div className="col-95">
                                      <label><input type="checkbox" id="swpm-accept-terms" name="acceptTerms"
                                        className="validate[required]"
                                        value="1" checked={formData.acceptTerms} onChange={handleChange} /> I accept the  <a
                                          href="/terms-and-conditions"
                                          target="_blank">Terms and Conditions</a></label>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-95">
                                      <label><input type="checkbox" id="swpm-accept-pp" name="acceptPp"
                                        className="validate[required]"
                                        value="1" checked={formData.acceptPp} onChange={handleChange} /> I agree to the  <a
                                          href="https://www.icon-society.at/privacy-policy/"
                                          target="_blank">Privacy Policy</a></label>
                                    </div>
                                  </div>

                                  <div className="swpm-before-registration-submit-section">
                                  </div>

                                  <div className="swpm-registration-submit-section" style={{ marginTop: '50px' }}>
                                    <input type="submit" value="Apply for membership now" className="swpm-registration-submit"
                                      name="swpm_registration_submit" />
                                    <div id="swpm-registration-submitting" style={{ display: 'none' }}><i className="fas fa-circle-notch fa-spin"></i>
                                    </div>
                                  </div>

                                  <input type="hidden" name="action" value="custom_posts" />
                                </form>
                                <script>
                                  {`
                                  jQuery( function ( $ )
                                  {
                                      $( "#swpm-registration-form" ).on( 'submit', function ( event )
                                      {
                                          if ( $( this ).validationEngine( 'validate' ) )
                                          {
                                              $( '.swpm-registration-submit' ).hide();
                                              $( '#swpm-registration-submitting' ).fadeIn();
                                          }
                                      } );

                                      $( 'input:file' ).on( "change", function ()
                                      {
                                          if ( typeof this.files[ 0 ] !== 'undefined' && this.files[ 0 ].size > 2097152 ) // 2MB
                                          {
                                              alert( "File is too big!" );
                                              this.value = "";
                                          }
                                      } );
                                  } );
                                  `}
                                </script>
                              </div>

                              <p>Fields marked with * are required</p>
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

export default MembershipPage;
