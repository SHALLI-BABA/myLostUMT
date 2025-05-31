import React from 'react';
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import '../styles/web.css'; // Import related CSS
import '../styles/normalize.css';
import '../styles/mylostumt.css';

import { Link } from "react-router-dom";

export default function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    const success = await signup(email, password);
    if (success) navigate("/dashboard");
    else setError("Signup failed");
  };

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
            <Link to="/how-it-works" className="navbar_link w-nav-link">
              How it works
            </Link>
            <Link
              to="/signup"
              aria-current="page"
              className="navbar_link w-nav-link w--current"
            >
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
        <div className="section-demo-form">
          <div className="padding-global">
            <div className="container-large">
              <div className="w-layout-vflex demo-component">
                <div
                  id="w-node-_435e4159-33ba-28bf-6030-a02022d04699-62d97ac6"
                  className="demo-content-wraper"
                >
                  <h1 className="heading-style-h2">
                    Discover <span className="lms">MyLost </span>– Join the
                    Community at UMT
                  </h1>
                  <p className="text-size-regular">
                    Create your free account using your university email and start
                    helping others — or get help finding what you’ve lost. Signing
                    up gives you access to dashboards, claim tools, notifications,
                    and secure messaging.
                  </p>
                </div>
                <div className="w-layout-vflex demo-form-wrapper">
                  <div className="contact-form-block w-form">
                    <form
                      onSubmit={handleSubmit}
                      id="wf-form-Signup-form"
                      name="wf-form-Signup-form"
                      data-name="Signup form"
                      method="get"
                      className="contact_form-2"
                      data-wf-page-id="6839f842ad66a84462d97ac6"
                      data-wf-element-id="435e4159-33ba-28bf-6030-a02022d046bb"
                    >
                      <div className="w-layout-vflex">
                        <label htmlFor="first_name" className="field-label-2">
                          Username
                        </label>
                        <input
                          className="text-field w-input"
                          maxLength={256}
                          name="first_name"
                          data-name="First Name"
                          placeholder="AnshaalAhmad"
                          type="text"
                          id="first_name"
                          required=""
                        />
                      </div>
                      <div className="w-layout-vflex">
                        <label htmlFor="email" className="field-label-2">
                          Email Address
                        </label>
                        <input
                          value={email} onChange={e => setEmail(e.target.value)}
                          className="text-field w-input"
                          maxLength={256}
                          name="email"
                          data-name="Email"
                          placeholder="johndoe@umt.edu.pk"
                          type="email"
                          id="email"
                          required=""
                        />
                      </div>
                      <div className="w-layout-vflex">
                        <label htmlFor="password" className="field-label-2">
                          Password
                        </label>
                        <input
                          value={password} onChange={e => setPassword(e.target.value)}
                          className="text-field w-input"
                          maxLength={256}
                          name="password"
                          data-name="password"
                          placeholder=""
                          type="password"
                          id="password"
                          required=""
                        />
                      </div>
                      <label className="w-checkbox checkbox-field">
                        <input
                          type="checkbox"
                          name="checkbox"
                          id="checkbox"
                          data-name="Checkbox"
                          required="true"
                          className="w-checkbox-input checkbox"
                        />
                        <span
                          className="text-color-grey w-form-label"
                          htmlFor="checkbox"
                        >
                          By submitting this form, you agree to our privacy policy
                        </span>
                      </label>
                      <button className="button-primary w-button" type="submit">Sign Up</button>
                    </form>
                    <div className="w-form-done">
                      <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="w-form-fail">
                      <div>
                        Oops! Something went wrong while submitting the form.
                      </div>
                    </div>
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
