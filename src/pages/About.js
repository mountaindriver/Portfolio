import React from 'react';

export default function About() {
  return (
    <section>
      <article className='aCard'>
        <h1>Hello, I'm A <span>Full Stack</span> Web Developer 🤓</h1>
        <p>I'm <span>Lucas</span> web developer from Utah, who loves to create and problem solve. I'm currently working with the MERN Stack but concurrently learning new technologies.</p>
        <div className='aImg'>
          <img src='./assests/images/outdoorsyProfile.jpg' alt='Lucas Freigenberg Mountian Biking' />
        </div>
        <br />
      <h3 ><span>"I'd be more frightened by not using whatever abilities I'd been given. I'd be more frightened by procrastination and laziness" -Denzel Washington</span></h3>
        <h1>Mission Statement</h1>
        <p>During my time learning and developing code, one of the things I'm most proud of is I never missed a day or a task.  Sure, I still took days off but I completed every single task and showed up every time there was class, meetings, or work to be done.   People say that 75%-95% of coding is fixing bugs and problem solving.  Therefore I always go in with the growth mindset of trying everything, failing, and going at it again and if nessecary getting help till I understood the problem.  Then when it is all said, I am proud of the finished product.</p>
        <h2>I have experience learning these technologies:</h2>
        <ul className='d-flex flex-wrap'>
            <li className='pbtn3'>JavaScript</li>
            <li className='pbtn3'>HTML</li>
            <li className='pbtn3'>CSS</li>
            <li className='pbtn3'>Git</li>
            <li className='pbtn3'>MongoDB</li>
            <li className='pbtn3'>Express.js</li>
            <li className='pbtn3'>React.js</li>
            <li className='pbtn3'>Nodes.js</li>
            <li className='pbtn3'>GraphQL</li>
            <li className='pbtn3'>NoSQL</li>
            <li className='pbtn3'>MySQL</li>
            <li className='pbtn3'>OOP</li>
            <li className='pbtn3'>Apollo</li>
            <li className='pbtn3'>Heroku</li>
            <li className='pbtn3'>Third Party API</li>
            <li className='pbtn3'>Bootstrap</li>
            <li className='pbtn3'>Foundations</li>
        </ul>
        <h2>I am currently working on these:</h2>
        <ul className='d-flex flex-wrap'>
          <li className='pbtn3'>Next.js</li>
          <li className='pbtn3'>Python</li>
          <li className='pbtn3'>Java</li>
          <li className='pbtn3'>PHP</li>
          <li className='pbtn3'>AWS</li>
        </ul>
      </article>
    </section>
  );
}
