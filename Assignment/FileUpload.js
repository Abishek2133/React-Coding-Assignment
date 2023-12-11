import React, { useState } from 'react';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const allowedTypes = ['image/png', 'image/jpeg', 'image/gif']; // Add allowed file types
    const maxSize = 5 * 1024 * 1024; // 5MB in bytes

    if (file && allowedTypes.includes(file.type) && file.size <= maxSize) {
      setSelectedFile(file);
      setErrorMessage('');
    } else {
      setSelectedFile(null);
      if (!allowedTypes.includes(file.type)) {
        setErrorMessage('Invalid file type. Please upload an image (png, jpeg, gif).');
      } else if (file.size > maxSize) {
        setErrorMessage('File size exceeds the limit (5MB).');
      }
    }
  };

  const handleFileUpload = () => {
    // Implement file upload logic here (e.g., send file to server)
    if (selectedFile) {
      console.log('File uploaded:', selectedFile);
      // Reset selected file state after upload if needed
      setSelectedFile(null);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <button onClick={handleFileUpload} disabled={!selectedFile}>
        Upload
      </button>
    </div>
  );
};

export default FileUpload;
