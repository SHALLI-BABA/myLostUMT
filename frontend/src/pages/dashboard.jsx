import React from 'react';
import '../styles/web.css'; // Import related CSS
import '../styles/normalize.css';
import '../styles/mylostumt.css';
import { useAuth } from "../context/AuthContext";

import { Link } from "react-router-dom";

export default function Dashboard() {
  
  return (
    <div className="main-dashboard-container-flex">
  <div
    data-collapse="medium"
    data-animation="default"
    data-duration={400}
    data-easing="ease"
    data-easing2="ease"
    role="banner"
    className="dashboard-left-panel nav w-nav"
  >
    <div className="dashboard-left-panel">
      <nav role="navigation" className="nav-menu w-nav-menu">
        <div className="main-left-panel-content-wrapper">
          <Link to="/" className="brand w-nav-brand">
            <div className="logo-header-div">
              <img
                sizes="(max-width: 1710px) 100vw, 1710px"
                srcSet="images/Group-1000007181-2-p-500.png 500w, images/Group-1000007181-2-p-800.png 800w, images/Group-1000007181-2-p-1080.png 1080w, images/Group-1000007181-2-p-1600.png 1600w, images/Group-1000007181-2.png 1710w"
                alt=""
                src="images/Group-1000007181-2.png"
                loading="lazy"
              />
            </div>
          </Link>
          <div className="main-nav-links">
            <Link to="/dashboard" className="nav-link w-inline-block">
              <div className="nav-link-icon">
                <img loading="lazy" src="images/graduation.png" alt="" />
              </div>
              <div className="nav-link-title">Dashboard</div>
            </Link>
            <Link to="/dashboard/lost-posts" className="nav-link w-inline-block">
              <div className="nav-link-icon">
                <img loading="lazy" src="images/pin.png" alt="" />
              </div>
              <div className="nav-link-title">My Lost Posts</div>
            </Link>
            <Link to="/dashboard/found-posts" className="nav-link w-inline-block">
              <div className="nav-link-icon">
                <img loading="lazy" src="images/box.png" alt="" />
              </div>
              <div className="nav-link-title other-page">My Found Posts</div>
            </Link>
            <Link to="/dashboard/claims" className="nav-link w-inline-block">
              <div className="nav-link-icon">
                <img loading="lazy" src="images/email.png" alt="" />
              </div>
              <div className="nav-link-title other-page">My Claim Requests</div>
            </Link>
            <Link to="/dashboard/messages" className="nav-link current w-inline-block">
              <div className="nav-link-icon current">
                <img loading="lazy" src="images/chat.png" alt="" />
              </div>
              <div className="nav-link-title other-page">Messages </div>
            </Link>
            <Link to="/dashboard/admin" className="nav-link w-inline-block">
              <div className="nav-link-icon">
                <img loading="lazy" src="images/admin-panel.png" alt="" />
              </div>
              <div className="nav-link-title other-page">Admin only</div>
            </Link>
          </div>
        </div>
      </nav>
      <div
        data-w-id="477188be-2ddb-27c5-f256-a56143361095"
        className="menu-button w-nav-button"
      >
        <img src="images/menu.png" loading="lazy" alt="" className="icon" />
      </div>
      <div className="user-preview-left-panel">
        <Link className="user-profile-pic-div">
          <img loading="lazy" src="images/profile-user.png" alt="" />
        </Link>
        <div className="acount-info-div">
          <div className="username">SHALLI</div>
        </div>
      </div>
    </div>
  </div>
  <div className="main-dashboard-content-container">
    <div className="main-dashboard-left-split">
      <div className="dash-board-header-div">
        <h2 className="heading-style-h4">Hi SHALLI,</h2>
        <h1 className="dashboard-h1">What are you looking for?</h1>
      </div>
      <div className="dashboard-content-wrapper">
        <div className="dashboard-item-wrapper">
          <div className="process_customer">
            <div className="dashboard-image-wrapper-copy">
              <img
                src="images/edit.png"
                loading="lazy"
                alt=""
                className="process_customer-image"
              />
            </div>
            <div className="process_customer-info">
              <p className="process_name-text">Create a Lost Post</p>
            </div>
          </div>
          <div className="text-size-regular">
            Lost something on campus? Click below to report it with a
            description, image, and last seen location. Help the UMT community
            help you find it faster!
          </div>
          <Link to="/dashboard/create-lost" className="button is-brand w-button">
            Create post
          </Link>
        </div>
        <div className="dashboard-item-wrapper">
          <div className="process_customer">
            <div className="dashboard-image-wrapper-copy">
              <img
                src="images/bag.png"
                loading="lazy"
                alt=""
                className="process_customer-image"
              />
            </div>
            <div className="process_customer-info">
              <p className="process_name-text">Create a Found Post</p>
            </div>
          </div>
          <div className="text-size-regular">
            Found someone’s belonging? Post it here with a photo and where you
            found it — so the rightful owner can claim it easily.
          </div>
          <Link to="/dashboard/create-found" className="button is-brand w-button">
            Create post
          </Link>
        </div>
      </div>
    </div>
    <div className="lost-posts-left-split">
      <div className="dash-board-header-div">
        <h2 className="heading-style-h4">Hi SHALLI,</h2>
        <div className="w-layout-vflex lost-item-header-wrapper">
          <h1 className="dashboard-h1">My Lost Items</h1>
          <Link to="/dashboard/create-lost" className="button is-brand w-button">
            Create Post
          </Link>
        </div>
      </div>
      <div className="dashboard-post-wrapper is-black">
        <div className="w-layout-vflex item-wrapper-grid">
          <div className="blog_collection_item is-black">
            <Link to="/dashboard/lost/wallet" className="blog_collection_image-link w-inline-block">
              <div className="blog_collection_image-wrapper">
                <img
                  sizes="(max-width: 6720px) 100vw, 6720px"
                  srcSet="images/business-financial-concept-with-dollars-wallet-grey-surface-flat-lay.jpg 500w, images/business-financial-concept-with-dollars-wallet-grey-surface-flat-lay.jpg 800w, images/business-financial-concept-with-dollars-wallet-grey-surface-flat-lay.jpg 1080w, images/business-financial-concept-with-dollars-wallet-grey-surface-flat-lay.jpg 1600w, images/business-financial-concept-with-dollars-wallet-grey-surface-flat-lay.jpg 2000w, images/business-financial-concept-with-dollars-wallet-grey-surface-flat-lay.jpg 2600w, images/business-financial-concept-with-dollars-wallet-grey-surface-flat-lay.jpg 3200w, images/business-financial-concept-with-dollars-wallet-grey-surface-flat-lay.jpg 6720w"
                  alt=""
                  src="images/business-financial-concept-with-dollars-wallet-grey-surface-flat-lay.jpg"
                  loading="lazy"
                  className="blog_collection_image"
                />
              </div>
            </Link>
            <div className="w-layout-vflex blog_collection_content is-black">
              <div className="w-layout-vflex blog_collection_header">
                <Link to="/dashboard/lost/wallet" className="blog_collection_title-link w-inline-block">
                  <h3
                    fs-cmsfilter-field="Name"
                    className="post-heading is-black"
                  >
                    Wallet
                  </h3>
                </Link>
              </div>
              <div className="text-size-small text-color-grey">
                This is some text inside of a div block.
              </div>
              <Link
                data-w-id="a22fbf3a-6b1e-0f85-927d-2d95f0359e82"
                to="/dashboard/lost/wallet"
                className="button-icon w-inline-block"
              >
                <div className="nav_btn_text is-black">View Post</div>
                <div className="icon-1x1-small-2 is-black w-embed">
                  <svg
                    aria-hidden="true"
                    fill="currentColor"
                    role="img"
                    viewBox="0 0 20 21"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Arrow Right</title>
                    <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
          <div className="blog_collection_item is-black">
            <Link to="/dashboard/lost/laptop" className="blog_collection_image-link w-inline-block">
              <div className="blog_collection_image-wrapper">
                <img
                  sizes="(max-width: 5472px) 100vw, 5472px"
                  srcSet="images/halfclosed-laptop-wooden-table-screen-glows-with-colors.jpg 500w, images/halfclosed-laptop-wooden-table-screen-glows-with-colors.jpg 800w, images/halfclosed-laptop-wooden-table-screen-glows-with-colors.jpg 1080w, images/halfclosed-laptop-wooden-table-screen-glows-with-colors.jpg 1600w, images/halfclosed-laptop-wooden-table-screen-glows-with-colors.jpg 2000w, images/halfclosed-laptop-wooden-table-screen-glows-with-colors.jpg 2600w, images/halfclosed-laptop-wooden-table-screen-glows-with-colors.jpg 3200w, images/halfclosed-laptop-wooden-table-screen-glows-with-colors.jpg 5472w"
                  alt=""
                  src="images/halfclosed-laptop-wooden-table-screen-glows-with-colors.jpg"
                  loading="lazy"
                  className="blog_collection_image"
                />
              </div>
            </Link>
            <div className="w-layout-vflex blog_collection_content is-black">
              <div className="w-layout-vflex blog_collection_header">
                <Link to="/dashboard/lost/laptop" className="blog_collection_title-link w-inline-block">
                  <h3
                    fs-cmsfilter-field="Name"
                    className="post-heading is-black"
                  >
                    Laptop
                  </h3>
                </Link>
              </div>
              <div className="text-size-small text-color-grey">
                This is some text inside of a div block.
              </div>
              <Link
                data-w-id="a22fbf3a-6b1e-0f85-927d-2d95f0359e91"
                to="/dashboard/lost/laptop"
                className="button-icon w-inline-block"
              >
                <div className="nav_btn_text is-black">View Post</div>
                <div className="icon-1x1-small-2 is-black w-embed">
                  <svg
                    aria-hidden="true"
                    fill="currentColor"
                    role="img"
                    viewBox="0 0 20 21"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Arrow Right</title>
                    <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-layout-vflex item-wrapper-grid">
          <div className="blog_collection_item is-black">
            <Link to="/dashboard/lost/charger" className="blog_collection_image-link w-inline-block">
              <div className="blog_collection_image-wrapper">
                <img
                  sizes="(max-width: 5026px) 100vw, 5026px"
                  srcSet="images/white-cell-phone-charger-white-isolated-background-with-usb-cabe.jpg 500w, images/white-cell-phone-charger-white-isolated-background-with-usb-cabe.jpg 800w, images/white-cell-phone-charger-white-isolated-background-with-usb-cabe.jpg 1080w, images/white-cell-phone-charger-white-isolated-background-with-usb-cabe.jpg 1600w, images/white-cell-phone-charger-white-isolated-background-with-usb-cabe.jpg 2000w, images/white-cell-phone-charger-white-isolated-background-with-usb-cabe.jpg 2600w, images/white-cell-phone-charger-white-isolated-background-with-usb-cabe.jpg 3200w, images/white-cell-phone-charger-white-isolated-background-with-usb-cabe.jpg 5026w"
                  alt=""
                  src="images/white-cell-phone-charger-white-isolated-background-with-usb-cabe.jpg"
                  loading="lazy"
                  className="blog_collection_image"
                />
              </div>
            </Link>
            <div className="w-layout-vflex blog_collection_content is-black">
              <div className="w-layout-vflex blog_collection_header">
                <Link to="/dashboard/lost/charger" className="blog_collection_title-link w-inline-block">
                  <h3
                    fs-cmsfilter-field="Name"
                    className="post-heading is-black"
                  >
                    Charger
                  </h3>
                </Link>
              </div>
              <div className="text-size-small text-color-grey">
                This is some text inside of a div block.
              </div>
              <Link
                data-w-id="a22fbf3a-6b1e-0f85-927d-2d95f0359ea1"
                to="/dashboard/lost/charger"
                className="button-icon w-inline-block"
              >
                <div className="nav_btn_text is-black">View Post</div>
                <div className="icon-1x1-small-2 is-black w-embed">
                  <svg
                    aria-hidden="true"
                    fill="currentColor"
                    role="img"
                    viewBox="0 0 20 21"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Arrow Right</title>
                    <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
          <div className="blog_collection_item is-black">
            <Link to="/dashboard/lost/books" className="blog_collection_image-link w-inline-block">
              <div className="blog_collection_image-wrapper">
                <img
                  sizes="(max-width: 6016px) 100vw, 6016px"
                  srcSet="images/hand-with-three-books.jpg 500w, images/hand-with-three-books.jpg 800w, images/hand-with-three-books.jpg 1080w, images/hand-with-three-books.jpg 1600w, images/hand-with-three-books.jpg 2000w, images/hand-with-three-books.jpg 2600w, images/hand-with-three-books.jpg 3200w, images/hand-with-three-books.jpg 6016w"
                  alt=""
                  src="images/hand-with-three-books.jpg"
                  loading="lazy"
                  className="blog_collection_image"
                />
              </div>
            </Link>
            <div className="w-layout-vflex blog_collection_content is-black">
              <div className="w-layout-vflex blog_collection_header">
                <Link to="/dashboard/lost/books" className="blog_collection_title-link w-inline-block">
                  <h3
                    fs-cmsfilter-field="Name"
                    className="post-heading is-black"
                  >
                    Books
                  </h3>
                </Link>
              </div>
              <div className="text-size-small text-color-grey">
                This is some text inside of a div block.
              </div>
              <Link
                data-w-id="a22fbf3a-6b1e-0f85-927d-2d95f0359eb0"
                to="/dashboard/lost/books"
                className="button-icon w-inline-block"
              >
                <div className="nav_btn_text is-black">View Post</div>
                <div className="icon-1x1-small-2 is-black w-embed">
                  <svg
                    aria-hidden="true"
                    fill="currentColor"
                    role="img"
                    viewBox="0 0 20 21"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Arrow Right</title>
                    <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="lost-form-left-split">
      <div className="dash-board-header-div">
        <h2 className="heading-style-h4">Hi SHALLI,</h2>
        <div className="w-layout-vflex lost-item-header-wrapper">
          <h1 className="dashboard-h1">Create a lost post</h1>
        </div>
      </div>
      <div className="found-form-wrapper">
        <div className="contact-form-block w-form">
          <form
            id="wf-form-found-post-form"
            name="wf-form-found-post-form"
            data-name="found post form"
            method="get"
            className="contact_form-2"
            data-wf-page-id="683a0998ecb417061847e443"
            data-wf-element-id="8ab3881a-1934-c09f-65c6-a8b52d0cb803"
          >
            <div className="w-layout-vflex">
              <label htmlFor="Item-name" className="field-label-2">
                Item Name
              </label>
              <input
                className="text-field w-input"
                maxLength={256}
                name="Item-name"
                data-name="Item name"
                placeholder="Bottle of water"
                type="text"
                id="Item-name"
                required=""
              />
            </div>
            <div className="w-layout-vflex">
              <label htmlFor="description" className="field-label-2">
                Description
              </label>
              <input
                className="text-field w-input"
                maxLength={256}
                name="description"
                data-name="description"
                placeholder="brown & round bottle"
                type="text"
                id="description"
                required=""
              />
            </div>
            <div className="w-layout-vflex">
              <label htmlFor="Date-lost" className="field-label-2">
                Date lost
              </label>
              <input
                className="text-field w-input"
                maxLength={256}
                name="Date-lost"
                data-name="Date lost"
                placeholder="17 december 2024"
                type="text"
                id="Date-lost"
                required=""
              />
            </div>
            <div className="w-layout-vflex">
              <label htmlFor="Location" className="field-label-2">
                Location
              </label>
              <input
                className="text-field w-input"
                maxLength={256}
                name="Location"
                data-name="Location"
                placeholder="Umt greens"
                type="text"
                id="Location"
                required=""
              />
            </div>
            <div className="w-layout-vflex">
              <label htmlFor="contact-info" className="field-label-2">
                Contact Info
              </label>
              <input
                className="text-field w-input"
                maxLength={256}
                name="contact-info"
                data-name="contact info"
                placeholder="+92 XXXXXXXXXX"
                type="text"
                id="contact-info"
                required=""
              />
            </div>
            <div className="w-layout-vflex">
              <label htmlFor="image-3" className="field-label-2">
                Image
              </label>
              <input
                className="text-field w-input"
                maxLength={256}
                name="image-3"
                data-name="Image 3"
                placeholder=""
                type="text"
                id="image-3"
                required=""
              />
            </div>
            <input
              type="submit"
              data-wait="Please wait..."
              className="button-primary w-button"
              defaultValue="Create Post"
            />
          </form>
          <div className="w-form-done">
            <div>Thank you! Your submission has been received!</div>
          </div>
          <div className="w-form-fail">
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
        </div>
      </div>
    </div>
    <div className="found-posts-left-split">
      <div className="dash-board-header-div">
        <h2 className="heading-style-h4">Hi SHALLI,</h2>
        <div className="w-layout-vflex lost-item-header-wrapper">
          <h1 className="dashboard-h1">My Found Items</h1>
          <Link to="/dashboard/create-lost" className="button is-brand w-button">
            Create Post
          </Link>
        </div>
      </div>
      <div className="dashboard-post-wrapper is-black">
        <div className="w-layout-vflex item-wrapper-grid">
          <div className="blog_collection_item is-black">
            <Link to="/dashboard/found/books" className="blog_collection_image-link w-inline-block">
              <div className="blog_collection_image-wrapper">
                <img
                  sizes="(max-width: 6016px) 100vw, 6016px"
                  srcSet="images/hand-with-three-books.jpg 500w, images/hand-with-three-books.jpg 800w, images/hand-with-three-books.jpg 1080w, images/hand-with-three-books.jpg 1600w, images/hand-with-three-books.jpg 2000w, images/hand-with-three-books.jpg 2600w, images/hand-with-three-books.jpg 3200w, images/hand-with-three-books.jpg 6016w"
                  alt=""
                  src="images/hand-with-three-books.jpg"
                  loading="lazy"
                  className="blog_collection_image"
                />
              </div>
            </Link>
            <div className="w-layout-vflex blog_collection_content is-black">
              <div className="w-layout-vflex blog_collection_header">
                <Link to="/dashboard/found/books" className="blog_collection_title-link w-inline-block">
                  <h3
                    fs-cmsfilter-field="Name"
                    className="post-heading is-black"
                  >
                    Books
                  </h3>
                </Link>
              </div>
              <div className="text-size-small text-color-grey">
                This is some text inside of a div block.
              </div>
              <Link
                data-w-id="407b02be-670f-e213-6782-2e6aa6825a1c"
                to="/dashboard/found/books"
                className="button-icon w-inline-block"
              >
                <div className="nav_btn_text is-black">View Post</div>
                <div className="icon-1x1-small-2 is-black w-embed">
                  <svg
                    aria-hidden="true"
                    fill="currentColor"
                    role="img"
                    viewBox="0 0 20 21"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Arrow Right</title>
                    <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
          <div className="blog_collection_item is-black">
            <Link to="/dashboard/found/charger" className="blog_collection_image-link w-inline-block">
              <div className="blog_collection_image-wrapper">
                <img
                  sizes="(max-width: 5026px) 100vw, 5026px"
                  srcSet="images/white-cell-phone-charger-white-isolated-background-with-usb-cabe.jpg 500w, images/white-cell-phone-charger-white-isolated-background-with-usb-cabe.jpg 800w, images/white-cell-phone-charger-white-isolated-background-with-usb-cabe.jpg 1080w, images/white-cell-phone-charger-white-isolated-background-with-usb-cabe.jpg 1600w, images/white-cell-phone-charger-white-isolated-background-with-usb-cabe.jpg 2000w, images/white-cell-phone-charger-white-isolated-background-with-usb-cabe.jpg 2600w, images/white-cell-phone-charger-white-isolated-background-with-usb-cabe.jpg 3200w, images/white-cell-phone-charger-white-isolated-background-with-usb-cabe.jpg 5026w"
                  alt=""
                  src="images/white-cell-phone-charger-white-isolated-background-with-usb-cabe.jpg"
                  loading="lazy"
                  className="blog_collection_image"
                />
              </div>
            </Link>
            <div className="w-layout-vflex blog_collection_content is-black">
              <div className="w-layout-vflex blog_collection_header">
                <Link to="/dashboard/found/charger" className="blog_collection_title-link w-inline-block">
                  <h3
                    fs-cmsfilter-field="Name"
                    className="post-heading is-black"
                  >
                    Charger
                  </h3>
                </Link>
              </div>
              <div className="text-size-small text-color-grey">
                This is some text inside of a div block.
              </div>
              <Link
                data-w-id="407b02be-670f-e213-6782-2e6aa6825a2b"
                to="/dashboard/found/charger"
                className="button-icon w-inline-block"
              >
                <div className="nav_btn_text is-black">View Post</div>
                <div className="icon-1x1-small-2 is-black w-embed">
                  <svg
                    aria-hidden="true"
                    fill="currentColor"
                    role="img"
                    viewBox="0 0 20 21"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Arrow Right</title>
                    <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-layout-vflex item-wrapper-grid">
          <div className="blog_collection_item is-black">
            <Link to="/dashboard/found/laptop" className="blog_collection_image-link w-inline-block">
              <div className="blog_collection_image-wrapper">
                <img
                  sizes="(max-width: 5472px) 100vw, 5472px"
                  srcSet="images/halfclosed-laptop-wooden-table-screen-glows-with-colors.jpg 500w, images/halfclosed-laptop-wooden-table-screen-glows-with-colors.jpg 800w, images/halfclosed-laptop-wooden-table-screen-glows-with-colors.jpg 1080w, images/halfclosed-laptop-wooden-table-screen-glows-with-colors.jpg 1600w, images/halfclosed-laptop-wooden-table-screen-glows-with-colors.jpg 2000w, images/halfclosed-laptop-wooden-table-screen-glows-with-colors.jpg 2600w, images/halfclosed-laptop-wooden-table-screen-glows-with-colors.jpg 3200w, images/halfclosed-laptop-wooden-table-screen-glows-with-colors.jpg 5472w"
                  alt=""
                  src="images/halfclosed-laptop-wooden-table-screen-glows-with-colors.jpg"
                  loading="lazy"
                  className="blog_collection_image"
                />
              </div>
            </Link>
            <div className="w-layout-vflex blog_collection_content is-black">
              <div className="w-layout-vflex blog_collection_header">
                <Link to="/dashboard/found/laptop" className="blog_collection_title-link w-inline-block">
                  <h3
                    fs-cmsfilter-field="Name"
                    className="post-heading is-black"
                  >
                    Laptop
                  </h3>
                </Link>
              </div>
              <div className="text-size-small text-color-grey">
                This is some text inside of a div block.
              </div>
              <Link
                data-w-id="407b02be-670f-e213-6782-2e6aa6825a3b"
                to="/dashboard/found/laptop"
                className="button-icon w-inline-block"
              >
                <div className="nav_btn_text is-black">View Post</div>
                <div className="icon-1x1-small-2 is-black w-embed">
                  <svg
                    aria-hidden="true"
                    fill="currentColor"
                    role="img"
                    viewBox="0 0 20 21"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Arrow Right</title>
                    <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="found-form-left-split">
      <div className="dash-board-header-div">
        <h2 className="heading-style-h4">Hi SHALLI,</h2>
        <div className="w-layout-vflex lost-item-header-wrapper">
          <h1 className="dashboard-h1">Create a found post</h1>
        </div>
      </div>
      <div className="found-form-wrapper">
        <div className="contact-form-block w-form">
          <form
            id="wf-form-found-post-form"
            name="wf-form-found-post-form"
            data-name="found post form"
            method="get"
            className="contact_form-2"
            data-wf-page-id="683a0998ecb417061847e443"
            data-wf-element-id="c455e7e2-b7c0-98c5-5f34-8108e52e2e47"
          >
            <div className="w-layout-vflex">
              <label htmlFor="Item-name-2" className="field-label-2">
                Item Name
              </label>
              <input
                className="text-field w-input"
                maxLength={256}
                name="Item-name-2"
                data-name="Item Name 2"
                placeholder="Bottle of water"
                type="text"
                id="Item-name-2"
                required=""
              />
            </div>
            <div className="w-layout-vflex">
              <label htmlFor="description-2" className="field-label-2">
                Description
              </label>
              <input
                className="text-field w-input"
                maxLength={256}
                name="description-2"
                data-name="Description 2"
                placeholder="brown & round bottle"
                type="text"
                id="description-2"
                required=""
              />
            </div>
            <div className="w-layout-vflex">
              <label htmlFor="Location-found-2" className="field-label-2">
                Location Found
              </label>
              <input
                className="text-field w-input"
                maxLength={256}
                name="Location-found-2"
                data-name="Location Found 2"
                placeholder="Umt greens"
                type="text"
                id="Location-found-2"
                required=""
              />
            </div>
            <div className="w-layout-vflex">
              <label htmlFor="image-2" className="field-label-2">
                Image
              </label>
              <input
                className="text-field w-input"
                maxLength={256}
                name="image-2"
                data-name="Image 2"
                placeholder=""
                type="text"
                id="image-2"
                required=""
              />
            </div>
            <input
              type="submit"
              data-wait="Please wait..."
              className="button-primary w-button"
              defaultValue="Create Post"
            />
          </form>
          <div className="w-form-done">
            <div>Thank you! Your submission has been received!</div>
          </div>
          <div className="w-form-fail">
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
        </div>
      </div>
    </div>
    <div className="claim-request-left-split">
      <div className="dash-board-header-div">
        <h2 className="heading-style-h4">Hi SHALLI,</h2>
        <div className="w-layout-vflex lost-item-header-wrapper">
          <h1 className="dashboard-h1">My Claim Requests</h1>
        </div>
      </div>
      <div className="dashboard-post-wrapper is-black">
        <div className="clain-request-item-wrapper">
          <h3 fs-cmsfilter-field="Name" className="post-heading is-black">
            Books
          </h3>
          <div className="status-wrapper">
            <div>Status: </div>
            <div>Pending</div>
          </div>
        </div>
        <div className="clain-request-item-wrapper">
          <h3 fs-cmsfilter-field="Name" className="post-heading is-black">
            Laptop
          </h3>
          <div className="status-wrapper">
            <div>Status: </div>
            <div>Pending</div>
          </div>
        </div>
        <div className="clain-request-item-wrapper">
          <h3 fs-cmsfilter-field="Name" className="post-heading is-black">
            Wallet
          </h3>
          <div className="status-wrapper success">
            <div>Status: </div>
            <div>Accepted</div>
          </div>
        </div>
      </div>
    </div>
    <div className="message-left-split">
      <div className="dash-board-header-div">
        <h2 className="heading-style-h4">Hi SHALLI,</h2>
        <div className="w-layout-vflex lost-item-header-wrapper">
          <h1 className="dashboard-h1">Messages</h1>
        </div>
      </div>
      <div className="message-content-wrapper">
        <div className="chats-wrapper">
          <div className="chat-profile-wrapper">
            <Link to="/dashboard/messages/anshaal" className="chat-profiles current w-inline-block">
              <div>Anshaal Ahmad</div>
            </Link>
            <Link to="/dashboard/messages/qasim" className="chat-profiles w-inline-block">
              <div>Qasim Shahbaz</div>
            </Link>
            <Link to="/dashboard/messages/sameer" className="chat-profiles w-inline-block">
              <div>Sameer Ahmad</div>
            </Link>
            <Link to="/dashboard/messages/shahryar" className="chat-profiles w-inline-block">
              <div>Shahryar Akhtar</div>
            </Link>
          </div>
          <div className="chat-display-wrapper">
            <div className="chat-recieve-wrapper">
              <div>Hello, apko mera phone mila hei?</div>
            </div>
            <div className="chat-send-wrapper">
              <div>Yes, meray pass hei.</div>
            </div>
          </div>
        </div>
        <div className="chat-input-wrapper">
          <div className="form-block w-form">
            <form
              id="email-form"
              name="email-form"
              data-name="Email Form"
              method="get"
              data-wf-page-id="683a0998ecb417061847e443"
              data-wf-element-id="8d1bafb1-da3f-6737-4515-5b88f1f96495"
            >
              <input
                className="chat-input text-field w-input"
                maxLength={256}
                name="email"
                data-name="Email"
                placeholder=""
                type="email"
                id="email"
                required=""
              />
            </form>
            <div className="w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
          <Link to="#" className="button is-brand is-chat w-button">
            Send
          </Link>
        </div>
      </div>
    </div>
    <div className="main-dashboard-right-split">
      <div className="search-and-notfication-div">
        <div className="search-div">
          <form action="/search" className="search w-form">
            <div className="search-icon-div">
              <img
                loading="lazy"
                src="images/magnifying-glass-1.png"
                alt=""
                className="search-icon"
              />
            </div>
            <input
              className="search-input w-input"
              maxLength={256}
              name="query"
              placeholder="Search lost items"
              type="search"
              id="search"
              required=""
            />
            <input
              type="submit"
              className="search-button w-button"
              defaultValue="Search"
            />
          </form>
        </div>
        <div
          data-w-id="477188be-2ddb-27c5-f256-a56143361152"
          className="notifications-div"
        >
          <div className="main-circle-notif-bg" />
          <div className="notifications-ping">
            <div className="notification-amount-text">2</div>
          </div>
        </div>
      </div>
      <div className="dashboard-post-wrapper">
        <div className="blog_collection_item">
          <a href="#" className="blog_collection_image-link w-inline-block">
            <div className="blog_collection_image-wrapper">
              <img
                sizes="(max-width: 6720px) 100vw, 6720px"
                srcSet="images/business-financial-concept-with-dollars-wallet-grey-surface-flat-lay.jpg 500w, images/business-financial-concept-with-dollars-wallet-grey-surface-flat-lay.jpg 800w, images/business-financial-concept-with-dollars-wallet-grey-surface-flat-lay.jpg 1080w, images/business-financial-concept-with-dollars-wallet-grey-surface-flat-lay.jpg 1600w, images/business-financial-concept-with-dollars-wallet-grey-surface-flat-lay.jpg 2000w, images/business-financial-concept-with-dollars-wallet-grey-surface-flat-lay.jpg 2600w, images/business-financial-concept-with-dollars-wallet-grey-surface-flat-lay.jpg 3200w, images/business-financial-concept-with-dollars-wallet-grey-surface-flat-lay.jpg 6720w"
                alt=""
                src="images/business-financial-concept-with-dollars-wallet-grey-surface-flat-lay.jpg"
                loading="lazy"
                className="blog_collection_image"
              />
            </div>
          </a>
          <div className="w-layout-vflex blog_collection_content">
            <div className="w-layout-vflex blog_collection_header">
              <a href="#" className="blog_collection_title-link w-inline-block">
                <h3 fs-cmsfilter-field="Name" className="post-heading">
                  Wallet
                </h3>
              </a>
            </div>
            <div className="text-size-regular text-color-light">
              This is some text inside of a div block.
            </div>
            <a
              data-w-id="1c798aa9-c1d4-7f8a-c83c-7a81f0c86c14"
              href="#"
              className="button-icon w-inline-block"
            >
              <div className="nav_btn_text">View Post</div>
              <div className="icon-1x1-small-2 w-embed">
                <svg
                  aria-hidden="true"
                  fill="currentColor"
                  role="img"
                  viewBox="0 0 20 21"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Arrow Right</title>
                  <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
                </svg>
              </div>
            </a>
          </div>
        </div>
        <div className="blog_collection_item">
          <a href="#" className="blog_collection_image-link w-inline-block">
            <div className="blog_collection_image-wrapper">
              <img
                sizes="(max-width: 6016px) 100vw, 6016px"
                srcSet="images/hand-with-three-books.jpg 500w, images/hand-with-three-books.jpg 800w, images/hand-with-three-books.jpg 1080w, images/hand-with-three-books.jpg 1600w, images/hand-with-three-books.jpg 2000w, images/hand-with-three-books.jpg 2600w, images/hand-with-three-books.jpg 3200w, images/hand-with-three-books.jpg 6016w"
                alt=""
                src="images/hand-with-three-books.jpg"
                loading="lazy"
                className="blog_collection_image"
              />
            </div>
          </a>
          <div className="w-layout-vflex blog_collection_content">
            <div className="w-layout-vflex blog_collection_header">
              <a href="#" className="blog_collection_title-link w-inline-block">
                <h3 fs-cmsfilter-field="Name" className="post-heading">
                  Bottle
                </h3>
              </a>
            </div>
            <div className="text-size-regular text-color-light">
              This is some text inside of a div block.
            </div>
            <a
              data-w-id="454e5f02-1ed3-a5c2-cd77-c7fbf303cd2c"
              href="#"
              className="button-icon w-inline-block"
            >
              <div className="nav_btn_text">View Post</div>
              <div className="icon-1x1-small-2 w-embed">
                <svg
                  aria-hidden="true"
                  fill="currentColor"
                  role="img"
                  viewBox="0 0 20 21"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Arrow Right</title>
                  <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
                </svg>
              </div>
            </a>
          </div>
        </div>
        <div className="blog_collection_item">
          <a href="#" className="blog_collection_image-link w-inline-block">
            <div className="blog_collection_image-wrapper">
              <img
                sizes="(max-width: 5472px) 100vw, 5472px"
                srcSet="images/halfclosed-laptop-wooden-table-screen-glows-with-colors.jpg 500w, images/halfclosed-laptop-wooden-table-screen-glows-with-colors.jpg 800w, images/halfclosed-laptop-wooden-table-screen-glows-with-colors.jpg 1080w, images/halfclosed-laptop-wooden-table-screen-glows-with-colors.jpg 1600w, images/halfclosed-laptop-wooden-table-screen-glows-with-colors.jpg 2000w, images/halfclosed-laptop-wooden-table-screen-glows-with-colors.jpg 2600w, images/halfclosed-laptop-wooden-table-screen-glows-with-colors.jpg 3200w, images/halfclosed-laptop-wooden-table-screen-glows-with-colors.jpg 5472w"
                alt=""
                src="images/halfclosed-laptop-wooden-table-screen-glows-with-colors.jpg"
                loading="lazy"
                className="blog_collection_image"
              />
            </div>
          </a>
          <div className="w-layout-vflex blog_collection_content">
            <div className="w-layout-vflex blog_collection_header">
              <a href="#" className="blog_collection_title-link w-inline-block">
                <h3 fs-cmsfilter-field="Name" className="post-heading">
                  Laptop
                </h3>
              </a>
            </div>
            <div className="text-size-regular text-color-light">
              This is some text inside of a div block.
            </div>
            <a
              data-w-id="da7a3912-0a45-bc8e-62fb-1fa2c818468c"
              href="#"
              className="button-icon w-inline-block"
            >
              <div className="nav_btn_text">View Post</div>
              <div className="icon-1x1-small-2 w-embed">
                <svg
                  aria-hidden="true"
                  fill="currentColor"
                  role="img"
                  viewBox="0 0 20 21"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Arrow Right</title>
                  <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}
