import React, { useState, useEffect } from 'react';
import './FadeInComponent.css'; // Import CSS for styling

const FadeInComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visibility to true after component mounts to trigger the fade-in animation
    setIsVisible(true);
  }, []);

  return (
    <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
      <h2>Fade-In Component</h2>
      <p>This component will fade in when mounted.</p>
    </div>
  );
};

export default FadeInComponent;