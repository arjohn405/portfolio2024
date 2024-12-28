import React, { useState } from 'react'

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact">
      <h2>Hire Me!</h2>
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-method">
            <a href="mailto:acapucion123@gmail.com" className="contact-link">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              acapucion123@gmail.com
            </a>
          </div>
          <div className="contact-method">
            <span className="contact-link">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              Quezon City, Philippines
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="contact-input"
          />

          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="contact-input"
          />

          <textarea
            name="message"
            value={formState.message}
            onChange={handleChange}
            placeholder="Message"
            rows="4"
            required
            className="contact-input"
          />

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact 