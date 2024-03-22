import React, { useRef }  from 'react';
import emailjs from '@emailjs/browser';


import{ 
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaLinkedinIn,
} from 'react-icons/fa';

import {FiSend} from 'react-icons/fi';
import './contact.css';


const Contact = () => {
  const form = useRef(); 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_p92pt4i', 'template_7fhalwf', form.current, {
        publicKey: 'hWDsdisPYcoftb6WT',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

      e.target.reset();
  };

  return (
   <section className="contact section">
    <h2 className="section__title">
      Get In <span>Touch</span>
    </h2>

    <div className="contact__container container grid">
         <div className="contact__data">
          <h3 className="contact__title">Don't be Shy!</h3>
          <p className='contact__description'>
            Feel free to get in touch with me . I am always open to discussing 
            new projects, creative ideas or opportunities to be part of your 
            visions.
          </p>
          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className='info__icon'/>
              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">poojavchaudhari06@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className='info__icon'/>
              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">8623982858</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a href="https://www.linkedin.com/in/pooja-chaudhari-075423208/" className="contact__social-link">
              <FaLinkedinIn/>
            </a>
          </div>
         </div>

         <form ref={form} className='contact_form' onSubmit={sendEmail}>
          <div className="form__input-group">
            <div className="form__input-div">
            <input type='text' 
            placeholder='Your Name'
            name='name'
            className='form__control'/>
            </div>

            <div className="form__input-div">
            <input type='email' 
            placeholder='Your Email'
            name='email'
            className='form__control'/>
            </div>
            <div className="form__input-div">
            <input type='text' 
            placeholder='Your Subject'
            name='subject'
            className='form__control'/>
            </div>
          </div>

          <div className="form__input-div">
            <textarea placeholder='Your Message ' className='form__control textarea' name='textarea'></textarea>
            </div>

            <button className='button'>
             Send Message
             <div className="span button__icon contact__button-icon">
               <FiSend/>
              </div> 
            </button>

         </form>
    </div>
   </section>
  );
}

export default Contact;
