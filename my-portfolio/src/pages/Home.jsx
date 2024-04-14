import React from 'react';
import '../style.css'; // Import the CSS file
import backgroundImage from '../assets/photo.png'; // Import the image file
import FancyText from '@carefully-coded/react-text-gradient';

export default function Home() {
  return (
    <div className="section" id="home" >
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-left">
            <FancyText
              gradient={{ from: '#F858E0', to: '#77156C', type: 'linear' }}
              animateTo={{ from: '#6DEDD0', to: '#7AE23A' }}
              animateDuration={2000}>
              Hello           
            </FancyText> 
             👋 
            <FancyText
              gradient={{ from: '#F858E0', to: '#77156C', type: 'linear' }}
              animateTo={{ from: '#6DEDD0', to: '#7AE23A' }}
              animateDuration={2000}>
             I'm Kittiya <br></br>       
            </FancyText>
            <div>
              <FancyText gradient={{ from: '#818CF8', to: '#5B21B6' }}>
                studying coding a Full Stack Developer
                 from boot camp at GWU. Washington, DC
              </FancyText>
            </div>
            {/* <div className="col-md-6">
              <img src={backgroundImage} alt="Aside" style={{ width: '100%', height: 'auto' }} />
            </div> */}
          </div>
          <div className="col-md-6" id="imgwelcome" style={{ float: 'right' }}>
              <img src={backgroundImage} alt="Aside" style={{ width: '100%', height: '100%' }} />
            </div>
        </div>
      </div>
    </div>
  );
}