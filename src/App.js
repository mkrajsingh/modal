import React, { useState } from 'react';
import './styles.css'; // You need to have corresponding CSS file for styling

const XModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = () => {
    if (!username || !email || !dob || !phone) {
      alert('Please fill out all fields.');
    } else if (!email.includes('@')) {
      alert('Invalid email. Please check your email address.');
    } else if (phone.length !== 10 || isNaN(phone)) {
      alert('Invalid phone number. Please enter a 10-digit phone number.');
    } else {
      // Submit logic here
      alert('Form submitted successfully!');
      setUsername('');
      setEmail('');
      setDob('');
      setPhone('');
      closeModal();
    }
  };

  return (
    <div className="app">
      <button onClick={openModal}>Open Form</button>
      {isOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Full Details</h2> {/* Heading added here */}
            <form onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
              <label htmlFor="email">Email:</label>
              <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <label htmlFor="dob">Date of Birth:</label>
              <input type="date" id="dob" value={dob} onChange={(e) => setDob(e.target.value)} />
              <label htmlFor="phone">Phone Number:</label>
              <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
              <button type="submit" className="submit-button" onClick={handleSubmit}>
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default XModal;
