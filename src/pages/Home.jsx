import React from 'react';
import '../style.css'; // Import the CSS file
import backgroundImage from '../assets/photo.png'; // Import the image file
import FancyText from '@carefully-coded/react-text-gradient';

export default function Home() {
  return (
    <div className="section" id="home" >
      <div className="container">
        <div className="col-md-6" id="imgwelcome" >
          <img src={backgroundImage} alt="Aside" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="row">
          <div className="col-md-6 text-left" className="textcontaner" id="textcontaner1">
            <FancyText
              gradient={{ from: '#F858E0', to: '#77156C', type: 'linear' }}
              animateTo={{ from: '#6DEDD0', to: '#7AE23A' }}
              animateDuration={2000} style={{ fontSize: '20px' }}>
             I'm 
            </FancyText>
            👋 <br></br>
            <FancyText
              gradient={{ from: '#F858E0', to: '#77156C', type: 'linear' }}
              animateTo={{ from: '#6DEDD0', to: '#7AE23A' }}
              animateDuration={2000}>
             Kittiya Goldberg
            </FancyText>
            <FancyText
              gradient={{ from: '#F858E0', to: '#77156C', type: 'linear' }}
              animateTo={{ from: '#6DEDD0', to: '#7AE23A' }}
              animateDuration={2000} style={{ fontSize: '20px' }}>
              Full Stack Developer
            </FancyText >

          </div>
        </div>
      </div>
    </div>
  );
}