// // using activity 16 as a reference!

// notification that this field is required
// notification if I have entered an invalid email address
// list of the developer’s proficiencies

import React, { useState } from 'react';
import './Contact.css';
import { validateEmail } from '../utils/helpers';

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'phone') {
      setPhone(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !name || !phone || !message) {
      setErrorMessage('Input is invalid');
      return;
    }
    alert(`Let's get to know each other, ${name}!`);
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <div className="contact-me-container" id="contact-nav">
      <div>
        <h1>contact me</h1>
        <h4>Let's connect!</h4>
      </div>

      <div className="contact-me-form">
        <form>
          <label for="name">NAME</label>
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="name"
            className="name"
          />
          <label for="email">EMAIL</label>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            className="email"
          />
          <label for="phone">PHONE</label>
          <input
            value={phone}
            name="phone"
            onChange={handleInputChange}
            type="phone"
            className="phone"
          />
          <label for="message">MESSAGE</label>
          <input
            value={message}
            name="message"
            onChange={handleInputChange}
            type="message"
            className="message"
          />
          <button type="button" onClick={handleFormSubmit}>
            SUBMIT
          </button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
}
