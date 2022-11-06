import React from 'react';

export default function Portfolio(projects) {
  return (
    <section>
      <h2 className=''>Portfolio</h2>
      <div className=''>
        {projects.projects.map((project) => (
          <div className=''>
            <div class=''>
            <img src={project.image} className='' alt={project.name} />
            </div>
            <div className=''>
              <h5 className=''>{project.name}</h5>
              <p className=''>{project.description}</p>
              <a href={project.url} className=''>Website</a>
              <a href={project.githubURL} className=''>Repo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}