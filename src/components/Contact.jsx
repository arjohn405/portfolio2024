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
      <h2>Contact</h2>
      <div className="contact-floating-card">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="floating-input">
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              placeholder="Name"
              required
            />
          </div>

          <div className="floating-input">
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>

          <div className="floating-input">
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              placeholder="Message"
              rows="4"
              required
            />
          </div>

          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact 