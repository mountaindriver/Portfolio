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
          <div className='pCard'>
            <div class=''>
              <img src={project.image} className='' alt={project.name} />
            </div>
            <div className='pCardBody'>
              <h5 className=''>{project.name}</h5>
              <p className=''>{project.description}</p>
              {/* {projects.project.technologies.map((tech)=>(
                <p className='btn btn-outline-info'>{tech}</p>
              ))} */}
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