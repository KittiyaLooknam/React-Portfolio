import React from 'react';
import backgroundImage from '../assets/cartoonme.png'; // Import the image file

export default function About() {
  return (
    <div className="container-main">
      <div className="row">
        <div className="col-md-6 text-left"></div>
          <h1 className="conten"style={{ color: 'white' }}>About me
          </h1>
        <div className="row">
          <div className="col-md-6"style={{ color: 'white' }}>
            <p>
              Welcome to my portfolio! My name is Kittiya Goldberg. I'm currently studying at the George Washington University coding bootcamp program in Full Stack Web Development. I have a degree in Fisheries Science and worked in Thailand for 2 years before moving to the USA as an aupair. Since being in the USA, I worked in child care until 2023. I became interested in web development after watching tutorials on YouTube.
            </p>
          </div>
          <div className="col-md-6">
            <img src={backgroundImage} alt="Aside" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}