import React, { useState } from 'react';
// Components
import Header from './Header';
import Footer from './Footer';

// Pages
import Portfolio from '../pages/Portfolio';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';

// This is the list of project that will be rendered on the Portfolio screen
const projects = [
  {
    id: 1,
    name: "Tech Blogger",
    description: 'This is a Full Stack single page application that uses a mySQL Database and is hosted on Heroku.  It uses many differenet technologies such as HTML, CSS, Bootstrap, JavaScript, Express.js, Node.js, mySQL, Sequilize (mySQL ORM), bcrypt, and was developed with nodemon.',
    url: 'https://gentle-caverns-83915.herokuapp.com/login',
    githubURL: `https://github.com/mountaindriver/Tech-Blogger`,
    image: `./assests/images/techbloggersnip.png`,
    technologies: [
      'HTML', 
      'CSS', 
      'bootstrap', 
      'JavaScript', 
      'Express.js', 
      'Node.js', 
      'mySQL', 
      'Sequilize', 
      'bcrypt',
    ]
  },
  {
    id: 2,
    name: 'Weather Dashboard',
    description: 'This is a weather dashboard developed from scratch using  HTML, CSS, JS, Bootstrap, Jquery, and Third party API OpenWeather One Call API.',
    url: 'https://mountaindriver.github.io/Weather-API-Dashboard/',
    githubURL: `https://github.com/mountaindriver/Weather-API-Dashboard`,
    image: `./assests/images/screencapture-mountaindriver-github-io-Weather-API-Dashboard-2022-11-04-13_38_31.png`,
    technologies: [
      'HTML', 
      'CSS', 
      'JS', 
      'Bootstrap', 
      'Jquery',
      'Third Party API'
    ]
  },
  {
    id: 3,
    name: 'Covid Traveling Guide',
    description: `Collaborative Team Project to develop a front end website that uses multipe Third Party API's to create a tool to help travelers decide where to go for vacation.`,
    url: 'https://mountaindriver.github.io/super-team-project/',
    githubURL: `https://github.com/mountaindriver/super-team-project`,
    image: './assests/images/screencapture-mountaindriver-github-io-super-team-project-2022-11-04-13_37_19.png',
    technologies: [
      'HTML', 
      'CSS', 
      'JS', 
      'Bootstrap', 
      'Jquery',
      'Third Party API'
    ]
  },
  {
    id: 4,
    name: 'Recipe Finder',
    description: `Collaborative Team Project to develop a Full Stack Application.This app allows users to post to and browse a recipe database.`,
    url: 'https://murmuring-sea-48556.herokuapp.com/',
    githubURL: `https://github.com/lcsantana1/Recipe-Finder`,
    image: 'https://user-images.githubusercontent.com/106941418/193163516-b5a97c92-7a7d-400b-955e-db0a362c4d94.png',
    technologies: [
      'HTML', 
      'CSS', 
      'bootstrap', 
      'JavaScript', 
      'Express.js', 
      'Node.js', 
      'mySQL', 
      'Sequilize', 
      'bcrypt',
    ]
  },
  {
    id: 5,
    name: 'NoSQL API for Social Network',
    description: 'This is an API that is created using MongoDB and JavaScript. The database uses Express.js and Mongoose as the ORM. This is not a deployed website but there is a link to a walk through video in the README.',
    url: 'https://github.com/mountaindriver/NoSQL-API-for-Social-Network',
    githubURL: `https://github.com/mountaindriver/NoSQL-API-for-Social-Network`,
    image: `./assests/images/screencapture-github-mountaindriver-NoSQL-API-for-Social-Network-2022-11-04-13_31_00.png`,
    technologies: [
      'MonogoDB',
      'Mongoose',
      'Node.js',
      'Express',
      'Insomnia',
    ]
  },
  {
    id: 6,
    name: 'Team Member Project',
    description: `This is a Object-Oriented Programing application that uses Node.js to create a Command Line interface.  It will prompt users for a engineer team's contact information then using that information it will generate a website to easily view link to their contact information.`,
    url: `https://github.com/mountaindriver/NoSQL-API-for-Social-Network`,
    githubURL: `https://github.com/mountaindriver/Team-Profile-Generator`,
    image: `./assests/images/screencapture-127-0-0-1-5500-dist-Example-Boss-sTeam-Member-Dashboard-html-2022-11-04-14_10_34.png`,
    technologies: [
      'Node.js',
      'NPM',
      'Inquirer',
    ]
  },
]

export default function PortfolioContainer(){
    const [currentPage, setCurrentPage] = useState('Portfolio');

    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
      if (currentPage === 'Portfolio') {
        return <Portfolio projects={projects} />;
      }
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Contact') {
        return <Contact />;
      }
      if (currentPage === 'Resume'){
        return <Resume />
      }
      return <About/>;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <>
      <div>
        {/* We are passing the currentPage from state and the function to update it */}
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* Here we are calling the renderPage method which will return a component  */}
        {renderPage()}
      </div>
        <Footer />
      </>
    );
}