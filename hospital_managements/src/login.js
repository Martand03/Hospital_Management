import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:8081/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      
      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          // Successful login, redirect to appropriate page
          if (data.userType === 'doctor') {
            window.location.href = '/doctors'; // Redirect to doctors page
          } else if (data.userType === 'patient') {
            window.location.href = '/patients'; // Redirect to patients page
          }
        } else {
          // Incorrect username or password
          setError('Invalid username or password');
        }
      } else {
        // Handle other server errors
        setError('Server error. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <>
    <Navbar />
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Sign In</h2>
        {error && <p className="error-message">{error}</p>}
        <div className="form-group">
          <label htmlFor="username" className='loginhead'>Username:</label>
          <input
            type="text"
            id="username"
            placeholder='Enter your username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className='loginhead'>Password:</label>
          <input
            type="password"
            id="password"
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="loginbutton" type="submit">Login</button>
        <p className="signup-link">Not registered? <Link to="/signup">Sign up</Link></p>
      </form>
    </div>
    <Footer />
    </>
  );
};

export default Login;
