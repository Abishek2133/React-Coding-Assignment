import React, { useState } from 'react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({
    usernameError: '',
    passwordError: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Resetting errors when the user starts typing again
    setFormErrors({
      ...formErrors,
      [`${name}Error`]: '',
    });
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (formData.username.trim() === '') {
      errors.usernameError = 'Username is required';
      isValid = false;
    }

    if (formData.password.trim() === '') {
      errors.passwordError = 'Password is required';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      // Process the form submission (e.g., send data to backend)
      console.log('Form submitted:', formData);
      // Reset the form after submission
      setFormData({
        username: '',
        password: '',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
        {formErrors.usernameError && (
          <span style={{ color: 'red' }}>{formErrors.usernameError}</span>
        )}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        {formErrors.passwordError && (
          <span style={{ color: 'red' }}>{formErrors.passwordError}</span>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
