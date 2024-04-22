// Navigation.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/patient-info">Patient Info</Link>
        </li>
        <li>
          <Link to="/medical-history">Medical History</Link>
        </li>
        <li>
          <Link to="/login">Home</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
