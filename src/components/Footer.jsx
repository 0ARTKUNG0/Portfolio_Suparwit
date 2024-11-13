import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="top-footer">
        <h1>Suparwit<span>.</span></h1>
      </div>

      <div className="middle-footer">
        <ul className="footer-menu">
          <li>
            <a href="#home" className="nav-link">Home</a>
          </li>
          <li>
            <a href="#about" className="nav-link">About</a>
          </li>
          <li>
            <a href="#projects" className="nav-link">Projects</a>
          </li>
          <li>
            <a href="#contact" className="nav-link">Contact</a>
          </li>
        </ul>
      </div>

      <div className="social_icons">
        <a href="https://www.instagram.com/0suparwit0/" target="_blank" rel="noopener noreferrer">
          <i className="uil uil-instagram-alt"></i>
        </a>
        <a href="https://www.facebook.com/Supparwit" target="_blank" rel="noopener noreferrer">
          <i className="uil uil-facebook"></i>
        </a>
        <a href="https://github.com/0ARTKUNG0" target="_blank" rel="noopener noreferrer">
          <i className="uil uil-github-alt"></i>
        </a>
      </div>

      <div className="bottom-footer">
        <p>
          Copyright © <a href="https://www.yoursite.com">Suparwit</a> - All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
