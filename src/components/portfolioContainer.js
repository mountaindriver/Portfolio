import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';


export default function Portfolio(){
    const [currentPage, setCurrentPage] = useState('Work');

    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
      if (currentPage === 'Work') {
        return <Work />;
      }
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Contact') {
        return <Contact />;
      }
      return <Contact />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        {/* We are passing the currentPage from state and the function to update it */}
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* Here we are calling the renderPage method which will return a component  */}
        {renderPage()}
      </div>
    );
}