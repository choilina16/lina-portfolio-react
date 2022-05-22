// using activity 16 as a reference!

import React, { useState } from 'react';
import './Contact.css';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
}

export default function Contact() {
  // dont forget ()
  return (
    <div>
      <div>
        <h1>contact me</h1>
      </div>
      <div>
        <form>
          <input value={name} name="name" type="name" placeholder="name" />
          <input value={email} name="email" type="email" placeholder="email" />
          <input
            value={phone}
            name="phone"
            type="phone"
            placeholder="phone number"
          />
          <input
            value={message}
            name="message"
            type="message"
            placeholder="message"
          />
          <button type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      </div>
    </div>
  );
}
