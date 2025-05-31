import React from 'react';
import '../styles/web.css'; // Import related CSS
import '../styles/normalize.css';
import '../styles/mylostumt.css';

import { Link } from "react-router-dom";

export default function HowItWorks() {
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
      <Link to="/" className="navbar_logo-link w-nav-brand">
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
        <Link to="/#about-us" className="navbar_link w-nav-link">
          About us
        </Link>
        <Link
          to="/how-it-works"
          aria-current="page"
          className="navbar_link w-nav-link w--current"
        >
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
                Empowering UMT Students and Staff to Reconnect with Their
                Belongings
              </h1>
              <Link to="/signup" className="button-primary w-inline-block">
                <div className="text-block-2">Sign up now</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
    <section className="section_feature">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="feature_component">
              <div
                id="w-node-_88ee250c-17bf-adeb-46fc-7ceaa557bd56-ebf10a1b"
                className="feature_content"
              >
                <div className="feature-header-wrapper">
                  <div className="feature-image-wrapper">
                    <img
                      src="images/one.png"
                      loading="lazy"
                      alt=""
                      className="feature-image is-1"
                    />
                  </div>
                  <div>
                    <div className="text-style-tagline">My lost - UMT</div>
                    <h2 className="heading-style-h3">Signup </h2>
                  </div>
                </div>
                <div className="spacer-medium" />
                <p className="text-size-regular text-color-secondary">
                  Create your free account using your university email and start
                  helping others — or get help finding what you’ve lost. Signing
                  up gives you access to dashboards, claim tools, notifications,
                  and secure messaging.
                </p>
              </div>
              <div
                id="w-node-_88ee250c-17bf-adeb-46fc-7ceaa557bd62-ebf10a1b"
                className="feature_image-wrapper"
              >
                <img
                  src="images/Mockup-2.png"
                  loading="lazy"
                  sizes="(max-width: 1803px) 100vw, 1803px"
                  srcSet="images/Mockup-2.png 500w, images/Mockup-2.png 800w, images/Mockup-2.png 1080w, images/Mockup-2.png 1600w, images/Mockup-2.png 1803w"
                  alt=""
                  className="feature_image is-1"
                />
              </div>
            </div>
            <div className="spacer-xxhuge" />
            <div className="feature_component left-image">
              <div
                id="w-node-da28dbc7-3fb1-d42b-9d53-b3e94df19815-ebf10a1b"
                className="feature_image-wrapper"
              >
                <img
                  src="images/Mockup-3.png"
                  loading="lazy"
                  sizes="(max-width: 1357px) 100vw, 1357px"
                  srcSet="images/Mockup-3.png 500w, images/Mockup-3.png 800w, images/Mockup-3.png 1080w, images/Mockup-3.png 1357w"
                  alt=""
                  className="feature_image"
                />
              </div>
              <div
                id="w-node-da28dbc7-3fb1-d42b-9d53-b3e94df19805-ebf10a1b"
                className="feature_content"
              >
                <div className="feature-header-wrapper">
                  <div className="process_customer-image-wrapper">
                    <img
                      src="images/two.png"
                      loading="lazy"
                      alt=""
                      className="feature-image"
                    />
                  </div>
                  <div>
                    <div className="text-style-tagline">My lost - UMT</div>
                    <h2 className="heading-style-h3">Create a post</h2>
                  </div>
                </div>
                <div className="spacer-medium" />
                <p className="text-size-regular text-color-secondary">
                  Easily upload photos and enter details like category,
                  location, and description to report a lost or found item.
                </p>
              </div>
            </div>
            <div className="spacer-xxhuge" />
            <div className="feature_component">
              <div
                id="w-node-fe532de7-3ec8-866b-401b-d28daba56909-ebf10a1b"
                className="feature_content"
              >
                <div className="feature-header-wrapper">
                  <div className="process_customer-image-wrapper">
                    <img
                      src="images/three.png"
                      loading="lazy"
                      alt=""
                      className="feature-image"
                    />
                  </div>
                  <div>
                    <div className="text-style-tagline">My lost - UMT</div>
                    <h2 className="heading-style-h3">Sit &amp; Wait</h2>
                  </div>
                </div>
                <div className="spacer-medium" />
                <p className="text-size-regular text-color-secondary">
                  Just wait for couple of day, and see if you recieve any
                  messages from users in the comunity. you will recieve your
                  item when the admin clears the status
                </p>
              </div>
              <div
                id="w-node-fe532de7-3ec8-866b-401b-d28daba56919-ebf10a1b"
                className="feature_image-wrapper"
              >
                <img
                  src="images/Mockup-1-2.png"
                  loading="lazy"
                  sizes="(max-width: 1490px) 100vw, 1490px"
                  srcSet="images/Mockup-1-2.png 500w, images/Mockup-1-2.png 800w, images/Mockup-1-2.png 1080w, images/Mockup-1-2.png 1490w"
                  alt=""
                  className="feature_image"
                />
              </div>
            </div>
            <div className="spacer-xxhuge" />
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
                to="/"
                id="w-node-cfa1a1b7-a31b-61a4-4b6d-b315551eb084-551eb07f"
                className="footer_logo-link w-nav-brand"
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
                <Link
                  to="/how-it-works"
                  aria-current="page"
                  className="footer_link w--current"
                >
                  About us
                </Link>
                <Link to="/how-it-works" className="footer_link">
                  How it works
                </Link>
                <Link to="/login" className="footer_link">
                  Log in
                </Link>
                <Link to="/signup" className="footer_link">
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
}
