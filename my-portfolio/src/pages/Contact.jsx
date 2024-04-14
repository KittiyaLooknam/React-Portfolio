import React, { useState } from 'react';
import FancyText from '@carefully-coded/react-text-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import '../style.css';

export default function Contact() {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!subject || !message) {
      alert("Please fill out both subject and message fields.");
      return;
    }

    const recipientEmail = 'mailto:kittiya.goldberg1@gmail.com';
    const mailtoLink = `${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className='formcontainer' id="formcontainer1">
      <div className='contactcontainer' id="contactcontainer">
        <FancyText gradient={{ from: 'white', to: 'orange', type: 'linear' }}>
          Contact Me
        </FancyText> <br></br><br></br>
        <form onSubmit={handleSubmit}>
          <div className="col-md-12 text-left">
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div className="col-md-12 text-left">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              cols={50}
              required
            />
          </div>
          <button className="btn btn-primary bg-info rounded border-info ml-1 mb-3" type="submit" id="email-button">Send Email</button>
        </form>
      </div>
      {/* Links */}
      <div className="icon" id="iconimg" >
        <div className='icon1' id="icon1">
          <a href="https://github.com/KittiyaLooknam?tab=repositories" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithubSquare} className="mr-2" size="2x" />
          </a>
        </div>
        <br></br>
        <div className='icon2' id="icon2">
          <a href="https://www.linkedin.com/in/kittiya-goldberg-59053496/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="mr-2" size="2x" />
          </a> </div>
        <br></br>
        <div className='icon3' id="icon3">
          <a href="mailto:kittiya.goldberg1@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" size="2x" />
          </a>
        </div>
      </div>
    </div>

  );
}