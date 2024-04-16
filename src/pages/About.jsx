import React from 'react';
import backgroundImage from '../assets/cartoonme.png'; // Import the image file
import FancyText from '@carefully-coded/react-text-gradient';

export default function About() {
  return (
    <div className="container-main">
      <div className="row">
        <div className="col-md-6 text-left" style={{ fontSize: '30px' }}>
          <FancyText
            gradient={{ from: '#F858E0', to: '#77156C', type: 'linear' }}
            className="conten">
            Welcome to my portfolio!
          </FancyText>
          <div className="col-md-12" id="container-main1">
          <p style={{ fontSize: '20px', float: 'right', color: 'white', textIndent: '25px' }}>
              <br></br> Welcome to my portfolio! My name is Kittiya Goldberg.  I earned my degree in Fisheries Science in 2012 and worked in Thailand for 2 years before moving to USA as an Aupair in 2014. Since being in the USA, I had the pleasure of working in child care until 2023. I've always had passion in life for fashion and design! After watching a few web development tutorials on YouTube I became interested in learning. I'm currently studying at the George Washington University coding bootcamp program in Full Stack Web Development. I've designed a wide range of websites and applications using HTML, CSS, JavaScript, React, Node.js, Express.js, and MongoDB. <br></br> <br></br>
              
              My goal now is to land a job as a web developer. I embrace the challenge of learning new things and apply myself when new opportunities to grow arise. As a person, I'm diligent and I'm always looking for ways to improve my skills and knowledge. I adapt quickly and work well in both group and individual settings. I consider myself a team player that will give extra effort to set an example for others to follow.  
            </p>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center" style={{ float: 'right' }}>
          <img src={backgroundImage} alt="Aside" className="img-fluid" style={{ borderRadius: '8px' }} />
        </div>
      </div>
    </div>

  );
}