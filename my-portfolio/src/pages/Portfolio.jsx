import React from 'react';

// Import your project images
import Project1Img from '../assets/Brewery-Search.png';
import Project2Img from '../assets/photo.png';
// Add more imports for other project images if needed

export default function Portfolio() {
  // Define an array of project objects containing image and project details
  const projects = [
    {
      id: 1,
      image: Project1Img,
      title: 'Project 1',
      description: 'Description of Project 1',
      // Add more details as needed
    },
    {
      id: 2,
      image: Project2Img,
      title: 'Project 2',
      description: 'Description of Project 2',
      // Add more details as needed
    },
    // Add more project objects as needed
  ];

  return (
    <div>
      <h1>Portfolio</h1>
      <p>Please click on a project card to view the project details:</p>
      <div className="project-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {/* Add additional project details here */}
          </div>
        ))}
      </div>
    </div>
  );
}