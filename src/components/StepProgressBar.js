import React, { useContext } from 'react';
import { FormContext } from '../context/FormContext';


const StepProgressBar = () => {
    const { step } = useContext(FormContext);


    const getProgress = () => {
        switch (step) {
            case 1:
                return '0%'; 
            case 2:
                return '50%';
            case 3:
                return '100%'; 
            default:
                return '0%'; 
        }
    };

    return (
        <div className="step-progress-bar">
            <div className={`step ${step === 1 ? 'active' : ''}`}></div>
            <div className={`step ${step === 2 ? 'active' : ''}`}></div>
            <div className={`step ${step === 3 ? 'active' : ''}`}></div>
            <div className="progress">
                <div className="progress-bar" style={{ width: getProgress() }}></div>
            </div>
        </div>
    );
};

export default StepProgressBar;
