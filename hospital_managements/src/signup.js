// SignupForm.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './signup.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your signup logic here
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);

    try {
      // Send a POST request to the server to add the patient data to appointments
      await axios.post('http://localhost:8081/register', {
        username,
        email,
        password
      });
      console.log('Patient data submitted successfully!');
      // Reset the form and hide it after successful submission
      setUsername('');
      setEmail('');
      setPassword('');
      
    } catch (error) {
      console.error('Error submitting patient data:', error);
    }
  };

  return (
    <>
    <Navbar />
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            placeholder='Enter your Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="signupbutton" type="submit">Sign Up</button>
        <p className="login-link">Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </div>
    <Footer />
    </>
  );
};

export default Signup;
