// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import PatientInfoPage from './PatientInfoPage';
import MedicalHistory from './MedicalHistory';
import LoginPage from './LoginPage';

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          {/* Default route: Redirect to the login page */}
          <Route path="/" element={<LoginPage />} />
          {/* Route for the patient info page */}
          <Route path="/patient-info" element={<PatientInfoPage />} />
          {/* Route for the medical history page */}
          <Route path="/medical-history" element={<MedicalHistory />} />
          {/* Route for the login page */}
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
