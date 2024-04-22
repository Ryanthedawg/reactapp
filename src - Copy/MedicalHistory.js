import React, { useState, useEffect } from 'react';
import './MedicalHistory.css'; // Import the CSS file

const MedicalHistoryPage = () => {
  const [medicalHistory, setMedicalHistory] = useState(() => {
    // Load medical history from local storage or set default values
    const savedHistory = localStorage.getItem('medicalHistory');
    return savedHistory ? JSON.parse(savedHistory) : {
      allergies: [],
      procedures: [],
      familyHistory: '',
    };
  });

  useEffect(() => {
    // Save medical history to local storage when it changes
    localStorage.setItem('medicalHistory', JSON.stringify(medicalHistory));
  }, [medicalHistory]);

  const handleAddAllergy = () => {
    const newAllergy = prompt('Enter new allergy:');
    if (newAllergy) {
      setMedicalHistory((prevState) => ({
        ...prevState,
        allergies: [...prevState.allergies, newAllergy],
      }));
    }
  };

  const handleDeleteAllergy = (index) => {
    const newAllergies = [...medicalHistory.allergies];
    newAllergies.splice(index, 1);
    setMedicalHistory((prevState) => ({
      ...prevState,
      allergies: newAllergies,
    }));
  };

  const handleAddProcedure = () => {
    const newProcedure = prompt('Enter new procedure:');
    if (newProcedure) {
      setMedicalHistory((prevState) => ({
        ...prevState,
        procedures: [...prevState.procedures, newProcedure],
      }));
    }
  };

  const handleDeleteProcedure = (index) => {
    const newProcedures = [...medicalHistory.procedures];
    newProcedures.splice(index, 1);
    setMedicalHistory((prevState) => ({
      ...prevState,
      procedures: newProcedures,
    }));
  };

  const handleChangeFamilyHistory = (e) => {
    const newValue = e.target.value;
    setMedicalHistory((prevState) => ({
      ...prevState,
      familyHistory: newValue,
    }));
  };

  return (
    <div className="medical-history-container">
      <h2 className="medical-history-heading">Medical History</h2>
      <div className="medical-history-section">
        <h3>Allergies and Adverse Reactions</h3>
        {medicalHistory.allergies.map((allergy, index) => (
          <div key={index} className="medical-history-box">
            <span>{allergy}</span>
            <button onClick={() => handleDeleteAllergy(index)}>Delete</button>
          </div>
        ))}
        <button onClick={handleAddAllergy}>Add Allergy</button>
      </div>
      <div className="medical-history-section">
        <h3>Past Procedures/Surgeries</h3>
        {medicalHistory.procedures.map((procedure, index) => (
          <div key={index} className="medical-history-box">
            <span>{procedure}</span>
            <button onClick={() => handleDeleteProcedure(index)}>Delete</button>
          </div>
        ))}
        <button onClick={handleAddProcedure}>Add Procedure</button>
      </div>
      <div className="medical-history-section">
        <h3>Family Medical History</h3>
        <textarea
          value={medicalHistory.familyHistory}
          onChange={handleChangeFamilyHistory}
          placeholder="Enter family medical history..."
        />
      </div>
    </div>
  );
};

export default MedicalHistoryPage;
