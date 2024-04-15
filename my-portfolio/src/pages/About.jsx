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
            About me
          </FancyText>
          <div className="col-md-12" id="">
            <p style={{ fontSize: '25px', float: 'right', color: 'white'  }}>
              Welcome to my portfolio! My name is Kittiya Goldberg. I'm currently studying at the George Washington University coding bootcamp program in Full Stack Web Development. I have a degree in Fisheries Science and worked in Thailand for 2 years before moving to the USA as an aupair. Since being in the USA, I worked in child care until 2023. I became interested in web development after watching tutorials on YouTube.
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