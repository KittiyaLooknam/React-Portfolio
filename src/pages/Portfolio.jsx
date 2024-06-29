import React from 'react';
import Project1Img from '../assets/Brewery-Search.png';
import Project2Img from '../assets/crudit-screenshot.png';
import Project3Img from '../assets/Recipe cookbook.png';
import '../style.css';
import FancyText from '@carefully-coded/react-text-gradient';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      image: Project1Img,
      title: 'Brewery-Search',
      description: 'This web application serves as a brewery finder. When you load the application you will see a homepage page displaying the title of the application, a search input to search for breweries by city, a search input to search for breweries by zipcode, and a random brewery button below.',
      tools: [ 'HTML', 'CSS', 'Javascript', 'Open Brewery DB API','OpenWeatherMap API','Bulma','FontAwesome','icons','Google Fonts' ,'Figma', 'Slack', 'Git/GitHub', 'Jest'],
      url: 'https://github.com/gpayabyab/Project-1.git',
      deployUrl: 'https://gpayabyab.github.io/Project-1/'
    },
    {
      id: 2,
      image: Project2Img,
      title: 'CRUDit',
      description: '"Crudit" is a web application that allows users to create, read, update, and delete (CRUD) blog posts. It features user authentication, session management, and an intuitive interface for interacting with blog content. The project employs a range of modern web development technologies to deliver a seamless user experience.',
      url: 'https://github.com/yaserhdev/crudit.git',
      tools:['Node.js', 'Handlebars dynamic HTML generation', 'Bootstrap framework', 'JavaScript', 'Express.js', 'Sequelize ORM', 'MySQL', 'dotenv', 'bcrypt', 'Git/GitHub', 'RESTful API','Console Logging', 'Jest', 'Heroku'],
      deployUrl: 'https://infinite-brushlands-89514-07257eec72fc.herokuapp.com/',
    },
    {
      id: 3,
      image: Project3Img,
      title: 'Cook Book Blog',
      description: 'This project is a full stack web application built using React, Node.js, Express, MongoDB, and Bootstrap. It is a blog application where users can create, read, update, and delete recipes.',
      tools: ['Reacts', 'Apollo Client', 'axios', 'jwt-decode', 'Express', 'GraphQL', 'MongoDB', 'Mongoose', 'dotenv', 'Vite', 'render', 'Git/GitHub', 'Stack'],
      url: 'https://github.com/gpayabyab/cook-book-blog-.git',
      deployUrl: 'https://recipecookbook.onrender.com/'
    }
  ];

  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div>
      <h1 className="hearderPortfolio" id="hearderPortfolio">
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
            {project.tools && (
              <div className="tools-used">
                <strong>Tools used:</strong> {project.tools.join(', ')}
              </div>
            )}
             <div className="button-container">
              <button onClick={() => handleClick(project.deployUrl)} className='view-button'> View Deploy</button>
              <button onClick={() => handleClick(project.url)} className="view-button">View Repository</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
