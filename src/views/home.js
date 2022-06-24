import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>WMRP</title>
        <meta property="og:title" content="WMRP" />
      </Helmet>
      <div data-role="Header" className="home-navbar-container">
        <div className="home-navbar">
          <span className="home-heading card-Heading">Westminster RP</span>
          <div className="home-links-container">
            <a
              href="https://discord.gg/R57nXjWv"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link navbar-Link"
            >
              Discord
            </a>
            <Link to="/gallery" className="home-link1">
              Gallery
            </Link>
            <Link to="/ourstaff" className="home-link2 navbar-Link">
              Our Staff
            </Link>
            <a
              href="mailto:westminsterrp@lmpstudios.pw?subject=Email sent from WMPR website"
              className="home-link3 navbar-Link"
            >
              Contact
            </a>
          </div>
          <div data-type="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
          <div data-type="MobileMenu" className="home-mobile-menu">
            <div className="home-container1">
              <span className="card-Heading home-heading1">Logo</span>
              <div data-type="CloseMobileMenu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon2">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="home-links-container1">
              <span className="home-link4 navbar-Link">About</span>
              <span className="home-link5 navbar-Link">Experience</span>
              <span className="home-link6 navbar-Link">Portofolio</span>
              <span className="navbar-Link">Contact</span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-container2">
        <div className="home-hero">
          <h1 className="home-text">Westminster Roleplay</h1>
          <img
            alt="image"
            src="https://cdn.discordapp.com/attachments/873547662580916234/986296252398436454/3F74C4A6-7AF3-4C47-85BD-E79B78A7AC7B.jpg"
            className="home-image"
          />
        </div>
        <div className="home-hero1">
          <div className="home-hero-text-container">
            <h1 className="home-heading2 section-Heading">About Us</h1>
            <div className="home-cta-btn-container"></div>
            <span className="home-text1 section-Text">
              <span>Hhhhhg</span>
            </span>
          </div>
          <a
            href="https://discord.gg/h3qvUvfH23"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link8 button"
          >
            <span className="home-text3">Join Us Today</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
