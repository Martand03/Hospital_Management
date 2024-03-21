import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import './patient.css';

const Patient = () => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [date, setDate] = useState('');
  const [contact, setContact] = useState('');

  const handleLogout = () => {
    // Redirect to login page
    window.location.href = '/';
  };

  const handleBookAppointment = () => {
    setShowForm(true);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to the server to add the patient data to appointments
      await axios.post('http://15.207.109.199:8081/patients', {
        name,
        age,
        gender,
        date,
        contact,
      });
      console.log('Patient data submitted successfully!');
      // Reset the form and hide it after successful submission
      setName('');
      setAge('');
      setGender('');
      setDate('');
      setContact('');
      setShowForm(false);
    } catch (error) {
      console.error('Error submitting patient data:', error);
    }
  };

  return (
    <div className="container">
      <div className="sidebar">
        <h2>Sidebar</h2>
        <button onClick={handleBookAppointment}>Book Appointment</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div className="main-content">
        <h1>Patient Dashboard</h1>
        {showForm && (
          <div className="appointment-form">
            <h2>Book Appointment</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="age">Age:</label>
                <input
                  type="number"
                  id="age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="gender">Gender:</label>
                <select
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="date">Date:</label>
                <input
                  type="date"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact">Contact:</label>
                <input
                  type="text"
                  id="contact"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Patient;
