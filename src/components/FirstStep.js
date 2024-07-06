// src/components/FirstStep.js
import React, { useContext } from "react";
import { FormContext } from "../context/FormContext";

const FirstStep = () => {
  const { formData, setFormData, nextStep, errors } = useContext(FormContext);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={{ margin: "10px", color: "white" }}>
      <h2>Personal Information</h2>
      <div className="form-group" style={{ marginBottom: "10px" }}>
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={{ borderColor: errors.name && "red" }}
        />
        {errors.name && <small className="text-danger">{errors.name}</small>}
      </div>
      <div className="form-group" style={{ marginBottom: "10px" }}>
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={{ borderColor: errors.email && "red" }}
        />
        {errors.email && <small className="text-danger">{errors.email}</small>}
      </div>
      <div className="form-group" style={{ marginBottom: "10px" }}>
        <label>Phone</label>
        <input
          type="text"
          className="form-control"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          style={{ borderColor: errors.phone && "red" }}
        />
        {errors.phone && <small className="text-danger">{errors.phone}</small>}
      </div>
      <button className="btn btn-primary custom-next-btn" onClick={nextStep}>
        Next
      </button>
    </div>
  );
};

export default FirstStep;
