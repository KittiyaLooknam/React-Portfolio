import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import '../style.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="icons">
        <div className="icon">
          <div className='icon1'>
            <a href="https://github.com/KittiyaLooknam?tab=repositories" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithubSquare} className="mr-2" size="2x" />
            </a>
          </div>
          <br />
          <div className='icon2'>
            <a href="https://www.linkedin.com/in/kittiya-goldberg-59053496/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="mr-2" size="2x" />
            </a>
          </div>
          <br />
          <div className='icon3'>
            <a href="mailto:kittiya.goldberg1@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" size="2x" />
            </a>
          </div>
        </div>
      </div>
      <div className="container-ft">
        <div className="container-fluid text-center">
          <span>&#169; {currentYear} ❤️ Kittiya All rights reserved. </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
