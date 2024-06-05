import React, { useState, useEffect } from 'react';
import FancyText from '@carefully-coded/react-text-gradient';
import emailjs from 'emailjs-com';
import '../style.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    from_name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { from_name, email, message } = formData;
    if (!from_name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    sendEmail(e);
  };

  const sendEmail = (event) => {
    event.preventDefault(); // Prevent default form submission

    console.log('Form submission prevented');

    // Initialize EmailJS with your Public Key
    emailjs.init('nJ2jLcypJ4Py0VEzf'); // Replace with your actual EmailJS Public Key

    // Get the form element
    const contactForm = document.getElementById('contact-form');

    console.log('Attempting to send email...');

    // Send email using EmailJS
    emailjs.sendForm('service_53cxr8c', 'template_ve85jkc', contactForm)
      .then(function(response) {
        console.log('Email sent!', response.status, response.text);
        alert('Email sent successfully!');
        contactForm.reset(); // Optionally, reset the form after successful submission
      }, function(error) {
        console.error('Error sending email:', error);
        alert('Oops! Something went wrong.');
      });
  };

  useEffect(() => {
    console.log('Script loaded'); // Add this to check if the script is being executed

    // Attach event listener to the form
    document.getElementById('contact-form').addEventListener('submit', sendEmail);
  }, []);

  return (
    <div className='contact' id='contact'>
      <section id='contact-me'>
        <FancyText gradient={{ from: 'white', to: 'orange', type: 'linear' }} style={{ fontSize: '25px' }}>
          Contact Me
        </FancyText>
        <form id='contact-form' onSubmit={handleSubmit}>
          <label htmlFor='name' style={{ color: 'white' }}>Name:</label>
          <input
            type='text'
            id='name'
            name='from_name'
            value={formData.from_name}
            onChange={handleChange}
            required
          />
          <label htmlFor='email' style={{ color: 'white' }}>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor='message' style={{ color: 'white' }}>Message:</label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type='submit' className='btn btn-primary bg-info rounded border-info ml-1 mb-3' id='email-button'>Submit</button>
        </form>
      </section>
    </div>
  );
}
