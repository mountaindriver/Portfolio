import React from 'react';

export default function Portfolio(projects) {
  return (
    <section>
      <div className='introCard'>
        <h1>Hey, I'm Lucas Freigenberg 👋</h1>
        <p>I'm a certified MERN Full Stack Developer</p>
        <img className="" src='./assests/images/outdoorsyProfile.jpg' alt='Lucas Freigenberg Mountian Biking' width='400px' height='300px' />

      </div>

      <div className='work'>

        {projects.projects.map((project) => (
          <div key={project.id} style={{
            backgroundImage: `url(${project.image})`,
            
          }} className='pCard'>
            {/* <img src={project.image} alt={project.name} /> */}
            <div className='pCardBody'>
              <h5>{project.name}</h5>
              <p>{project.description}</p>
              <div className='pCardFooter'>
                <a href={project.url} className='pbtn'>Website</a>
                <a href={project.githubURL} className='pbtn pbtn2'>GitHub Repo</a>
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}