import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}. Your message has been sent!`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-details">
        <h3>Contact Information:</h3>
        <p><strong>Address:</strong> 123 Firefighter Lane, Tech City, 56789</p>
        <p><strong>Email:</strong> support@firefightingrobo.com</p>
        <p><strong>Phone:</strong> +1 (555) 123-4567</p>
      </div>
      <div className="contact-form">
        <h3>Send Us a Message:</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
