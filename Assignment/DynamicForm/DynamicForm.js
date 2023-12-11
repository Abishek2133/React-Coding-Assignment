import React, { useState } from 'react';

const DynamicForm = ({ config }) => {
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    for (const field of config.fields) {
      if (field.required && !formData[field.name]) {
        errors[field.name] = `${field.label} is required`;
        isValid = false;
      }
      // Add more validation rules as needed (e.g., regex validation)
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      // Handle form submission (e.g., send data to backend)
      console.log('Form data:', formData);
      // Clear form after submission if needed
      setFormData({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {config.fields.map((field, index) => (
        <div key={index}>
          <label>{field.label}</label>
          {field.type === 'text' && (
            <input
              type="text"
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleInputChange}
            />
          )}
          {field.type === 'email' && (
            <input
              type="email"
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleInputChange}
            />
          )}
          {/* Add more input types (e.g., password, checkbox) as needed */}
          {formErrors[field.name] && (
            <span style={{ color: 'red' }}>{formErrors[field.name]}</span>
          )}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;
