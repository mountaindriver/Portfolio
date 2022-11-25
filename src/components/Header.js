import React from 'react';

function Header({ currentPage, handlePageChange }) {
  return (
    <ul className='nav sticky-top'>
      <li className='pNavItem'>
        <a
          href='#about'
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'pActive' : 'pNav'}
        >
          About
        </a>
      </li>
      <li className='pNavItem'>
        <a
          href='#Portfolio'
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'pActive' : 'pNav'}
        >
          Portfolio
        </a>
      </li>
      <li className='pNavItem'>
        <a
          href='#contact'
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'pActive' : 'pNav'}
        >
          Contact
        </a>
      </li>
      <li className='pNavItem'>
        <a
          href='#Resume'
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'pActive' : 'pNav'}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default Header;
