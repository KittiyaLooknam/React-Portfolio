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
            My name is <b> Kittiya Goldberg</b> I earned my degree in Fisheries Science in 2012 and worked in Thailand for 2 years before moving to the USA as an Au Pair in 2014. Since being in the USA, I had the pleasure of working in child care until 2023. I've always had a passion for fashion and design! After watching a few web development tutorials on YouTube, I became interested in learning. I've recently completed the George Washington University coding bootcamp program in Full Stack Web Development. I've designed a wide range of websites and applications using JavaScript ES6+, HTML5, CSS3, React, Node, Handlebars, Express, Bootstrap, SQL, MySQL, NoSQL, MongoDB, Mongoose, jQuery, Git/GitHub, Visual Studio Code, Docker, Postman, RESTful APIs, Heroku, Microsoft Office, and Slack.
          </p>
          <p className="indent1">
            My goal now is to land a job as a web developer. I embrace the challenge of learning new things and apply myself when new opportunities to grow arise. As a person, I'm diligent and always looking for ways to improve my skills and knowledge. I adapt quickly and work well in both group and individual settings. I consider myself a team player that will give extra effort to set an example for others to follow.
          </p>
        </div>
      </div>
    </div>
  );
}
