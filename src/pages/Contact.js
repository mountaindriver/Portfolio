import React from 'react';
import Form from '../components/Form';

// This page renders this card and within the card a form component is rendered
export default function Contact() {
  return (
    <section>
      <div className='aCard'>
        <h1>Contact <span>Me</span> &#128513;</h1>
        <p>If you want to get in touch, leave me a message or connect with one of the links in the footer.</p>
        <Form />
      </div>
    </section>
  );
}
