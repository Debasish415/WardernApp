import React, { useState } from 'react';
import './Contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '+91',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      if (response.ok) {
        toast.success('Message sent successfully!', {
          position: 'top-right' // or use toast.POSITION.TOP_RIGHT
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          countryCode: '+91',
          message: ''
        });
      } else {
        toast.error(result.message || 'Something went wrong!', {
          position: 'top-right' // or use toast.POSITION.TOP_RIGHT
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred. Please try again later.', {
        position: 'top-right' // or use toast.POSITION.TOP_RIGHT
      });
    }
  };

  return (
    <div className='contact-container'>
      <ToastContainer />
      <div className='contact-info'>
        <h1>Contact Us</h1>
        <p>For any queries, please reach out to us. Our support team will get back to you within 24 hours.</p>
        <p><img src='/images/email.gif' alt='Email' style={{height:"60px", width:"60px"}} /> support@pwskills.com</p>
        <p><img src='/images/phone.gif' alt='Phone' style={{height:"50px", width:"50px"}} /> +91 6361388292</p>
      </div>
      <div className='contact-form'>
        <div className='form-header'>
          <button className='active'>Contact with warden</button>
        </div>
        <form onSubmit={handleSubmit}>
          <label>Full Name *</label>
          <input type='text' name='name' value={formData.name} onChange={handleChange} required />
          <label>Email Address *</label>
          <input type='email' name='email' value={formData.email} onChange={handleChange} required />
          <label>Phone Number *</label>
          <div className='phone-input'>
            <select name='countryCode' value={formData.countryCode} onChange={handleChange}>
              <option value='+91'>IN +91</option>
              {/* Add more country codes here */}
            </select>
            <input type='tel' name='phone' value={formData.phone} onChange={handleChange} required />
          </div>
          <label>Your message *</label>
          <textarea name='message' value={formData.message} onChange={handleChange} required></textarea>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
