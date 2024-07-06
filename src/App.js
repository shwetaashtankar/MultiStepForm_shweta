// src/App.js
import React from 'react';
import MultiStepForm from './components/MultiStepForm';
import { FormProvider } from './context/FormContext';

function App() {
  return (
    <FormProvider>
      <div className="App">
        <header className="App-header">
        </header>
        <div className="App-body">
          <MultiStepForm />
        </div>
      </div>
    </FormProvider>
  );
}

export default App;
