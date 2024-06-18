import React from 'react';
// Import your project images
import Project1Img from '../assets/Brewery-Search.png';
import Project2Img from '../assets/crudit-screenshot.png';
// import Project3Img from '../assets/logo.svg.png';
// import Project4Img from '../assets/Note-Taker.png';
// import Project5Img from '../assets/Password-Generator.png';
// import Project6Img from '../assets/workday-sceduler.png';
// import Project7Img from '../assets/Quiz-game-challenge.png';
// import Project8Img from '../assets/Social-Network-API.png';
// import Project9Img from '../assets/Employee-Tracker.png';
import Project10Img from '../assets/Recipe cookbook.png';

import '../style.css'; // Import the CSS file
import FancyText from '@carefully-coded/react-text-gradient';

export default function Portfolio() {
  // Define an array of project objects containing image and project details
  const projects = [
    {
      id: 1,
      image: Project1Img,
      title: 'Brewery-Search',
      description: 'This web application serves as a brewery finder. When you load the application you will see a homepage page displaying the title of the application, a search input to search for breweries by city, a search input to search for breweries by zipcode, and a random brewery button below.',
      url: 'https://github.com/gpayabyab/Project-1.git'
    },
    {
      id: 2,
      image: Project2Img,
      title: 'CRUDit',
      description: 'Description of CRUDit is a blog-type website which allows registered users to create, read, and delete posts.',
      url: 'https://github.com/yaserhdev/crudit.git'
    },
    // {
    //   id: 3,
    //   image: Project3Img,
    //   title: 'SVG logo',
    //   description: 'Description of SVG logo Markernode application that generates an SVG logo with your choice of shape (circle, square, rectangle) and color text. Limit with 3 characters and text color. following chosen using color of keyword or hexadecimal numbers.',
    //   url: 'https://github.com/KittiyaLooknam/SVG-Logo-Maker.git'
    // },
    // {
    //   id: 4,
    //   image: Project4Img,
    //   title: 'Note-Taker',
    //   description: 'Description of note-taking app that allows the user to create, save, and delete text-based notes.',
    //   url: 'https://github.com/KittiyaLooknam/Note-Taker.git'
    // },
    // {
    //   id: 5,
    //   image: Project5Img,
    //   title: 'password-Generator',
    //   description: 'Description of This is the password generator for the user-defined length between 8-128 characters selected character types (uppercase, lowercase, numeric, and special). The password uses HTML to create the button to initiate password generation and prompts and confirms to select password parameters. After selection, the generated password is displayed in the browser window.',
    //   url: 'https://github.com/KittiyaLooknam/Password-Generator.git'
    // },
    // {
    //   id: 6,
    //   image: Project6Img,
    //   title: 'workday-sceduler',
    //   description: 'Description of This application is a single day planning tool. The code writted using HTML, CSS and Bootstrap CSS framework, Javascript jQuery libaries, and font-awesome icon toolkit. The application can be used to record and save 9am-5pm workday.',
    //   url: 'https://github.com/KittiyaLooknam/workday-sceduler.git'
    // },
    // {
    //   id: 7,
    //   image: Project7Img,
    //   title: 'Quiz Game Challenge',
    //   description: 'Description of This is a Quiz game. The code writted using HTML, CSS and Bootstrap CSS framework, Javascript jQuery libaries, and font-awesome icon toolkit.',
    //   url: 'https://github.com/KittiyaLooknam/Quiz-game.git'
    // },
    // {
    //   id: 8,
    //   image: Project8Img,
    //   title: 'Employee-Tracker',
    //   description: 'Description of This application is a command-line based content management system which can be used to manage employee data. It is written using JavaScript and MySQL and should be run using the Node.js JavaScript runtime environment. The node package manager inquirer is used to provide the interface for the application and to prompt the user for inputs.',
    //   url: 'https://github.com/KittiyaLooknam/Employee-Tracker.git'
    // },
    // {
    //   id: 9,
    //   image: Project9Img,
    //   title: 'Password-Generator',
    //   description: 'Description of This is the password generator for the user-defined length between 8-128 characters selected character types (uppercase, lowercase, numeric, and special). The password uses HTML to create the button to initiate password generation and prompts and confirms to select password parameters. After selection, the generated password is displayed in the browser window.',
    //   url: 'https://github.com/KittiyaLooknam/Password-Generator.git'
    // },
    {
      id: 10,
      image: Project10Img,
      title: 'Cook Book Blog',
      description: 'Description of This is project is a full stack web application buill using React, Node.js, Express, MongoDB, and Bootstrap. It is a blog application where users can create, read, update, and delete recipes.',
      url: 'https://github.com/gpayabyab/cook-book-blog-.git'
    }
  ];

  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div>
      <h1 className="hearderPortfolio" id="hearderPortfolio">
            {/* // gradient={{ from: '#ff1493', to: '#00bfff', type: 'linear' }}
            // animateTo={{ from: '#6DEDD0', to: '#7AE23A' }}
            // animateDuration={2000}  style={{ fontSize: '50px', fontFamily: 'serif' }}> */}
            Portfolio
          </h1>
      
      <div className="project-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <img className="imgprofoilo" id="imgprofoilo" src={project.image} alt={project.title} />
            </a>
            <h3 style={{ color: 'orange' }}>{project.title}</h3>
            <p style={{ color: 'white' }}>{project.description}</p>
            <button onClick={() => handleClick(project.url)} className="view-button">View Repository</button>
          </div>
        ))}
      </div>
    </div>
  );
}
