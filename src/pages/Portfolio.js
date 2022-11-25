import React from 'react';

// This page creates a card for every one of my projects i'd like to display
export default function Portfolio(projects) {
  return (
    <section>
      <div className='aCard'>
        <h1>Hey,👋 I'm <span>Lucas</span></h1>
        <p>I'm a certified MERN Full Stack Developer connect with me on LinkedIn.  These are some of my projects, you can check out more of them on my Github.</p>
        <a href='https://www.linkedin.com/in/lucas-freigenberg-539338134/' className='pbtn'>LinkedIn</a>
        <a href='https://github.com/mountaindriver' className='pbtn pbtn2'>Github</a>
      </div>

        {projects.projects.map((project) => (
          <article key={project.id} style={{
            backgroundImage: `url(${project.image})`,
            backgroundPosition: `top`,
            backgroundSize: `cover`
          }} className='aCard'>
            <div className='aCardBody'>
              <h5>{project.name}</h5>
              <p>{project.description}</p>
              <div className='pCardFooter'>
                <a href={project.url} className='pbtn'>Website</a>
                <a href={project.githubURL} className='pbtn pbtn2'>Repo</a>
              </div>
            </div>
          </article>
        ))}
    </section>
  );
}