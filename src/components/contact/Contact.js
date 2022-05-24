// // using activity 16 as a reference!

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
    <div>
      <div>
        <h1>contact me</h1>
      </div>
      <div>
        <form>
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="name"
            placeholder="name"
          />
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
          <input
            value={phone}
            name="phone"
            onChange={handleInputChange}
            type="phone"
            placeholder="phone number"
          />
          <input
            value={message}
            name="message"
            onChange={handleInputChange}
            type="message"
            placeholder="message"
          />
          <button type="button" onClick={handleFormSubmit}>
            Submit
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
