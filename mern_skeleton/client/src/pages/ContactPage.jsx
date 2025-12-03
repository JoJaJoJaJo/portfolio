import React, { useState } from 'react';

function ContactPage({ setCurrentPage }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:3000/api/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      alert("Error: " + data.error);
      return;
    }

    alert(`Thank you ${formData.firstName}! Your message has been saved.`);
    setCurrentPage("home");

    setFormData({
      firstName: "",
      lastName: "",
      contactNumber: "",
      email: "",
      message: "",
    });
  } catch (err) {
    console.error(err);
    alert("Failed to submit message.");
  }
};



  return (
    <div className="page">
      <h1>Contact Me</h1>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <p>nli73@my.centennialcollege.ca</p>
          <p>+1 (647) 939 7766</p>
          <p>Scarborough, Ontario</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name *</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="contactNumber">Contact Number</label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message here..."
              required
            ></textarea>
          </div>

          <button type="submit" className="btn primary">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
