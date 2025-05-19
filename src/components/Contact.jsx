import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>We are here to assist you with all your banking needs. Reach out to us through any of the following ways:</p>
      <div className="contact-details">
        <p><strong>Phone:</strong> +1 (800) 123-4567</p>
        <p><strong>Email:</strong> support@bankingwebsite.com</p>
        <p><strong>Address:</strong> 123 Finance Street, Money City, Country</p>
        <p><strong>Customer Service Hours:</strong> Mon-Fri 9:00 AM - 6:00 PM</p>
      </div>
     
      <h3>Customer Reviews</h3>
      <div className="customer-reviews">
        <blockquote>
          "Excellent service and user-friendly interface. I can manage all my accounts with ease!" - Jane D.
        </blockquote>
        <blockquote>
          "Fast and secure transactions. Highly recommend this banking website." - Mark S.
        </blockquote>
        <blockquote>
          "Customer support is very responsive and helpful. Great experience overall." - Lisa K.
        </blockquote>
      </div>
    </div>
  );
}

export default Contact;
