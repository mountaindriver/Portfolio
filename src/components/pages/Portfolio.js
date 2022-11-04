import React from 'react';

const style ={
  width: '18rem'
}

export default function Portfolio(projects) {
  return (
    <section>
      <h1>Portfolio</h1>
      {projects.projects.map((project) => (
        <div class="card" style={style}>
          <img src={project.image} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{project.name}</h5>
            <p class="card-text">{project.description}</p>
            <a href={project.url} class="btn btn-primary">Website</a>
            <a href={project.githubURL} class="btn btn-primary">Repo</a>
          </div>
        </div>
      ))}
    </section>
  );
}