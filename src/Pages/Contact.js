import React from "react";
import myImage from '../images/Screenshot 2023-08-11 at 12.17.32 PM.png';
import "../Pages/Contact.css"; // Import the CSS file

const ContactCard = () => {
  return (
    <div id="contact" className="contact-container">
      <h2 className="contact-heading">ℂ𝕆ℕ𝕋𝔸ℂ𝕋</h2>
      <hr />
      <br />

      <div className="contact-card">
        {/* Left Section - Image */}
        <div className="contact-left">
          <img src={myImage} alt="My Profile" />
        </div>

        {/* Right Section - Contact Info */}
        <div className="contact-right">
          <div className="contact-info">
            <p><strong>Name:</strong> JP Sagar Singh</p>
            <p><strong>Email:</strong> <a href="mailto:sagar.developer1004@gmail.com">sagar.developer1004@gmail.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+919490817477">+91 9490817477</a></p>
            <p><strong>City:</strong> Bangalore, India</p>
            <div className="google-map">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.469011365094!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDM4JzE3LjciTiA3N8KwMzUnMzguNyJF!5e0!3m2!1sen!2sin!4v1643122332651"
                width="100%"
                height="200"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
