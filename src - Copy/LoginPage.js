// LoginPage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginpage.css'; // Import CSS file

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // useNavigate hook

  const handleLogin = () => {
    // Implement your authentication logic here
    // For simplicity, let's consider any non-empty username/password as valid
    if (username.trim() && password.trim()) {
      console.log('Logging in...');
      // Redirect to the patient info page
      navigate('/patient-info');
    } else {
      alert('Please enter a username and password.');
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
