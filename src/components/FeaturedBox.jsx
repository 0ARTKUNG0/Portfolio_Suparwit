import React from 'react'
import actor from '../assets/suparwit.jpg'
import information from "../assets/download/information.pdf";

function FeaturedBox() {

  return (
    <section className='featured-box' id='home'>
      <div className="featured-text">
        <div className="featured-text-card">
          <span>Suparwit Sittisungoen</span>
        </div>
        <div className="featured-name">
          I'm <span className='typedText'></span>
        </div>
        <div className="featured-text-info">
          <p>
          I am a dedicated Software Engineer with experience in developing web applications and solving technical challenges. I’m passionate about creating innovative solutions that improve user experiences.
          </p>
        </div>
        <div className="featured-text-btn">
          
        <div className="nav-button">
        <a href={information} target="_blank" rel="noopener noreferrer">
          <button className="btn">
            Download CV <i className="uil uil-download-alt"></i>
          </button>
        </a>
      </div>
        </div>
        <div className="social_icons">
          <div className="icon">
            <a href="https://www.instagram.com/0suparwit0/">
              <i className='uil uil-instagram-alt'></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://www.facebook.com/Supparwit">
              <i className='uil uil-facebook'></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://github.com/0ARTKUNG0">
              <i className='uil uil-github-alt'></i>
            </a>
          </div>
        </div>
      </div>
      <div className="featured-image">
        <div className="image">
          <img src={actor} alt="" />
        </div>
      </div>
      <div className="scroll-icon-box">
        <a href="#about" className='scroll-btn'>
          <i className='uil uil-mouse-alt'></i>
          <p>Scroll Down</p>
        </a>
      </div>
    </section>
  )
}

export default FeaturedBox
