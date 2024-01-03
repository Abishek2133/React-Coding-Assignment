import React from 'react';
import { useState , useEffect } from 'react';

const useForm = (initialState, onSubmitCallback, validateCallback) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validateCallback(values));
    setIsSubmitting(true);
  };

  const resetForm = () => {
    setValues(initialState);
    setErrors({});
    setIsSubmitting(false);
  };

  // Invoke the callback on successful form submission
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      onSubmitCallback(values);
      resetForm();
    }
  }, [errors, isSubmitting, onSubmitCallback, values]);

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
