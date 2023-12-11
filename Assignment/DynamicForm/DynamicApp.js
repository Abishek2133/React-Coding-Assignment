import React from 'react';
import DynamicForm from './DynamicForm';

const formConfig = {
  fields: [
    { name: 'firstName', label: 'First Name', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    // Add more fields with different types and validation rules as needed
  ],
};

const DynamicApp = () => {
  return (
    <div>
      <h1>Dynamic Form Example</h1>
      <DynamicForm config={formConfig} />
    </div>
  );
};

export default DynamicApp;
