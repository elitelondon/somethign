import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './gallery.css'

const Gallery = (props) => {
  return (
    <div className="gallery-container">
      <Helmet>
        <title>gallery - Portfolio Page1</title>
        <meta property="og:title" content="gallery - Portfolio Page1" />
      </Helmet>
      <div data-role="Header" className="gallery-navbar-container">
        <div className="gallery-navbar">
          <Link to="/" className="gallery-heading card-Heading">
            Westminster RP
          </Link>
          <div className="gallery-links-container">
            <a
              href="https://discord.gg/R57nXjWv"
              target="_blank"
              rel="noreferrer noopener"
              className="gallery-link navbar-Link"
            >
              Discord
            </a>
            <span className="gallery-link1">Gallery</span>
            <Link to="/ourstaff" className="gallery-link2 navbar-Link">
              Our Staff
            </Link>
            <a
              href="mailto:westminsterrp@lmpstudios.pw?subject=Email sent from website"
              className="gallery-link3 navbar-Link"
            >
              Contact
            </a>
          </div>
          <div data-type="BurgerMenu" className="gallery-burger-menu">
            <svg viewBox="0 0 1024 1024" className="gallery-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
          <div data-type="MobileMenu" className="gallery-mobile-menu">
            <div className="gallery-container1">
              <span className="card-Heading gallery-heading1">Logo</span>
              <div data-type="CloseMobileMenu" className="gallery-close-menu">
                <svg viewBox="0 0 1024 1024" className="gallery-icon2">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="gallery-links-container1">
              <span className="gallery-link4 navbar-Link">About</span>
              <span className="gallery-link5 navbar-Link">Experience</span>
              <span className="gallery-link6 navbar-Link">Portofolio</span>
              <span className="navbar-Link">Contact</span>
            </div>
          </div>
        </div>
      </div>
      <div className="gallery-container2">
        <div className="gallery-hero-text-container">
          <div className="gallery-cta-btn-container"></div>
          <h1 className="gallery-heading2 section-Heading">Gallery</h1>
          <span className="gallery-text section-Text">
            Some Pics of our game.
          </span>
        </div>
        <div className="gallery-hero">
          <div className="gallery-container3">
            <div className="gallery-container4">
              <div className="gallery-container5"></div>
            </div>
          </div>
          <div className="gallery-container6">
            <div className="gallery-container7">
              <div className="gallery-container8">
                <img
                  alt="image"
                  src="https://cdn.discordapp.com/avatars/735842569531162624/0811b7eceac7bd0b448f0a4b7edb66d5.png?size=2048"
                  className="gallery-image"
                />
                <img
                  alt="image"
                  src="https://cdn.discordapp.com/avatars/735842569531162624/0811b7eceac7bd0b448f0a4b7edb66d5.png?size=2048"
                  className="gallery-image1"
                />
                <img
                  alt="image"
                  src="https://cdn.discordapp.com/avatars/735842569531162624/0811b7eceac7bd0b448f0a4b7edb66d5.png?size=2048"
                  className="gallery-image2"
                />
               
              </div>
            
          <img
            alt="image"
            src="https://cdn.discordapp.com/avatars/735842569531162624/0811b7eceac7bd0b448f0a4b7edb66d5.png?size=2048"
            className="gallery-image4"
          />
          <img
            alt="image"
            src="https://cdn.discordapp.com/avatars/735842569531162624/0811b7eceac7bd0b448f0a4b7edb66d5.png?size=2048"
            className="gallery-image5"
          />
          <img
            alt="image"
            src="https://cdn.discordapp.com/avatars/735842569531162624/0811b7eceac7bd0b448f0a4b7edb66d5.png?size=2048"
            className="gallery-image6"
          />
       
        </div>
      </div>

  )
}

export default Gallery
