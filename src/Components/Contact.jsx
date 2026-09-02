import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = (e) => {
    e.preventDefault();
    let newErrors = {};
    
    if (!/^[A-Za-z]{6,}$/.test(name)) {
      newErrors.name = "Name must be at least 6 letters and contain only alphabets.";
    }
    if (/^[0-9]/.test(email)) {
      newErrors.email = "Email cannot start with a number.";
    }
    if (!/^[0-9]{10}$/.test(phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits.";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <section className="contact_section">
      <div className="container px-0">
        <div className="heading_container">
          <h2>Contact Us</h2>
        </div>
      </div>
      <div className="container container-bg">
        <div className="row">
          <div className="col-lg-7 col-md-6 px-0">
            <div className="map_container">
              <div className="map-responsive">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                  width="600"
                  height="300"
                  style={{ border: 0, width: "100%", height: "100%" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-5 px-0">
            <form onSubmit={validateForm}>
              <div>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
              </div>
              <div>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
              </div>
              <div>
                <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}
              </div>
              <div>
                <textarea className="message-box" placeholder="Message" required></textarea>
              </div>
              <div className="d-flex">
                <button type="submit">SEND</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
