import React from 'react';

export default function Portfolio(projects) {
  return (
    <section>
      <div className='aCard'>
        <h1>Hey,👋 I'm <span>Lucas</span></h1>
        <p>I'm a certified MERN Full Stack Developer, these are some of my recent projects</p>
        <a href='https://www.linkedin.com/in/lucas-freigenberg-539338134/' className='pbtn'>LinkedIn</a>
        <a href='https://github.com/mountaindriver' className='pbtn pbtn2'>Github</a>
      </div>

      {projects.projects.map((project) => (
        <div key={project.id} style={{
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
        </div>
      ))}

    </section>
  );
}