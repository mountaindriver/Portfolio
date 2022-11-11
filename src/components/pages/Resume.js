import React from 'react';

// This page allows user to download my resume
export default function Resume() {
  return (
    <section>
      <div className='aCard'>
        <h1>Thanks for checking out my <span>Portfolio</span> 😎</h1>
        <a href="assests/resume/Lucas Freigenberg.pdf" download>
          <h3>My Resume📝</h3></a>
      </div>
    </section>
  );
}
