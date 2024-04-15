import React from 'react';
// Import your project images
import Project1Img from '../assets/Brewery-Search.png';
import Project2Img from '../assets/crudit-screenshot.png';
import Project3Img from '../assets/logo.svg.png';
import Project4Img from '../assets/Note-Taker.png';
import Project5Img from '../assets/password-Generator.png';
import Project6Img from '../assets/workday-sceduler.png';
import '../style.css'; // Import the CSS file

export default function Portfolio() {
  // Define an array of project objects containing image and project details
  const projects = [
    {
      id: 1,
      image: Project1Img,
      title: 'Brewery-Search',
      description: 'This web application serves as a brewery finder. When you load the application you will see a homepage page displaying the title of the application, a search input to search for breweries by city, a search input to search for breweries by zipcode, and a random brewery button below.',
     
    },
    {
      id: 2,
      image: Project2Img,
      title: 'CRUDit',
      description: 'Description of CRUDit is a blog-type website which allows registered users to create, read, and delete posts.',
    },
    {
      id: 3,
      image: Project3Img,
      title: 'SVG logo',
      description: 'Description ofSVG logo Markernode application that generates an SVG logo with your choice of shape (circle, square, rectangle) and color text. Limit with 3 characters and text color. following chosen using color of keyword or hexadecimal numbers..',
      
    },
    {
      id: 4,
      image: Project4Img,
      title: 'Note-Taker',
      description: 'Description of note-taking app that allows the user to create, save, and delete text-based notes.',
    },
    {
      id: 5,
      image: Project5Img,
      title: 'password-Generator',
      description: 'Description of This is the password generator for the user-defined length between 8-128 characters selected character types (uppercase, lowercase, numeric, and special). The password uses HTML to create the button to initiate password generation and prompts and confirms to select password parameters. After selection, the generated password is displayed in the browser window.',
     
    },
    {
      id: 6,
      image: Project6Img,
      title: 'workday-sceduler',
      description: 'Description of This application is a single day planning tool. The code writted using HTML, CSS and Bootstrap CSS framework, Javascript jQuery libaries, and font-awesome icon toolkit. The application can be used to record and save 9am-5pm workday.',

    },
  
  ];

  return (
    <div>
      <h1>Portfolio</h1>
      <p>Please click on a project card to view the project details:</p>
      <div className="project-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3 style={{ color: 'white' }}>{project.title}</h3>
            <p style={{ color: 'white' }}>{project.description}</p>
            {/* Add additional project details here */}
          </div>
        ))}
      </div>
    </div>
  );
}