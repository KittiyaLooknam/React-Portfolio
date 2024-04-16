import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import '../style.css';

function Footer() {
  return (
    // Footer container

    <div className='formcontainer' id="formcontainer1">
      {/* Footer title */}
      {/* Links */}
      <div className="icons" id="icons" >
        <div className="icon" id="iconimg">
          <div className='icon1' id="icon1">
            <a href="https://github.com/KittiyaLooknam?tab=repositories" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithubSquare} className="mr-2" size="2x" />
              {/* GitHub */}
            </a>
          </div>
          <br></br>
          <div className='icon2' id="icon2">
            <a href="https://www.linkedin.com/in/kittiya-goldberg-59053496/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="mr-2" size="2x" />
              {/* LinkedIn */}
            </a>
          </div>
          <br></br>
          <div className='icon3' id="icon3">
            <a href="mailto:kittiya.goldberg1@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" size="2x" />
              {/* Email */}
            </a>
          </div>
        </div>
        <div>
        </div>
      </div>
      {/* Footer */}
      <footer className="footer pt-1 mt-3" style={{ color: "white", borderTop: "1px solid white" }}>
        <div className="container-ft">
          <div className="container-fluid text-center">
            <span>&#169; Copyright 2024 ❤️ KITTIYA</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
