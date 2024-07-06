import React, { createContext, useState, useEffect } from 'react';

const FormContext = createContext();

const FormProvider = ({ children }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: ''
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const savedData = localStorage.getItem('formData');
        if (savedData) {
            setFormData(JSON.parse(savedData));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('formData', JSON.stringify(formData));
    }, [formData]);

    const nextStep = () => {
        if (validateStep()) {
            if (step < 3) {
                setStep(step + 1);
            }
        }
    };

    const prevStep = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    const validateStep = () => {
        const newErrors = {};
        if (step === 1) {
            if (!formData.name) newErrors.name = 'Name is required';
            if (!formData.email) newErrors.email = 'Email is required';
            if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
            if (!formData.phone) newErrors.phone = 'Phone is required';
        } else if (step === 2) {
            if (!formData.address1) newErrors.address1 = 'Address Line 1 is required';
            if (!formData.city) newErrors.city = 'City is required';
            if (!formData.state) newErrors.state = 'State is required';
            if (!formData.zip) newErrors.zip = 'Zip Code is required';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (validateStep()) {
            alert('Form submitted!');
            localStorage.removeItem('formData');
        }
    };

    const resetForm = () => {
        setStep(1);
        setFormData({
            name: '',
            email: '',
            phone: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            zip: ''
        });
    };

    return (
        <FormContext.Provider value={{
            step, formData, setFormData, errors, nextStep, prevStep, handleSubmit, resetForm 
        }}>
            {children}
        </FormContext.Provider>
    );
};

export { FormContext, FormProvider };
