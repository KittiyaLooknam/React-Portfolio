import React from 'react';
import FancyText from '@carefully-coded/react-text-gradient';
import '../style.css';

export default function About() {
  return (
    <div className="section" id="about">
      <div className="header"></div>
      <div className="container">
        <div className="text-container">
          <FancyText
            gradient={{ from: '#F858E0', to: '#77156C', type: 'linear' }}
            style={{ fontSize: '45px' }}
          >
            <br />
            About me
          </FancyText>
          <p style={{ fontSize: '30px', color: 'white' }}>
            <b>Welcome</b> to my portfolio! My name is Kittiya Goldberg. I earned my degree in Fisheries Science in
            2012 and worked in Thailand for 2 years before moving to the USA as an Au Pair in 2014. Since being
            in the USA, I had the pleasure of working in child care until 2023. I've always had a passion for
            fashion and design! After watching a few web development tutorials on YouTube, I became interested
            in learning. I've recently completed the George Washington University coding bootcamp program in
            Full Stack Web Development. I've designed a wide range of websites and applications using HTML,
            CSS, JavaScript, React, Node.js, Express.js, and MongoDB. My goal now is to land a job as a web developer.
            I embrace the challenge of learning new things and apply myself when new opportunities to grow arise.
            As a person, I'm diligent and I'm always looking for ways to improve my skills and knowledge. I adapt
            quickly and work well in both group and individual settings. I consider myself a team player that will
            give extra effort to set an example for others to follow.
          </p>
        </div>
      </div>
    </div>
  );
}
