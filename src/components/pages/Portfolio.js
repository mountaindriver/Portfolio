import React from 'react';

const style = {
  backgroundImage: 'url({project.image})',
  maxWidth: '20rem',
}

export default function Portfolio(projects) {
  return (
    <section>
      <div class='d-flex flex-wrap justify-content-between'>
        {projects.projects.map((project) => (
          <div class="card m-2 p-2" style={style}>
            <img src={project.image} class="portfolio-img" alt={project.name} />
            <div class="p-2 mx-1">
              <h5 class="card-title">{project.name}</h5>
              <p class="card-text">{project.description}</p>
              <a href={project.url} class="btn btn-success m-2 p-2 btn-lg btn-block">Website</a>
              <a href={project.githubURL} class="btn btn-success m-2 p-2 btn-lg btn-block">Repo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}