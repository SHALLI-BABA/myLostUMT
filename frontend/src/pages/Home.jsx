// src/pages/Home.js
import React from 'react';
import '../styles/web.css'; // Import related CSS
import '../styles/normalize.css';
import '../styles/mylostumt.css';

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="page-wrapper">
      <div
        data-animation="default"
        className="navbar_component w-nav"
        data-easing2="ease"
        fs-scrolldisable-element="smart-nav"
        data-easing="ease"
        data-collapse="medium"
        data-w-id="0de7fcba-6892-160a-084a-03ab875f42ee"
        role="banner"
        data-duration={400}
      >
        <div className="container-large navbar">
          <Link
            to="/"
            aria-current="page"
            className="navbar_logo-link w-nav-brand w--current"
          >
            <img
              src="images/Group-1000007181-1.png"
              loading="lazy"
              sizes="(max-width: 479px) 98vw, (max-width: 767px) 99vw, (max-width: 1710px) 100vw, 1710px"
              srcSet="images/Group-1000007181-1-p-500.png 500w, images/Group-1000007181-1-p-800.png 800w, images/Group-1000007181-1-p-1080.png 1080w, images/Group-1000007181-1-p-1600.png 1600w, images/Group-1000007181-1.png 1710w"
              alt=""
            />
          </Link>
          <nav
            role="navigation"
            className="navbar_menu is-page-height-tablet w-nav-menu"
          >
            <Link to="#about-us" className="navbar_link w-nav-link">
              About us
            </Link>
            <Link to="/how-it-works" className="navbar_link w-nav-link">
              How it works
            </Link>
            <Link to="/signup" className="navbar_link w-nav-link">
              Sign up
            </Link>
            <Link to="/login" className="button w-button">
              Dashboard
            </Link>
          </nav>
          <div className="rl_navbar1_menu-button w-nav-button">
            <div className="rl_menu-icon">
              <div className="rl_menu-icon_line-top" />
              <div className="rl_menu-icon_line-middle">
                <div className="rl_menu-icon_line-middle-inner" />
              </div>
              <div className="rl_menu-icon_line-bottom" />
            </div>
          </div>
        </div>
      </div>
      <main className="main-wrapper">
        <header className="section_header">
          <div className="padding-global">
            <div className="container-large">
              <div className="hero_component">
                <div className="hero1_content">
                  <h1 className="max-width-xlarge heading-style-h2">
                    Lost Something on Campus? Let Us{" "}
                    <span className="text-color-yellow">Help You Find It.</span>
                  </h1>
                  <div className="text-size-regular max-width-medium">
                    UMT’s Official Lost &amp; Found Portal – Report, Track, and
                    Recover Lost Belongings with Ease.
                  </div>
                  <div className="w-layout-vflex button-group">
                    <Link to="/login" className="button-primary w-inline-block">
                      <div className="text-block-2">Log in</div>
                    </Link>
                    <Link to="/signup" className="button w-inline-block">
                      <div className="text-block-2">Sign up</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section id="about-us" className="section_experience">
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-section-xlarge">
                <div className="experience_component">
                  <div
                    id="w-node-a687bec9-64f6-a009-60e7-a9049f45ef07-ebf10a17"
                    className="experience_content"
                  >
                    <div className="text-style-tagline">
                      My lost - University of manegement &amp; Technology
                    </div>
                    <h2 className="heading-style-h3">
                      Empowering UMT Students and Staff to Reconnect with Their
                      Belongings
                    </h2>
                    <p className="text-size-regular text-color-secondary">
                      The UMT Lost &amp; Found Portal is a student-led initiative
                      designed to simplify the process of recovering lost belongings
                      on campus. Whether it’s a misplaced USB or a forgotten water
                      bottle, our platform provides a{" "}
                      <span className="text-span-2">fast</span>,{" "}
                      <span className="text-span-2">secure</span>, and{" "}
                      <span className="text-span-2">traceable</span> way to report,
                      list, and claim items.
                    </p>
                  </div>
                  <div
                    id="w-node-a687bec9-64f6-a009-60e7-a9049f45ef05-ebf10a17"
                    className="experience_image-wrapper"
                  >
                    <img
                      src="images/Mockup.png"
                      loading="lazy"
                      sizes="(max-width: 1202px) 100vw, 1202px"
                      srcSet="images/Mockup.png 500w, images/Mockup.png 800w, images/Mockup.png 1080w, images/Mockup.png 1202w"
                      alt=""
                      className="experience_image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section_process">
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-section-medium">
                <div className="process_component">
                  <div className="process_process-list">
                    <div
                      id="w-node-_55fed935-0339-9e99-dbed-f2b30e89cab6-ebf10a17"
                      className="process_heading-wrapper"
                    >
                      <h2 className="heading-style-h2">
                        This secure platform ensures transparency, accountability,
                        and faster recovery
                      </h2>
                    </div>
                    <div
                      id="w-node-ed90c7c5-99bb-7b8e-6975-fd7aef43e07d-ebf10a17"
                      className="process_process"
                    >
                      <div className="process_customer">
                        <div className="process_customer-image-wrapper">
                          <img
                            src="images/photo-camera-interface-symbol-for-button.png"
                            loading="lazy"
                            alt=""
                            className="process_customer-image"
                          />
                        </div>
                        <div className="process_customer-info">
                          <p className="process_name-text">Post Items</p>
                        </div>
                      </div>
                      <div className="spacer-small" />
                      <div className="text-size-regular">
                        Easily upload photos and enter details like category,
                        location, and description to report a lost or found item.
                      </div>
                    </div>
                    <div
                      id="w-node-_457dc533-02cc-cf24-26c1-6f9482416544-ebf10a17"
                      className="process_process"
                    >
                      <div className="process_customer">
                        <div className="process_customer-image-wrapper">
                          <img
                            src="images/magnifying-glass.png"
                            loading="lazy"
                            alt=""
                            className="process_customer-image"
                          />
                        </div>
                        <div className="process_customer-info">
                          <p className="process_name-text">
                            Smart Filters &amp; Search
                          </p>
                        </div>
                      </div>
                      <div className="spacer-small" />
                      <div className="text-size-regular">
                        Quickly browse items by category (e.g., electronics,
                        stationery), location (library, café), and date to find what
                        you’re looking for.
                      </div>
                    </div>
                    <div
                      id="w-node-_2d70c0c6-b023-c4d4-0e12-3452e1621de7-ebf10a17"
                      className="process_process"
                    >
                      <div className="process_customer">
                        <div className="process_customer-image-wrapper">
                          <img
                            src="images/chat.png"
                            loading="lazy"
                            alt=""
                            className="process_customer-image"
                          />
                        </div>
                        <div className="process_customer-info">
                          <p className="process_name-text">Chat System</p>
                        </div>
                      </div>
                      <div className="spacer-small" />
                      <div className="text-size-regular">
                        Communicate directly with the item finder or owner through a
                        secure chat to confirm identity and coordinate returns.
                      </div>
                    </div>
                    <div
                      id="w-node-_01637b30-59ec-1e75-8906-a0a8fad1b3cc-ebf10a17"
                      className="process_process"
                    >
                      <div className="process_customer">
                        <div className="process_customer-image-wrapper">
                          <img
                            src="images/email.png"
                            loading="lazy"
                            alt=""
                            className="process_customer-image"
                          />
                        </div>
                        <div className="process_customer-info">
                          <p className="process_name-text">Claim Requests</p>
                        </div>
                      </div>
                      <div className="spacer-small" />
                      <div className="text-size-regular">
                        Request to claim a found item and receive instant
                        notifications when someone responds or posts a possible
                        match.
                      </div>
                    </div>
                    <div
                      id="w-node-_067e2a21-a7ef-3b45-98ec-9b60748a2847-ebf10a17"
                      className="process_process"
                    >
                      <div className="process_customer">
                        <div className="process_customer-image-wrapper">
                          <img
                            src="images/lock.png"
                            loading="lazy"
                            alt=""
                            className="process_customer-image"
                          />
                        </div>
                        <div className="process_customer-info">
                          <p className="process_name-text">Secure Login</p>
                        </div>
                      </div>
                      <div className="spacer-small" />
                      <div className="text-size-regular">
                        Only UMT students and staff can access the portal using
                        their official university email, ensuring a safe and
                        verified community.
                      </div>
                    </div>
                  </div>
                  <div className="spacer-huge" />
                  <div className="process_footer_component">
                    <p className="text-style-tagline">
                      My lost - University of manegement &amp; Technology
                    </p>
                    <h3
                      id="w-node-_47c49074-aee0-e50b-f989-933d91da933c-ebf10a17"
                      className="heading-style-h3"
                    >
                      Safe. Simple. Student-Driven.
                    </h3>
                    <p
                      id="w-node-f22b0c13-e011-9ad7-3fe2-2b6bd3fef92d-ebf10a17"
                      className="text-size-regular"
                    >
                      Designed for UMT students and staff, our portal ensures
                      verified users, secure chats, and admin oversight — so you can
                      recover or return belongings with confidence and ease.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section_future">
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-section-large">
                <div className="future_component">
                  <div className="future_content">
                    <div className="text-style-tagline color-yellow">
                      My lost - University of manegement &amp; Technology
                    </div>
                    <h2 className="heading-style-h2">
                      Why Use the UMT Lost &amp; Found Portal?
                    </h2>
                    <div className="text-color-light max-width-large">
                      Misplaced your ID or found someone’s USB? Our platform makes
                      it easy to report, browse, and claim lost or found items
                      within minutes — all within a trusted UMT-only environment.
                    </div>
                  </div>
                  <div className="spacer-large" />
                  <div className="future_image-wrapper">
                    <img
                      src="images/Group-1000007182.png"
                      loading="lazy"
                      sizes="(max-width: 2746px) 100vw, 2746px"
                      srcSet="images/Group-1000007182.png 500w, images/Group-1000007182.png 800w, images/Group-1000007182.png 1080w, images/Group-1000007182.png 1600w, images/Group-1000007182.png 2000w, images/Group-1000007182.png 2600w, images/Group-1000007182.png 2746w"
                      alt=""
                      className="future_image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section_testimonials">
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-section-large">
                <div className="testimonials_component">
                  <div
                    id="w-node-bad543e7-1115-5278-3b17-2dfd33b594da-ebf10a17"
                    className="testimonials_content"
                  >
                    <div className="text-style-tagline">
                      My lost - University of manegement &amp; Technology
                    </div>
                    <h2 className="heading-style-h2">Student Testimonials</h2>
                    <p className="text-size-regular">
                      "The entire process was amazing from the start. I got my bag
                      in perfect condition. thankyou MyLost for making our life
                      easier in University."
                    </p>
                    <div className="testimonials_stars_wrapper">
                      <img src="images/Vector-6.svg" loading="lazy" alt="" />
                      <img src="images/Vector-6.svg" loading="lazy" alt="" />
                      <img src="images/Vector-6.svg" loading="lazy" alt="" />
                      <img src="images/Vector-6.svg" loading="lazy" alt="" />
                      <img src="images/Vector-6.svg" loading="lazy" alt="" />
                    </div>
                    <p className="testimonial_name">-Abdul Wahab</p>
                  </div>
                  <div className="testimoniasl_image-wrapper">
                    <img
                      src="images/front-view-young-man-hugging-his-school-backpack-1-2.png"
                      loading="lazy"
                      sizes="(max-width: 832px) 100vw, 832px"
                      srcSet="images/front-view-young-man-hugging-his-school-backpack-1-2.png 500w, images/front-view-young-man-hugging-his-school-backpack-1-2.png 800w, images/front-view-young-man-hugging-his-school-backpack-1-2.png 832w"
                      alt=""
                      className="testimonials_image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section_faq">
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-section-large">
                <div className="faq_component">
                  <div className="faq_heading-wrapper">
                    <div className="text-style-tagline color-yellow">
                      My lost - University of manegement &amp; Technology
                    </div>
                    <h2 className="heading-style-h3">
                      Some of our Frequently Asked Questions
                    </h2>
                  </div>
                  <div className="faq_list">
                    <div className="w-layout-grid faq_list-grid">
                      <div className="faq_accordion">
                        <div
                          data-w-id="90062408-3108-a67f-c150-02cd63f39236"
                          className="faq_question"
                        >
                          <div className="faq_question-text">
                            Who can use the portal?
                          </div>
                          <div className="faq_icon-wrapper">
                            <div className="faq_icon w-embed">
                              <svg
                                width=" 100%"
                                height=" 100%"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M25.3334 15.6668V16.3334C25.3334 16.7016 25.0349 17.0001 24.6667 17.0001H17.0001V24.6667C17.0001 25.0349 16.7016 25.3334 16.3334 25.3334H15.6667C15.2986 25.3334 15.0001 25.0349 15.0001 24.6667L15.0001 17.0001H7.33341C6.96522 17.0001 6.66675 16.7016 6.66675 16.3334V15.6668C6.66675 15.2986 6.96522 15.0001 7.33341 15.0001H15.0001V7.33341C15.0001 6.96522 15.2986 6.66675 15.6667 6.66675H16.3334C16.7016 6.66675 17.0001 6.96522 17.0001 7.33341V15.0001L24.6667 15.0001C25.0349 15.0001 25.3334 15.2986 25.3334 15.6668Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="faq_answer">
                          <div className="faq_answer-wrapper">
                            <p className="text-size-regular">
                              Only UMT students, faculty, and staff with a verified
                              university email can sign up and use the platform.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="faq_accordion">
                        <div
                          data-w-id="90062408-3108-a67f-c150-02cd63f39240"
                          className="faq_question"
                        >
                          <div className="faq_question-text">
                            How do I report a lost or found item?
                          </div>
                          <div className="faq_icon-wrapper">
                            <div className="faq_icon w-embed">
                              <svg
                                width=" 100%"
                                height=" 100%"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M25.3334 15.6668V16.3334C25.3334 16.7016 25.0349 17.0001 24.6667 17.0001H17.0001V24.6667C17.0001 25.0349 16.7016 25.3334 16.3334 25.3334H15.6667C15.2986 25.3334 15.0001 25.0349 15.0001 24.6667L15.0001 17.0001H7.33341C6.96522 17.0001 6.66675 16.7016 6.66675 16.3334V15.6668C6.66675 15.2986 6.96522 15.0001 7.33341 15.0001H15.0001V7.33341C15.0001 6.96522 15.2986 6.66675 15.6667 6.66675H16.3334C16.7016 6.66675 17.0001 6.96522 17.0001 7.33341V15.0001L24.6667 15.0001C25.0349 15.0001 25.3334 15.2986 25.3334 15.6668Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="faq_answer">
                          <div className="faq_answer-wrapper">
                            <p className="text-size-regular">
                              Log in, go to your dashboard, and fill out the form
                              with item details, location, and an image.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="faq_accordion">
                        <div
                          data-w-id="90062408-3108-a67f-c150-02cd63f3924a"
                          className="faq_question"
                        >
                          <div className="faq_question-text">
                            How do I claim a found item?
                          </div>
                          <div className="faq_icon-wrapper">
                            <div className="faq_icon w-embed">
                              <svg
                                width=" 100%"
                                height=" 100%"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M25.3334 15.6668V16.3334C25.3334 16.7016 25.0349 17.0001 24.6667 17.0001H17.0001V24.6667C17.0001 25.0349 16.7016 25.3334 16.3334 25.3334H15.6667C15.2986 25.3334 15.0001 25.0349 15.0001 24.6667L15.0001 17.0001H7.33341C6.96522 17.0001 6.66675 16.7016 6.66675 16.3334V15.6668C6.66675 15.2986 6.96522 15.0001 7.33341 15.0001H15.0001V7.33341C15.0001 6.96522 15.2986 6.66675 15.6667 6.66675H16.3334C16.7016 6.66675 17.0001 6.96522 17.0001 7.33341V15.0001L24.6667 15.0001C25.0349 15.0001 25.3334 15.2986 25.3334 15.6668Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="faq_answer">
                          <div className="faq_answer-wrapper">
                            <p className="text-size-regular">
                              Click on the item post, submit a claim request, and
                              chat securely with the finder to confirm details.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="faq_accordion">
                        <div
                          data-w-id="90062408-3108-a67f-c150-02cd63f39254"
                          className="faq_question"
                        >
                          <div className="faq_question-text">
                            Q: Is my information private?
                          </div>
                          <div className="faq_icon-wrapper">
                            <div className="faq_icon w-embed">
                              <svg
                                width=" 100%"
                                height=" 100%"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M25.3334 15.6668V16.3334C25.3334 16.7016 25.0349 17.0001 24.6667 17.0001H17.0001V24.6667C17.0001 25.0349 16.7016 25.3334 16.3334 25.3334H15.6667C15.2986 25.3334 15.0001 25.0349 15.0001 24.6667L15.0001 17.0001H7.33341C6.96522 17.0001 6.66675 16.7016 6.66675 16.3334V15.6668C6.66675 15.2986 6.96522 15.0001 7.33341 15.0001H15.0001V7.33341C15.0001 6.96522 15.2986 6.66675 15.6667 6.66675H16.3334C16.7016 6.66675 17.0001 6.96522 17.0001 7.33341V15.0001L24.6667 15.0001C25.0349 15.0001 25.3334 15.2986 25.3334 15.6668Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="faq_answer">
                          <div className="faq_answer-wrapper">
                            <p className="text-size-regular">
                              Yes, all communication is secure and only visible to
                              involved users and admins.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="section_footer">
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-section-medium">
                <div className="w-layout-grid footer_top-wrapper">
                  <Link
                    to="/home"
                    id="w-node-cfa1a1b7-a31b-61a4-4b6d-b315551eb084-551eb07f"
                    aria-current="page"
                    className="footer_logo-link w-nav-brand w--current"
                  >
                    <img
                      src="images/Group-1000007181-2.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 98vw, (max-width: 767px) 99vw, (max-width: 1710px) 100vw, 1710px"
                      srcSet="images/Group-1000007181-2-p-500.png 500w, images/Group-1000007181-2-p-800.png 800w, images/Group-1000007181-2-p-1080.png 1080w, images/Group-1000007181-2-p-1600.png 1600w, images/Group-1000007181-2.png 1710w"
                      alt=""
                      className="footer_logo"
                    />
                  </Link>
                  <div className="w-layout-grid footer_link-list">
                    <Link to="#" className="footer_link">
                      About us
                    </Link>
                    <Link to="#" className="footer_link">
                      How it works
                    </Link>
                    <Link to="#" className="footer_link">
                      Log in
                    </Link>
                    <Link to="#" className="footer_link">
                      Sign up
                    </Link>
                  </div>
                  <div
                    id="w-node-cfa1a1b7-a31b-61a4-4b6d-b315551eb098-551eb07f"
                    className="footer_credit-text"
                  >
                    Website design by Anshaal Ahmad | Trigggers, Website Design
                    Company
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
