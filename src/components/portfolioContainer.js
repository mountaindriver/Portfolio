import React, { useState } from 'react';
// Components
import NavTabs from './NavTabs';
import Header from './Header';
import Footer from './Footer';

// Pages
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';


export default function PortfolioContainer(){
    const [currentPage, setCurrentPage] = useState('Portfolio');

    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
      if (currentPage === 'Portfolio') {
        return <Portfolio />;
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
      return <Portfolio />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        {/* We are passing the currentPage from state and the function to update it */}
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        <Header />
        {/* Here we are calling the renderPage method which will return a component  */}
        {renderPage()}
        {/* no footer on contact page */}
        <Footer />
      </div>
    );
}