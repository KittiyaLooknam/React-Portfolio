import React from 'react';
import '../style.css'; // Import the CSS file
import backgroundImage from '../assets/photo.png'; // Import the image file
import FancyText from '@carefully-coded/react-text-gradient';

export default function Home() {
  return (
    <div className="section" id="home">
      <div className="container" style={{ height: '100%', border: '1px solid rgba(0, 0, 0, 0.3)' }}>
        <div className="row">
          <div className="col-md-6" id="imgwelcome" style={{ height: '100%', border: '1px solid rgba(0, 0, 0, 0.3)' }}>
            <img src={backgroundImage} alt="Aside" style={{ width: '70%', height: '70%' }} />
          </div>
          <div className="col-md-6 text-left text-container" id="textcontainer1">
            <FancyText
              gradient={{ from: '#F858E0', to: '#77156C', type: 'linear' }}
              animateTo={{ from: '#6DEDD0', to: '#7AE23A' }}
              animateDuration={1500}
              style={{ fontSize: '50px' }}
            >
              Welcome to my Portfolio
            </FancyText>
            <p className="name" id="name">KITTIYA GOLDBERG</p>
            <FancyText
              gradient={{ from: '#F858E0', to: '#77156C', type: 'linear' }}
              animateTo={{ from: '#6DEDD0', to: '#7AE23A' }}
              animateDuration={1500}
              style={{ fontSize: '20px' }}
            >
              Full Stack Developer
            </FancyText>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="text-container">
          <FancyText
            gradient={{ from: 'white', to: 'white', type: 'linear' }}
            style={{ fontSize: '45px' }}
          >
            About me
          </FancyText>
          <p className="indent1">
            My name is <b> Kittiya Goldberg</b>  I hold a degree in Fisheries Science, earned in 2012, and have six years of professional experience in Thailand before relocating to the United States. My early career focused on workforce management, but in 2015, I transitioned to web development. After taking time off to raise three children, I recently completed the George Washington University Coding Bootcamp program in Full Stack Web Development.
          </p>
          <p className="indent1">
            During my training, I developed a broad skill set, including proficiency in JavaScript ES6+, HTML5, CSS3, React, Node.js, Handlebars, Express, Bootstrap, SQL, MySQL, NoSQL, MongoDB, Mongoose, jQuery, Git/GitHub, Visual Studio Code, Docker, Postman, RESTful APIs, Heroku, Microsoft Office, and Slack. I have successfully designed and implemented a variety of websites and applications.
          </p>
          <p className="indent1">
          I am now seeking a web developer position where I can leverage my skills and experience. I am dedicated to continuous learning and professional growth, and I thrive on new challenges. My work style is characterized by diligence, adaptability, and a collaborative spirit. I am a team player who consistently strives to set a high standard and inspire others.
          </p>
        </div>
      </div>
    </div>
  );
}
