import React, { useContext } from "react";
import { FormContext } from "../context/FormContext";

const SecondStep = () => {
  const { formData, setFormData, nextStep, prevStep, errors } =
    useContext(FormContext);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={{ margin: "10px", color: "white" }}>
      <h2 style={{ color: "white" }}>Address Information</h2>
      <div className="form-group" style={{ marginBottom: "10px" }}>
        <label style={{ color: "white" }}>Address Line 1</label>
        <input
          type="text"
          className="form-control custom-input"
          name="address1"
          value={formData.address1}
          onChange={handleChange}
          style={{ borderColor: errors.address1 && "red", color: "black" }} 
        />
        {errors.address1 && (
          <small className="text-danger">{errors.address1}</small>
        )}
      </div>
      <div className="form-group" style={{ marginBottom: "10px" }}>
        <label style={{ color: "white" }}>Address Line 2</label>
        <input
          type="text"
          className="form-control custom-input"
          name="address2"
          value={formData.address2}
          onChange={handleChange}
          style={{ color: "black" }}
        />
      </div>
      <div className="form-group" style={{ marginBottom: "10px" }}>
        <label style={{ color: "white" }}>City</label>
        <input
          type="text"
          className="form-control custom-input"
          name="city"
          value={formData.city}
          onChange={handleChange}
          style={{ borderColor: errors.city && "red", color: "black" }}
        />
        {errors.city && <small className="text-danger">{errors.city}</small>}
      </div>
      <div className="form-group" style={{ marginBottom: "10px" }}>
        <label style={{ color: "white" }}>State</label>
        <input
          type="text"
          className="form-control custom-input"
          name="state"
          value={formData.state}
          onChange={handleChange}
          style={{ borderColor: errors.state && "red", color: "black" }} 
        />
        {errors.state && <small className="text-danger">{errors.state}</small>}
      </div>
      <div className="form-group" style={{ marginBottom: "10px" }}>
        <label style={{ color: "white" }}>Zip Code</label>
        <input
          type="text"
          className="form-control custom-input"
          name="zip"
          value={formData.zip}
          onChange={handleChange}
          style={{ borderColor: errors.zip && "red", color: "black" }}
        />
        {errors.zip && <small className="text-danger">{errors.zip}</small>}
      </div>
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
        <button className="btn btn-primary custom-next-btn" onClick={nextStep}>
          Next
        </button>
      </div>
    </div>
  );
};

export default SecondStep;
