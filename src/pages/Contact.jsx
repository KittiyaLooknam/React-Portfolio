import React, { useState } from 'react';
import FancyText from '@carefully-coded/react-text-gradient';
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
    

      <div className='contactcontainer' id="contactcontainer">
        <FancyText gradient={{ from: 'white', to: 'orange', type: 'linear' }} style={{ fontSize: '25px' }}>
          Contact Me
        </FancyText> <br></br><br></br>
        <form onSubmit={handleSubmit}>
          <div className="col-md-12 text-left">
            <label htmlFor="subject"style={{ color: 'white' }}>Subject:</label><br></br>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div className="col-md-12 text-left"><br></br>
          <label htmlFor="message" style={{ color: 'white' }}>Message:</label> <br></br>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              cols={50}
              required
            />
          </div><br></br>
          <button className="btn btn-primary bg-info rounded border-info ml-1 mb-3" type="submit" id="email-button">Send Email</button>
        </form>
        <div className='formcontainer' id="formcontainer1">
      </div>
      </div>
  
  );
}