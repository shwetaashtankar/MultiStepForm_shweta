// src/components/MultiStepForm.js
import React, { useContext } from 'react';
import { FormContext } from '../context/FormContext';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import StepProgressBar from './StepProgressBar'; // Import the StepProgressBar component

const MultiStepForm = () => {
    const { step } = useContext(FormContext);

    const getStepComponent = (step) => {
        switch (step) {
            case 1:
                return <FirstStep />;
            case 2:
                return <SecondStep />;
            case 3:
                return <ThirdStep />;
            default:
                return null;
        }
    };

    return (
        <div className="container">
            <StepProgressBar />
            {getStepComponent(step)}
        </div>
    );
};

export default MultiStepForm;
