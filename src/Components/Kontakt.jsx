import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Kontakt.css';  

const KontaktForm = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jvziiyz', 'template_fucwmg6', form.current, 'ou2uC72UGFwlIzJ-S')
      .then((result) => {
          console.log(result.text);
          alert('Meddelandet har skickats!');
      }, (error) => {
          console.log(error.text);
          alert('Det gick inte att skicka meddelandet.');
      });
  };

  return (
    <>
      <h1 className="kontaktrubrik">Kontakta mig</h1> 
      <p>
        Kontakta mig genom att fylla i formuläret nedan så återkommer jag till dig inom 24 timmar.
      </p>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label>Namn</label>
        <input type="text" name="user_name" required />

        <label>E-post</label>
        <input type="email" name="user_email" required />

        <label>Meddelande</label>
        <textarea name="message" required />

        <button type="submit" className="submit-button">Skicka</button>
      </form>
    </>
  );
};

export default KontaktForm;
