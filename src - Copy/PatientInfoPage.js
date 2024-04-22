import React, { useState, useEffect } from 'react';
import './PatientInfoPage.css'; // Import the CSS file

const PatientInfoPage = () => {
    const [patientInfo, setPatientInfo] = useState(() => {
      // Load patient info from local storage or set default values
      const savedInfo = localStorage.getItem('patientInfo');
      return savedInfo ? JSON.parse(savedInfo) : {
        name: '',
        address: '',
        phone: '',
        email: '',
        insuranceProvider: '',
        policyNumber: '',
        emergencyContacts: [],
      };
    });
  
    useEffect(() => {
      // Save patient info to local storage when it changes
      localStorage.setItem('patientInfo', JSON.stringify(patientInfo));
    }, [patientInfo]);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setPatientInfo((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to save or update patient information
  };

  const handleEmergencyContactChange = (index, e) => {
    const { name, value } = e.target;
    const updatedContacts = [...patientInfo.emergencyContacts];
    updatedContacts[index] = { ...updatedContacts[index], [name]: value };
    setPatientInfo((prevState) => ({
      ...prevState,
      emergencyContacts: updatedContacts,
    }));
  };

  const handleAddEmergencyContact = () => {
    setPatientInfo((prevState) => ({
      ...prevState,
      emergencyContacts: [...prevState.emergencyContacts, { name: '', phone: '' }],
    }));
  };

  const handleRemoveEmergencyContact = (index) => {
    const updatedContacts = patientInfo.emergencyContacts.filter((_, i) => i !== index);
    setPatientInfo((prevState) => ({
      ...prevState,
      emergencyContacts: updatedContacts,
    }));
  };

  return (
    <div className="patient-info-container">
      <h2 className="patient-info-heading">Patient Information</h2>
      <form className="patient-info-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={patientInfo.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={patientInfo.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={patientInfo.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={patientInfo.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="insuranceProvider">Insurance Provider:</label>
          <input
            type="text"
            id="insuranceProvider"
            name="insuranceProvider"
            value={patientInfo.insuranceProvider}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="policyNumber">Policy Number:</label>
          <input
            type="text"
            id="policyNumber"
            name="policyNumber"
            value={patientInfo.policyNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Emergency Contacts:</label>
          {patientInfo.emergencyContacts.map((contact, index) => (
            <div key={index} className="emergency-contact">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={contact.name}
                onChange={(e) => handleEmergencyContactChange(index, e)}
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={contact.phone}
                onChange={(e) => handleEmergencyContactChange(index, e)}
              />
              <button type="button" onClick={() => handleRemoveEmergencyContact(index)}>
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={handleAddEmergencyContact}>
            Add Emergency Contact
          </button>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default PatientInfoPage;
