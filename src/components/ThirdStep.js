// src/components/ThirdStep.js
import React, { useContext } from 'react';
import { FormContext } from '../context/FormContext';

const ThirdStep = () => {
    const { formData, prevStep, handleSubmit, resetForm  } = useContext(FormContext);
    const submit = () => {
       handleSubmit()
        resetForm();
    };

    return (
        <div style={{ color: 'white' }}>
            <h2>Confirmation</h2>
            <ul className="list-group">
                <li className="list-group-item"style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px', color:'white' }}><strong>Name:</strong> {formData.name}</li>
                <li className="list-group-item"style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px', color:'white' }}><strong>Email:</strong> {formData.email}</li>
                <li className="list-group-item" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px', color:'white' }}><strong>Phone:</strong> {formData.phone}</li>
                <li className="list-group-item" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px', color:'white' }}><strong>Address 1:</strong> {formData.address1}</li>
                <li className="list-group-item" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px', color:'white' }}><strong>Address 2:</strong> {formData.address2}</li>
                <li className="list-group-item" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px', color:'white' }}><strong>City:</strong> {formData.city}</li>
                <li className="list-group-item" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px', color:'white' }}><strong>State:</strong> {formData.state}</li>
                <li className="list-group-item" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px', color:'white' }}><strong>Zip:</strong> {formData.zip}</li>
            </ul>
            <div
        style={{
          marginTop: "20px",
          textAlign: "right",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <button className="btn btn-secondary mr-2 custom-back-btn" onClick={prevStep}>
          Back
        </button>
        <button className="btn btn-primary custom-next-btn" onClick={submit}>
          Next
        </button>
      </div>
        </div>
    );
};

export default ThirdStep;
